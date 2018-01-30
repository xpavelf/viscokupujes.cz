import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getRecipes } from "../actions/Recipe"
import imgSprite from "../icons/sprite.svg"
import { shuffleArr } from "../utils/shuffle"
import "./Recipes.css"
const ITEMS_ON_PAGE = 3

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

  setPage = (delta) => {
    let page = this.state.page + delta
    if (page < 0) {
      page = this.state.pages - 1
    }

    page = page % this.state.pages

    this.setState({ page })
  }

  componentWillReceiveProps(nextProps) {
    let pages = nextProps.data.recipes ? Math.ceil(nextProps.data.recipes.length / ITEMS_ON_PAGE) : 0
    this.setState({
      recipes: shuffleArr(nextProps.data.recipes),
      page: 0,
      pages
    })
  }

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
    let url = rec.urls["recipes.view"]

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
    if (this.props.data.pending) {
      return (
        <div className="Recipes Recipes--pending">
          <div className="Recipes__banner">
            Hledám recepty
            <div className="Recipes__bannerExtra">obsahující tento produkt</div>
          </div>
        </div>
      )
    }

    return ((this.state.recipes && this.props.data.bc === this.props.bc)
      ?
        <div className={`Recipes${this.state.open ? " Recipes--open": ""}`}>
          <div className="Recipes__banner" onClick={this.toggle}>
            Recepty
            <div className="Recipes__bannerExtra">obsahující tento produkt</div>
          </div>
          <ul className="Recipes__list">
            { this.state.recipes.slice(this.state.page * ITEMS_ON_PAGE, this.state.page * ITEMS_ON_PAGE + ITEMS_ON_PAGE).map(this.recipeTmpl) }
            {
              this.state.recipes.length > ITEMS_ON_PAGE
                ? <li style={{ textAlign: "center" }}>
                    <button className="Recipes__actionBtn" style={{ paddingRight: 10 }} onClick={() => this.setPage(-1)}>
                      <svg width="30" height="30" ><use xlinkHref={`${imgSprite}#arrow-chevron-left`}></use></svg>
                    </button>
                    <button className="Recipes__actionBtn" style={{ paddingLeft: 10 }} onClick={() => this.setPage(1)}>
                      <svg width="30" height="30"><use xlinkHref={`${imgSprite}#arrow-chevron-right`}></use></svg>
                    </button>
                  </li>
                : null
            }

          </ul>
        </div>
      : <div className="Recipes Recipes--empty">
          <div className="Recipes__banner">
            Nenašli jsme žádný recept
            <div className="Recipes__bannerExtra">obsahující tento produkt</div>
          </div>
        </div>
    )
  }
}
