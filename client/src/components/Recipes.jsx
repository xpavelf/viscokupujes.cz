import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getRecipes } from "../actions/Recipe"
import "./Recipes.css"

const _shuffle = (arrSrc) => {
  let arr = arrSrc.slice()
  let ctr = arr.length, temp, index

  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr)
      ctr--
      temp = arr[ctr]
      arr[ctr] = arr[index]
      arr[index] = temp
  }
  return arr
}


@withRouter
@connect((store) => ({ data: store.recipes }))
export default class Recipes extends React.Component {

  state = { open: false }

  constructor(props) {
    super(props)
    if (props.bc) {
      props.dispatch(getRecipes(props.bc))
    }
  }

  toggle = () => this.setState({ open: !this.state.open })

  onClick = (evt) => {
    let url = evt.currentTarget.href
    ga && ga('send', 'event', 'LinkTo', 'jidelniplan', url)
    if (__APP_MODE__ === "mob") {
      evt.preventDefault()
      evt.stopPropagation()
      navigator.app.loadUrl(url, {openExternal: true})
    }
  }

  recipeTmpl = (rec) => {
    // jidelniplan api change
    let url = (rec.urls.recipes && rec.urls.recipes.view)
      ? rec.urls.recipes.view
      : rec.urls.view

    return (
      <li className="Recipe" key={rec.title}>
        <a className="Recipe__link" href={url} target="_blank" onClick={this.onClick}>
          <div className="Recipe__img">
            { this.state.open ? <img src={rec.images.hero} /> : null }
          </div>
          <div className="Recipe__title">{rec.title}</div>
        </a>
      </li>
    )
  }

  render() {
    return ((this.props.data.recipes && this.props.data.bc === this.props.bc)
      ?
        <div className={`Recipes${this.state.open ? " Recipes--open": ""}`}>
          <div className="Recipes__banner" onClick={this.toggle}>
            Recepty
            <div className="Recipes__bannerExtra">obsahující tento produkt</div>
          </div>
          <ul className="Recipes__list">
            { _shuffle(this.props.data.recipes).slice(0, 3).map(this.recipeTmpl) }
          </ul>
        </div>
      : null
    )
  }
}
