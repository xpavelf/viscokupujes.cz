import React from "react"

export default class EckoList extends React.Component {

  state = { showBackdrop: false }

  onClick = (ecko) => {
    this.setState({
      showBackdrop: true,
      selected: ecko
    })
  }

  hide = () => {
    this.setState({
      showBackdrop: false,
      selected: null
    })
  }

  getModal(e) {
    let desc = e.desc || (e.rating === 0 && "Není škodlivé pro lidský organismus.")
    return (
      <div className="Ecko-modal">
        <div className="Ecko-modal__title">
          <div className={"Ecko Ecko--" + e.rating}>{e.id}</div>
          <div className="Ecko-modal__name">{e.names[0]}</div>
          <button onClick={this.hide} className="Ecko-modal__btnClose">✕</button>
        </div>
        {desc ? <div className="Ecko-modal__content">{desc}</div> : null }
      </div>
    )
  }

  render() {
    let arr = this.props.list
      .sort((a, b) => b.rating - a.rating)

    if (arr.length === 0) {
      return (
        <div className="Ecko-emptylist">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/>
          </svg>
          <div className="Ecko-emptylist__text">Buď v klidu, tento výrobek neobsahuje žádné éčko.</div>
        </div>
      )
    }

    return (
      <div>
        { arr.map(ecko => (
            <button onClick={() => this.onClick(ecko)} className={"Ecko Ecko--" + ecko.rating}  key={ecko.id}>{ecko.id}</button>
          ))
        }
        { this.state.showBackdrop ? <div className="Ecko-backdrop" onClick={this.hide} /> : null }
        { this.state.showBackdrop ? this.getModal(this.state.selected) : null }
      </div>
    )
  }
}
