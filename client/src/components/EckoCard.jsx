import React from "react"

export default class EckoEckoCard extends React.PureComponent {
  state = { open: false }

  toggle = () => this.setState({ open: !this.state.open })

  render() {
    let e = this.props.e
    let className = "EckoCard" + (e.desc ? " EckoCard--expandable" : "")
    className += this.state.open ? " EckoCard--open" : ""

    return (
      <div onClick={this.toggle} className={className} key={e.id}>
        <div className={"Ecko Ecko--small Ecko--" + e.rating}>{e.id}</div>
        <div className="EckoCard__title">{e.names[0]}</div>
        { e.desc ? <div className="EckoCard__desc">{e.desc}</div> : null }
      </div>
    )
  }
}
