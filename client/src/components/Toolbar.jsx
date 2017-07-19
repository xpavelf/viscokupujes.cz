import React from "react"
import { Link } from "react-router-dom"
import imgLogo from "../icons/logo.png"
import SearchBox  from "./SearchBox"
import "./Toolbar.css"

export default class Toolbar extends React.Component {

  static contextTypes = {
    scan: React.PropTypes.func
  }

  render() {
    return (
      <header className="Toolbar">
        <h1 className="Toolbar__title">
          <Link className="Toolbar__sideNavLink" to={ ({state: {sideNav: true}}) }>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#FFF"/></svg>
          </Link>
          <Link to="/" className="Toolbar__homeLink"><img alt="Logo - viscokupujes.cz" src={imgLogo} /></Link>
          <a target="_blank" rel="noopener" href="https://www.facebook.com/viscokupujes" title="Facebook" className="Toolbar__fbLink">
            <svg height="32" width="32" viewBox="0 0 512 512">
                <rect fill="#3cb73c" x="0" y="0" width="512" height="512" />
              <path fill="white" d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z"/>
            </svg>
          </a>
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
