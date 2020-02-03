import React from "react";
import "./ReactSideNav.css"

var TOUCH_SLOP = 8 * window.devicePixelRatio * 4

export default class SideNav extends React.PureComponent {

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
      this.props.hide()
    }
    this.resetTouchInfo()
  }

  render() {
    let sectionClass = "VisCoKupujesSideNav" + (this.props.visible ? " VisCoKupujesSideNav--visible" : "")
    return (
      <section onClick={this.props.hide} className={sectionClass}>
        <div className="VisCoKupujesSideNav__content" onClick={e => e.stopPropagation()}
            onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}
            onTouchMove={this.onTouchMove} ref={el => this.sideNavContent = el}>

            {this.props.children}
        </div>
      </section>
    )
  }
}
