import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import SearchBox  from "./SearchBox"
import scanProduct from "../utils/scanProduct"
import ManualScan from "./ManualScan"
import imgSprite from "../icons/sprite.svg"
import "./Toolbar.css"

@connect((store) => ({ activeProduct: store.activeProduct }))
export default class Toolbar extends React.Component {

  state = { showModal: false }

  share = () => {
    let pr
    if (window.location.pathname.indexOf('/product') !== -1) {
      pr = this.props.activeProduct.product
    }
    let url = pr ? `https://viscokupujes.cz/app/product/${pr.id}` : "https://viscokupujes.cz"
    window.plugins.socialsharing.share(
      (pr ? `${pr.name}\n\n`: '') +
      'Získej během sekundy přehled o éčkách, alergenech a složení výrobku. Jednoduše a zdarma. Ušetříš tak spoustu času a peněz a uděláš něco pro své zdraví.',
      'viscokupujes.cz',
      'https://viscokupujes.cz/banner-256x256.png',
      url)
  }

  scanProduct = () => {
    if (__APP_MODE__ === "mob") {
      scanProduct()
    } else {
      this.setState({ showModal: true })
    }
  }

  onCloseModal = () => this.setState({ showModal: false })

  // workaround - if logo styled only as txt in css - chrome desktop vs android renders on different baseline in the block
  __title = (
    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="40" viewBox="0 0 230 40">
      <text fill="currentColor" x="15" y="35" fontFamily="Luckiest Guy" fontSize="26">
        VÍŠ CO KUPUJ<tspan fill="red" fontSize="35">E</tspan>Š?
      </text>
    </svg>
  )

  render() {
    return (
      <div className="Toolbar">
        <h1 className="Toolbar__title">
          <Link className="Toolbar__sideNavLink" to={ ({state: {sideNav: true}}) }>
            <svg width="30" height="30" style={{ color: "white" }}><use xlinkHref={`${imgSprite}#menu`}></use></svg>
          </Link>
          <Link to="/app" className="Toolbar__homeLink">{this.__title}</Link>

          { __APP_MODE__ === "mob"
            ? <button onClick={this.share} className="Toolbar__share">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 500 500" fill="white">
                  <path d="M31.949,431.711c0,20.078,16.264,36.34,36.34,36.34h363.421  c20.078,0,36.34-16.262,36.34-36.34V68.29c0-20.077-16.262-36.34-36.34-36.34H68.29c-20.077,0-36.34,16.264-36.34,36.34V431.711z M113.718,250c0-30.074,24.438-54.513,54.513-54.513c12.536,0,24.075,4.268,33.253,11.268l75.949-34.434  c-0.176-1.366-0.176-2.724-0.176-4.09c0-30.075,24.435-54.513,54.514-54.513c30.078,0,54.513,24.438,54.513,54.513  c0,30.072-24.435,54.513-54.513,54.513c-13.992,0-26.808-5.271-36.433-13.992l-73.229,33.255c0.453,2.635,0.634,5.269,0.634,7.993  c0,2.725-0.182,5.36-0.634,7.994l73.229,33.164c9.625-8.631,22.44-13.9,36.433-13.9c30.078,0,54.513,24.435,54.513,54.514  c0,30.078-24.435,54.513-54.513,54.513c-30.079,0-54.514-24.435-54.514-54.513c0-1.368,0-2.725,0.176-4.093l-75.949-34.521  c-9.178,7.087-20.717,11.355-33.253,11.355C138.156,304.513,113.718,280.078,113.718,250z" />
                </svg>
              </button>
            : <a target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fviscokupujes.cz" title="Facebook" className="Toolbar__share">
                <svg height="32" width="32" viewBox="0 0 512 512">
                   <rect fill="#3cb73c" x="0" y="0" width="512" height="512" />
                   <path fill="white" d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z"/>
                </svg>
              </a>
          }
        </h1>
        <button className="Toolbar__scanner" onClick={this.scanProduct}>
          <svg width="36" height="36"><use xlinkHref={`${imgSprite}#camera`}></use></svg>
        </button>
        { this.state.showModal
          ? <ManualScan onClose={this.onCloseModal} />
          : null
        }
        <SearchBox />
      </div>
    )
  }
}
