import React, { PureComponent } from 'react'
import Badges from '../components/Badges'
import Allergen from '../components/Allergen'
import { saveAlert } from '../actions/Alert'
import { connect } from "react-redux"
import AlertBox from '../components/AlertBox'
import {
    getAdditives,
    getAllergens,
    hasPalmOil,
    hasGlukoseSirup,
    populateProduct
  } from '../utils/getInfoAboutProduct'

import "./Alert.css"

@connect((store) => ({ alert: store.alert }))
export default class Alert extends PureComponent {

  alertChange = (evt) => {
    let text = evt.target.value
    let e = getAdditives(text)
    let a = getAllergens(text)
    let po = hasPalmOil(text)
    let gf = hasGlukoseSirup(text)
    let info = populateProduct({ e, a, po, gf })

    this.props.dispatch(saveAlert({ e, a, po, gf, text }))
  }

  render() {
    const pr = populateProduct(this.props.alert)
    let { e, po, gf, a, text } = pr

    return (
      <div className="Alert">
        <h2>Upozornění</h2>

        <div className="Alert__description">Pokud chceš být u výrobků upozorňován na konkrétní éčka nebo alergeny, vypiš je zde:</div>
        <AlertBox product={pr} showEmpty={true} />
        <textarea value={text} placeholder="např. krevety, aspartam, e330" id="ing" onChange={this.alertChange} />

        { e.length ? <Badges ecka={e} po={po} gf={gf} nojumps={true} /> : null }
        { a.map(it => <Allergen key={it} code={it} />) }
      </div>
    )
  }
}
