import React from "react"
import "./MessageBus.css"
import { connect } from "react-redux"
const SHOW_MSG_INTERVAL = 5000

@connect((store) => ({ messages: store.messages }))
export default class MessageBus extends React.Component {
  state = {}

  componentWillReceiveProps(nextProps) {
    let msg = nextProps.messages[0]
    this.setState({ msg })
    setTimeout(() => this.setState({ msg: null }), SHOW_MSG_INTERVAL)
  }

  render() {
    let msg = this.state.msg
    let cls = "MessageBus" + (msg ? " MessageBus--visible" : "")
    return (
      <div className={cls}>
        { msg
            ? <div>
                <div className="MessageBus__title">{msg.title}</div>
                <div className="MessageBus__text">{msg.text}</div>
              </div>
            : null
        }
      </div>
    )
  }
}
