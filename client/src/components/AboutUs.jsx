import React from "react"
import imgShopping from "../icons/shopping.jpg"
import ContactBox from "./common/ContactBox"
import "./AboutUs.css"

export default () => (
  <div className="AboutUs">
    <p>
      Jsme jen dva obyčejní lidé, co chtějí kupovat potraviny bez chemie a umožnit to také druhým. Žili jsme pár let ve Skandinávii, kde jsou potraviny sice extrémně drahé, zato ale kvalitní. Před rokem jsme se vrátili zpět do ČR a šokovala nás kvalita některých výrobků v naší zemi. Začali jsme luštit malá písmenka na obalech potravin a vypisovat si seznamy škodlivých éček. To ale bylo časově náročné a moc nás to nebavilo. Tak jsme se rozhodli vytvořit tuto aplikaci.
    </p>
    <img className="mobile-only" src={imgShopping} />
    <p>Aplikace Víš Co Kupuješ je zdarma a není nikým sponzorována. Budeme proto moc rádi, když ji budeš sdílet přes Facebook a rozšíříš ji dále své rodině a kamarádům. Ať také nekupují zbytečnou chemii. Pokud se ti na ní něco nelíbí, dej nám to vědět, ať máme co zlepšovat.</p>
    <ContactBox />
  </div>
)
