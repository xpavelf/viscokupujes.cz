import React from 'react'
import imgSprite from "../icons/sprite.svg"

export default (props) => (
  <svg width={props.width} height={props.height}>
    <use xlinkHref={`${imgSprite}#${props.icon}`}></use>
  </svg>
)
