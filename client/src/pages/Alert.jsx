import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Badges from '../components/Badges'
import Allergen from '../components/Allergen'
import { saveAlert } from '../actions/Alert'
import { connect } from "react-redux"

import {
    getAdditives,
    getAllergens,
    hasPalmOil,
    hasGlukoseSirup,
    populateProduct
  } from '../utils/getInfoAboutProduct'

const Layout = styled.div`
  padding: 30px 10px;
`

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  margin-top: 10px;
`

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
    let { e, po, gf, a, text } = populateProduct(this.props.alert)

    return (
      <Layout>
        <Description>Zadej éčka, alergeny, na které chceš být u výrobku upozorňěn.</Description>
        <TextArea value={text} placeholder="např. krevety, aspartam, e330" id="ing" onChange={this.alertChange} />
        { e.length ? <Badges ecka={e} po={po} gf={gf} nojumps={true} /> : null }
        { a.map(it => <Allergen key={it} code={it} />) }
      </Layout>
    )
  }
}
