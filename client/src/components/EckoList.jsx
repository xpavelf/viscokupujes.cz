import React from "react";
import { browserHistory } from "react-router";

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
          <div className="Ecko-modal__name">{e.names[0]}</div>
          <button onClick={this.hide} className="Ecko-modal__btnClose">✕</button>
        </div>
        {e.desc ? <div className="Ecko-modal__content">{e.desc}</div> : null }
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
