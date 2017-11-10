import React from "react";
import { Link, withRouter } from "react-router-dom"
import ver from "../../version.json"
import ReactSideNav from "./common/SideNav"
import scanProduct from "../utils/scanProduct"
import "./SideNav.css"

@withRouter
export default class SideNav extends React.PureComponent {

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
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="40 40 400 400">
              <path fill="currentColor" d="M233.333,160c-4.703,4.703-69.124,65.807-106.666,101.395v125.272h80v-100 h66.666v100h80V261.189C314.309,224.083,246.667,160,246.667,160S240,153.333,233.333,160z M353.333,120
            		c0-7.363-5.97-13.333-13.333-13.333h-26.667c-7.363,0-13.333,5.97-13.333,13.333v11.562 c16.895,16.159,35.998,34.396,53.333,50.932V120z M406.667,246.667c0,0-140-133.334-153.334-146.667
            		c-13.333-13.333-26.666,0-26.666,0S80,240,73.333,246.667c-6.666,6.666,0,13.333,0,13.333s6.667,6.667,13.334,13.333 c6.666,6.667,13.333,0,13.333,0s126.667-120,133.333-126.666c6.667-6.667,13.334,0,13.334,0s126.666,120,133.333,126.666
            		c6.667,6.667,13.333,0,13.333,0s0,0,13.334-13.333C413.333,253.333,406.667,246.667,406.667,246.667z"/>
            </svg>
            Domů
          </Link>
          { __APP_MODE__ === "mob"
              ? <Link to={{ state: { sideNav: false} }} onClick={scanProduct} className="SideNav__link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M14.661 2.968H12.2a.95.95 0 0 0-.947-.947h-6.5a.95.95 0 0 0-.947.947H1.333A1.337 1.337 0 0 0 0 4.3v8.1a1.337 1.337 0 0 0 1.333 1.333h13.328a1.337 1.337 0 0 0 1.333-1.333V4.3a1.337 1.337 0 0 0-1.333-1.332zM7.994 12.2a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2z"/>
                    <path d="M7.994 4.3a3.7 3.7 0 1 0 3.7 3.7 3.7 3.7 0 0 0-3.7-3.7zm0 6.9a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2z"/>
                    <path d="M5.735 6.258h.651v3.484h-.651zm.971 0h.326v3.484h-.326zm.645 0h.651v3.484h-.651zm2.263 0h.651v3.484h-.651zm-1.291 0h.326v3.484h-.326zm.645 0h.326v3.484h-.326z"/>
                  </svg>
                  Naskenuj čárový kód
                </Link>
              : null
          }
          <Link replace to="/ecka" className="SideNav__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1000 1000">
              <path fill="currentColor" d="M783.8,990H216.2c-34.8,0-63.1-28.2-63.1-62.9V167.3c0-34.7,28.2-62.9,63.1-62.9h157.6V170H247.8c-17.4,0-31.5,14.1-31.5,31.5v694.2c0,17.4,14.1,31.5,31.5,31.5h504.5c17.4,0,31.5-14,31.5-31.5V201.4c0-17.4-14.1-31.5-31.5-31.5H626.1v-65.5h157.6c34.8,0,63.1,28.2,63.1,62.9v759.7C846.8,961.8,818.6,990,783.8,990z M373.9,358.7h346.8v31.5H373.9V358.7z M373.9,453.1h346.8v31.5H373.9V453.1z M373.9,547.6h346.8V579H373.9V547.6z M373.9,642h346.8v31.5H373.9V642z M720.7,862.2H373.9v-31.4h346.8V862.2z M373.9,736.4h346.8v31.5H373.9V736.4z M279.3,358.1h31.5v31.5h-31.5V358.1z M279.3,452.5h31.5V484h-31.5V452.5z M279.3,546.9h31.5v31.5h-31.5V546.9z M279.3,641.3h31.5v31.5h-31.5V641.3z M310.8,861.6h-31.5v-31.5h31.5V861.6z M279.3,735.7h31.5v31.5h-31.5V735.7z M689.2,203.4c17.4,0,31.5,14.1,31.5,31.5c0,17.4,0,60.9,0,60.9H279.3c0,0,0-43.6,0-60.9c0-17.4,14.1-31.5,31.5-31.5h94.6c0,0,0.4-44.7,0.4-95.9c0-53.1,41-97.5,94.2-97.5c53.2,0,95.6,46.7,95.6,97.8c0,55.1-1,95.6-1,95.6H689.2z M500,104.4c-17.4,0-31.5,14.1-31.5,31.4c0,17.4,14.1,31.5,31.5,31.5s31.5-14.1,31.5-31.5C531.5,118.5,517.4,104.4,500,104.4z"/>
            </svg>
            Seznam éček
          </Link>
          <Link replace to="/search-history" className="SideNav__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M914.4,474.4c2.2-112.8-39.8-226.2-126.8-311.4C620.2-0.8,351.7,2.1,187.9,169.4C48.7,311.6,30.5,526.6,130.8,688.6L36.6,790.4c-37.5,40.4-35,103.6,5.4,141c40.4,37.4,103.6,35,141-5.4l89.8-97c85.9,51.7,186,70.4,282,55.9c45.3,32.9,100.7,52.5,160.9,52.5c151.5,0,274.3-122.8,274.3-274.3C990,589.9,961.1,523.6,914.4,474.4z M264.1,697.6c-127.9-125.2-130.1-330.5-4.8-458.5c125.2-127.9,330.6-130.1,458.5-4.8c49.2,48.2,79.6,108.3,91.5,171.2c-29.3-10.7-60.7-16.8-93.6-16.8c-151.5,0-274.3,122.9-274.3,274.3c0,45.5,11.3,88.4,30.9,126.2C396.8,785,322.4,754.7,264.1,697.6z M529.9,864.6c0.2,0.1,0.3,0.2,0.5,0.4C530.3,864.9,530.1,864.7,529.9,864.6z M715.7,887.6c-123.9,0-224.5-100.5-224.5-224.5s100.5-224.5,224.5-224.5c123.9,0,224.5,100.5,224.5,224.5S839.6,887.6,715.7,887.6z"/>
              <path d="M805.2,691h-86.8V566.3c0-13.8-11.2-24.9-24.9-24.9c-13.8,0-24.9,11.2-24.9,24.9v149.6c0,13.8,11.2,24.9,24.9,24.9h111.7c13.8,0,24.9-11.2,24.9-24.9C830.2,702.1,819,691,805.2,691z"/>
            </svg>
            Poslední hledání
          </Link>
          <Link replace to="/cooperation" className="SideNav__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="120 120 800 800" fill="currentColor">
            <g>
              <path d="M322.6,355.9c-30.4,25-15.7,96,55.1,53.2c0,0,86.5-43.3,137-72c11-6.2,18.4-4.2,27.6,6.3c10.1,7.3,239,262.9,239,262.9s70.6-53.6,98.1-109.9c0,0-63.4-119.2-123.9-237.5c-17.5,9.9-32.5,19.3-52.6,13.6c-20.8-5.9-38-22.2-56.8-33.1c-21.4-12.5-39.6-23.7-63.5-27.1c-35.4-5.1-63.2,10.8-93.7,28.3c-34.7,19.9-68.3,42.2-101.2,65.6C365.5,321.8,343.8,338.4,322.6,355.9z"/>
              <path d="M367,754c-11.9-16.4-9.6-40.8,5.1-54.5l72.6-66.1c14.7-13.8,36.2-11.7,48.1,4.6l0,0c11.9,16.3,9.6,40.7-5.1,54.6l-72.6,66.1C400.5,772.3,378.9,770.3,367,754L367,754z"/>
              <path d="M300,693.1c-11.9-16.4-9.6-40.8,5.1-54.6l57.3-52.1c14.7-13.8,36.2-11.7,48.1,4.6l0,0c11.9,16.4,9.6,40.8-5.1,54.6l-57.3,52.2C333.5,711.5,311.9,709.4,300,693.1L300,693.1z"/>
              <path d="M218.9,643.3c-11-17.1-7.6-41.3,7.7-54.2l12.8-10c15.3-12.9,36.7-9.4,47.9,7.6l0.8,1c11.1,17.1,6.9,40.3-8.5,53.2l-12.8,10C251.5,663.8,230,660.4,218.9,643.3L218.9,643.3z"/>
              <path d="M539.8,716.9c-12.6-15.6-34.2-16.5-48.3-1.9l-31.3,32.5c-14.1,14.6-15.3,39.1-2.7,54.8c12.6,15.7,34.3,16.5,48.3,1.9l31.3-32.5C551.2,757.1,552.4,732.6,539.8,716.9z"/>
              <path d="M987.4,442.6c5.2,9.9,2.3,21.6-6.3,26.1l-52.7,27.8c-8.6,4.4-19.8,0-24.9-9.9L778.5,244.8c-5.1-9.9-2.3-21.6,6.3-26.1l52.7-27.7c8.6-4.5,19.8,0,24.9,9.9L987.4,442.6z"/>
              <path d="M95.4,484.2c-3.9,10.5-14,16.4-22.5,13.2L19.8,479c-8.5-3.2-12.1-14.3-8.2-24.7l95.9-254.7c3.9-10.5,14-16.4,22.5-13.2l53.1,18.5c8.5,3.2,12.1,14.3,8.2,24.7L95.4,484.2z"/>
              <path d="M778.4,637.6l-0.2-0.2c-1.1,5.8-2.7,10.7-7.1,15.6c-7.1,7.9-16.3,11.8-25.6,11.8c-9.7,0-19.5-4.3-27-12.9l-90.4-102.5c-1.7-2-3.8-2.9-6-2.9c-8.6,0-18.2,14.2-10.4,22.4l74.2,82c14.1,16.2,14.4,41.2,0.4,56.8c-6.5,7.2-14.5,10.7-22.6,10.7c-9.4,0-19-4.6-26.6-13.3l-85-94.8c-1.9-3-4.3-4.3-6.8-4.3c-8,0-16.4,13.3-8,22.9l65.4,75c13.7,15.7,12.6,40.1-0.9,55.3c-6.2,6.9-13.8,10.2-21.6,10.2c-4.5,0-9.1-1.1-13.5-3.3c-2.7,7.2-6.7,14-11.9,20c8,4.4,16.7,6.9,25.4,6.9c14.3,0,27.8-6.2,38-17.6c10.6-11.8,16.1-26.8,16.7-41.9c8.8,5.5,18.8,8.5,28.8,8.5c14.7,0,28.6-6.4,39.1-18.1c10.5-11.7,15.9-26.9,16.3-42.2c8.1,4.4,17.2,6.7,26.4,6.7c16,0,30.9-6.9,42-19.3c10.6-11.9,12.5-24.3,13.8-33.3c0.7-4.9-0.2-9.8-2.2-14.1c-2.6,2.1-4.2,3.3-4.6,3.6L778.4,637.6z"/>
              <path d="M212.6,570.7l0.3-0.3l0.3-0.3l5.4-4.2c-44.4-45-71.5-78.2-71.5-78.2c42.6-108.5,90.8-240.7,90.8-240.7c-0.4,7.5,24.8,20.9,29.9,22.9c8.4,3.4,17.5,5,26.6,5c2.6,0,5.1-0.1,7.6-0.4c26.6-2.7,51.6-18,75-31.3c15.8-8.9,35.4-18,53.9-18c8.8,0,17.3,2.3,25.2,7.4c7.1-4.3,14.1-8.5,21-12.4c-1.2-1.5-2.5-2.9-4-4.1c-12-9.6-26.2-14.4-42.1-14.4c-24.7,0-48.7,11.9-64.6,20.8l-6.1,3.5c-20,11.4-40.6,23.1-60.4,25.1c-1.8,0.2-3.7,0.3-5.5,0.3c-6.6,0-13-1.2-18.5-3.4c-4-1.7-13.1-7-17.4-10.4c-2.8-6.8-8.6-11.9-15.9-13.6c-1.6-0.4-3.2-0.5-4.7-0.5c-9.1,0-17.6,5.9-21,15.2c-0.5,1.3-48.6,133.2-90.6,240.1c-3.2,8.2-1.8,17.6,3.7,24.3c1.2,1.4,28,34.1,72.1,78.9C205.1,578,208.6,574.1,212.6,570.7z"/>
            </g>
            </svg>
            Spolupráce
          </Link>
        </div>
      </ReactSideNav>
    )
  }
}
