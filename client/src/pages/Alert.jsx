import React, { PureComponent } from 'react'
import styled from 'styled-components'
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

const PageHeading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  padding-bottom: 10px;
`

const Layout = styled.div`
  padding: 20px 10px 30px 10px;
`

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 20px 0px;
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
    const pr = populateProduct(this.props.alert)
    let { e, po, gf, a, text } = pr

    return (
      <Layout>
        <PageHeading>Upozornění</PageHeading>

        <Description>Pokud chceš být u výrobků upozorňován na konkrétní éčka nebo alergeny, vypiš je zde:</Description>
        <AlertBox product={pr} showEmpty={true} />
        <TextArea value={text} placeholder="např. krevety, aspartam, e330" id="ing" onChange={this.alertChange} />

        { e.length ? <Badges ecka={e} po={po} gf={gf} nojumps={true} /> : null }
        { a.map(it => <Allergen key={it} code={it} />) }
      </Layout>
    )
  }
}
