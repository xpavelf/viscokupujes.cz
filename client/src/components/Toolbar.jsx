import React from "react"
import { Link } from "react-router-dom"
import imgLogo from "../icons/logo.png"
import { connect } from "react-redux"
import SearchBox  from "./SearchBox"
import "./Toolbar.css"

class Toolbar extends React.Component {

  static contextTypes = {
    scan: React.PropTypes.func
  }

  share = () => {
    let pr
    if (window.location.pathname.indexOf('/product') !== -1) {
      pr = this.props.activeProduct.product
    }
    let url = pr ? `https://viscokupujes.cz/product/${pr.id}` : "https://viscokupujes.cz"
    window.plugins.socialsharing.share(
      (pr ? `${pr.name}\n\n`: '') +
      'Chceš jíst zdravě, ale nevyznáš se v éčkách? Najdi si éčka v potravinách a nekupuj zbytečnou chemii.',
      'viscokupujes.cz',
      'https://viscokupujes.cz/banner-256x256.png',
      url)
  }

  render() {
    return (
      <header className="Toolbar">
        <h1 className="Toolbar__title">
          <Link className="Toolbar__sideNavLink" to={ ({state: {sideNav: true}}) }>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#FFF"/></svg>
          </Link>
          <Link to="/" className="Toolbar__homeLink"><img alt="Logo - viscokupujes.cz" src={imgLogo} /></Link>


          <button onClick={this.share} className="Toolbar__share">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 500 500" fill="white">
              <path d="M31.949,431.711c0,20.078,16.264,36.34,36.34,36.34h363.421  c20.078,0,36.34-16.262,36.34-36.34V68.29c0-20.077-16.262-36.34-36.34-36.34H68.29c-20.077,0-36.34,16.264-36.34,36.34V431.711z M113.718,250c0-30.074,24.438-54.513,54.513-54.513c12.536,0,24.075,4.268,33.253,11.268l75.949-34.434  c-0.176-1.366-0.176-2.724-0.176-4.09c0-30.075,24.435-54.513,54.514-54.513c30.078,0,54.513,24.438,54.513,54.513  c0,30.072-24.435,54.513-54.513,54.513c-13.992,0-26.808-5.271-36.433-13.992l-73.229,33.255c0.453,2.635,0.634,5.269,0.634,7.993  c0,2.725-0.182,5.36-0.634,7.994l73.229,33.164c9.625-8.631,22.44-13.9,36.433-13.9c30.078,0,54.513,24.435,54.513,54.514  c0,30.078-24.435,54.513-54.513,54.513c-30.079,0-54.514-24.435-54.514-54.513c0-1.368,0-2.725,0.176-4.093l-75.949-34.521  c-9.178,7.087-20.717,11.355-33.253,11.355C138.156,304.513,113.718,280.078,113.718,250z" />
            </svg>
          </button>
        </h1>
        <button className="Toolbar__scanner" onClick={this.context.scan}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16" fill="black">
            <path d="M14.661 2.968H12.2a.95.95 0 0 0-.947-.947h-6.5a.95.95 0 0 0-.947.947H1.333A1.337 1.337 0 0 0 0 4.3v8.1a1.337 1.337 0 0 0 1.333 1.333h13.328a1.337 1.337 0 0 0 1.333-1.333V4.3a1.337 1.337 0 0 0-1.333-1.332zM7.994 12.2a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2z"/>
            <path d="M7.994 4.3a3.7 3.7 0 1 0 3.7 3.7 3.7 3.7 0 0 0-3.7-3.7zm0 6.9a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2z"/>
            <path d="M5.735 6.258h.651v3.484h-.651zm.971 0h.326v3.484h-.326zm.645 0h.651v3.484h-.651zm2.263 0h.651v3.484h-.651zm-1.291 0h.326v3.484h-.326zm.645 0h.326v3.484h-.326z"/>
          </svg>
        </button>
        <SearchBox />
      </header>
    )
  }
}

export default connect((store) => ({ activeProduct: store.activeProduct }))(Toolbar)
