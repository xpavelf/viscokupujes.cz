import React from "react"
import "./MessageBus.css"
import { connect } from "react-redux"
const SHOW_MSG_INTERVAL = 6000

@connect((store) => ({ messages: store.messages }))
export default class MessageBus extends React.Component {
  state = { hide: false }

  componentWillReceiveProps(nextProps) {
    let msg = nextProps.messages.slice(-1)[0]
    this.setState({ msg, hide: false })
    setTimeout(this.hide, SHOW_MSG_INTERVAL)
  }

  hide = () => this.setState({ hide: true })

  render() {
    let msg = this.state.msg
    let cls = "MessageBus" + (msg && !this.state.hide ? " MessageBus--visible" : "")
    return (
      <div className={cls}>
        { msg
            ? <div>
                <div className="MessageBus__title">{msg.title}</div>
                <div className="MessageBus__text">{msg.text}</div>
                {msg.getFooter ? msg.getFooter(this.hide) : null}
              </div>
            : null
        }
      </div>
    )
  }
}
