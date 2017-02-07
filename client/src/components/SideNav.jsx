import React from "react";
import { Link, withRouter } from "react-router-dom"

@withRouter
export default class SideNav extends React.PureComponent {
  hide = () => {
    this.props.replace({ state: { sideNav: false} })
  }

  render() {
    let sectionClass = "SideNav" + (this.props.show ? " SideNav--visible" : "")

    return (
      <section onClick={this.hide} className={sectionClass}>
        <div className="SideNav__content" onClick={e => e.stopPropagation() }>
          <div className="SideNav__header">
            <div className="SideNav__title">viscokupujes.cz</div>
          </div>
          <div className="SideNav__body">
            <Link replace to="/" className="SideNav__link">Domů</Link>
          </div>
        </div>
      </section>
    )
  }
}
