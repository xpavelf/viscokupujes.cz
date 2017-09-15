import React from "react"
import badge from "../icons/badge-palmoil.png"

const style = {
  display: "inline-block",
  width: 65,
  height: 65,
  background: `url(${badge}) center 30% no-repeat`,
  position: "relative"
}

const styleTxt = {
  fontWeight: "bold",
  position: "absolute",
  fontSize: 12,
  color: "#cc3333",
  textAlign: "center",
  width: 65,
  textTransform: "uppercase",
  bottom: 0
}

export default () => (
  <div style={style}>
    <div style={styleTxt}>palm oil</div>
  </div>
)
