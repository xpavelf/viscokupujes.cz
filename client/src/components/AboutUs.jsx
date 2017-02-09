import React from "react"
import imgShopping from "../icons/shopping.jpg"

export default () => (
  <div className="AboutUs">
    <p>
      Zatím máme databázi asi 12 000 výrobků. Nikdo nás nesponzoruje. Jsme jen obyčejní lidi, co chtějí kupovat kvalitnější potraviny. Proto budeme rádi, když
      naši aplikaci budeš sdílet svým kamarádům přes <a target="_blank" rel="noopener" href="https://www.facebook.com/viscokupujes/">Facebook.</a> Pokud se ti
      na ní něco nelíbí, dej to vědět nám, ať máme co zlepšovat.
    </p>
    <img src={imgShopping} />
  </div>
)
