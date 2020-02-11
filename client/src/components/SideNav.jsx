import React from "react";
import { Link, withRouter } from "react-router-dom"
import ver from "../../version.json"
import ReactSideNav from "./ReactSideNav"
import scanProduct from "../utils/scanProduct"
import "./SideNav.css"
import imgSprite from "../icons/sprite.svg"
import SvgSprite from "./SvgSprite"

@withRouter
export default class SideNav extends React.PureComponent {

  rateApp = () => AppRate && AppRate.promptForRating()

  render() {
    let visible = this.props.location.state && this.props.location.state.sideNav
    let hide = () => this.props.history.replace({ state: { sideNav: false} })

    return (
      <ReactSideNav visible={visible} hide={hide}>
        <div className="SideNav__content">
          <div className="SideNav__header">
            <div className="SideNav__title">{ver}</div>
          </div>
          <Link replace to="/" className="SideNav__link">
            <SvgSprite width="30" height="30" icon="home" />
            Domů
          </Link>
          { __APP_MODE__ === "mob"
              ? <Link to={{ state: { sideNav: false} }} onClick={scanProduct} className="SideNav__link">
                  <SvgSprite width="30" height="30" icon="camera" />
                  Naskenuj čárový kód
                </Link>
              : null
          }
          <Link replace to="/ecka" className="SideNav__link">
            <SvgSprite width="30" height="30" icon="list" />
            Seznam éček
          </Link>
          <Link replace to="/search-history" className="SideNav__link">
            <SvgSprite width="30" height="30" icon="search-history" />
            Poslední hledání
          </Link>
          <Link replace to="/alert" className="SideNav__link">
            <SvgSprite width="30" height="30" icon="bell" />
            Upozornění
          </Link>
          <Link replace to="/about-us" className="SideNav__link">
            <SvgSprite width="30" height="30" icon="about-us" />
            O nás
          </Link>

          { __APP_MODE__ === "mob"
            ? <Link to={{ state: { sideNav: false} }} onClick={this.rateApp} className="SideNav__link">
                <SvgSprite width="30" height="30" icon="star" />
                Ohodnoťte aplikaci
              </Link>
            : <a href="https://play.google.com/store/apps/details?id=cz.viscokupujes.mnamka" target="_blank" className="SideNav__link">
                <SvgSprite width="30" height="30" icon="star" />
                Ohodnoťte aplikaci
              </a>
          }
        </div>
      </ReactSideNav>
    )
  }
}
