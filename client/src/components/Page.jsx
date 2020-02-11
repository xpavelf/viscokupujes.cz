import React from 'react'
import './Page.css'

export default function(props) {
  return (
    <div className="Page">
      { props.children }
    </div>
  )
}