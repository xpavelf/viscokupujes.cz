import React from "react";
import { Link, withRouter } from "react-router-dom"
import ver from "../../version.json"
import "./SideNav.css"

var TOUCH_SLOP = 8 * window.devicePixelRatio * 4

class SideNav extends React.PureComponent {
  static contextTypes = {
    scan: React.PropTypes.func
  }

  hide = () => {
    this.props.history.replace({ state: { sideNav: false} })
  }

  resetTouchInfo() {
    this.touchStartX = undefined
    this.sideNavTransform = undefined
  }

  onTouchStart = (e) => {
    this.touchStartX = e.touches[0].pageX
  }

  onTouchMove = (e) => {
    let newTouchX = e.touches[0].pageX
    this.sideNavTransform = Math.min(0, newTouchX - this.touchStartX)

    this.sideNavContent.style.transform = `translateX(${this.sideNavTransform}px)`
  }

  onTouchEnd = () => {
    this.sideNavContent.style.transform = ""
    if (this.sideNavTransform < -TOUCH_SLOP) {
      this.hide()
    }
    this.resetTouchInfo()
  }

  render() {
    let sectionClass = "SideNav" + (this.props.show ? " SideNav--visible" : "")

    return (
      <section onClick={this.hide} className={sectionClass}>
        <div className="SideNav__content" onClick={e => e.stopPropagation()}
            onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}
            onTouchMove={this.onTouchMove} ref={el => this.sideNavContent = el}>

          <div className="SideNav__header">
            <div className="SideNav__title">{ver}</div>
          </div>
          <div className="SideNav__body">
            <Link replace to="/" className="SideNav__link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="40 40 400 400">
                <path fill="currentColor" d="M233.333,160c-4.703,4.703-69.124,65.807-106.666,101.395v125.272h80v-100 h66.666v100h80V261.189C314.309,224.083,246.667,160,246.667,160S240,153.333,233.333,160z M353.333,120
              		c0-7.363-5.97-13.333-13.333-13.333h-26.667c-7.363,0-13.333,5.97-13.333,13.333v11.562 c16.895,16.159,35.998,34.396,53.333,50.932V120z M406.667,246.667c0,0-140-133.334-153.334-146.667
              		c-13.333-13.333-26.666,0-26.666,0S80,240,73.333,246.667c-6.666,6.666,0,13.333,0,13.333s6.667,6.667,13.334,13.333 c6.666,6.667,13.333,0,13.333,0s126.667-120,133.333-126.666c6.667-6.667,13.334,0,13.334,0s126.666,120,133.333,126.666
              		c6.667,6.667,13.333,0,13.333,0s0,0,13.334-13.333C413.333,253.333,406.667,246.667,406.667,246.667z"/>
              </svg>
              Domů
            </Link>
            <Link to={{ state: { sideNav: false} }} onClick={this.context.scan} className="SideNav__link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" fill="currentColor">
                <path d="M14.661 2.968H12.2a.95.95 0 0 0-.947-.947h-6.5a.95.95 0 0 0-.947.947H1.333A1.337 1.337 0 0 0 0 4.3v8.1a1.337 1.337 0 0 0 1.333 1.333h13.328a1.337 1.337 0 0 0 1.333-1.333V4.3a1.337 1.337 0 0 0-1.333-1.332zM7.994 12.2a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2z"/>
                <path d="M7.994 4.3a3.7 3.7 0 1 0 3.7 3.7 3.7 3.7 0 0 0-3.7-3.7zm0 6.9a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2z"/>
                <path d="M5.735 6.258h.651v3.484h-.651zm.971 0h.326v3.484h-.326zm.645 0h.651v3.484h-.651zm2.263 0h.651v3.484h-.651zm-1.291 0h.326v3.484h-.326zm.645 0h.326v3.484h-.326z"/>
              </svg>
              Naskenuj čárový kód
            </Link>
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
            <Link replace to="/about-us" className="SideNav__link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256,50.002C142.229,50.002,50,142.228,50,256c0,113.769,92.229,205.998,206,205.998 c113.77,0,206-92.229,206-205.998C462,142.228,369.77,50.002,256,50.002z M251.989,376.93
                  c-29.694,10.436-54.175-1.531-49.264-30.049c4.913-28.523,33.09-89.589,37.11-101.135c4.017-11.547-3.687-14.712-11.943-10.015 c-4.763,2.749-11.84,8.254-17.916,13.606c-1.685-3.393-4.055-7.27-5.833-10.983c9.915-9.936,26.488-23.256,46.108-28.083
                  c23.441-5.787,62.624,3.463,45.783,48.271c-12.024,31.937-20.529,53.976-25.888,70.388c-5.356,16.418,1.006,19.861,10.382,13.464 c7.325-5.001,15.129-11.804,20.849-17.079c2.646,4.301,3.494,5.672,6.11,10.614C297.559,346.105,271.584,369.924,251.989,376.93z
                  M313.516,179.372c-13.469,11.463-33.433,11.216-44.601-0.561c-11.166-11.77-9.302-30.606,4.163-42.072 c13.468-11.463,33.435-11.215,44.6,0.553C328.843,149.066,326.98,167.902,313.516,179.372z"/>
              </svg>
              O nás
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(SideNav)
