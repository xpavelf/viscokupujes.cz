import React from "react";

export default class EckoList extends React.Component {

  state = { showBackdrop: false };

  onClick = (ecko) => {
    this.setState({
      showBackdrop: true,
      selected: ecko
    });
  }

  hide = () => {
    this.setState({
      showBackdrop: false,
      selected: null
    })
  }

  getModal(e) {

    return (
      <div className="Ecko-modal">
        <div className="Ecko-modal__title">
          <div className={"Ecko Ecko--" + e.rating}>{e.id}</div>
          <button onClick={this.hide} className="Ecko-modal__btnClose">✕</button>
        </div>
        <div className="Ecko-modal__content">{e.desc}</div>
      </div>
    );
  }

  render() {
    let arr = this.props.list
      .sort((a, b) => b.rating - a.rating);

    return (
      <div>
        { arr.map(ecko => (
            <button onClick={() => this.onClick(ecko)} className={"Ecko Ecko--" + ecko.rating}  key={ecko.id}>{ecko.id}</button>
          ))
        }
        { this.state.showBackdrop ? <div className="Ecko-backdrop" onClick={this.hide} /> : null }
        { this.state.showBackdrop ? this.getModal(this.state.selected) : null }
      </div>
    );
  }
};
