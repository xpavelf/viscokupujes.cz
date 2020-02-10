import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './MessageBus.css'
const SHOW_MSG_INTERVAL = 6000

export default function MessageBus() {
  const [hidden, setHidden] = useState(false)
  const message = useSelector(state => state.message)

  useEffect(() => {
    setHidden(false)
    const timer = setTimeout(() => setHidden(true), SHOW_MSG_INTERVAL)
    return () => { clearTimeout(timer); }
  }, [message])

  return (
    <div className={"MessageBus " + (message && !hidden ? "MessageBus--visible" : "")}>
      { message
          ? <div>
              <div className="MessageBus__title">{message.title}</div>
              <div className="MessageBus__text">{message.text}</div>
              {message.getFooter ? message.getFooter(() => setHidden(true)) : null}
            </div>
          : null
      }
    </div>
  )
}