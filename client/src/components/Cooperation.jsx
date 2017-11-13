import React from "react"
import ContactBox from "./common/ContactBox"
import "./Cooperation.css"


export default function() {
  return (
    <div className="Cooperation">
      <h1>Spolupráce</h1>
      <p>Naším cílem je propagovat výrobce nabízející zdravé produkty bez škodlivých éček. Proto nabízíme spolupráci firmám i jednotlivcům, kteří vyrábí nebo prodávávají zdravé potraviny. Vyberte si balíček, který vám vyhovuje a neváhejte nás kontaktovat.</p>
      <div className="Cooperation__container">
        <div className="Cooperation__Pack">
          <div className="Cooperation__Pack__title">FREE</div>
          <ul className="Cooperation__Pack__desc">
            <li>přidání výrobků do naší aplikace</li>
          </ul>
          <div className="Cooperation__Pack__pricing">
            Cena: <span className="Cooperation__Pack__price">ZDARMA</span>
          </div>
        </div>

        <div className="Cooperation__Pack">
          <div className="Cooperation__Pack__title">MINI</div>
          <ul className="Cooperation__Pack__desc">
            <li>přidání výrobků do naší aplikace</li>
            <li>umístění vašich produktů bez éček na první pozice zdravějších alternativ</li>
          </ul>
          <div className="Cooperation__Pack__pricing">
            Cena: <span className="Cooperation__Pack__price">399 Kč / měsíc</span>
          </div>
        </div>

        <div className="Cooperation__Pack">
          <div className="Cooperation__Pack__title">TOP</div>
          <ul className="Cooperation__Pack__desc">
            <li>přidání výrobků do naší aplikace</li>
            <li>umístění vašich produktů bez éček na první pozice zdravějších alternativ</li>
            <li>propagace ve formě bannerové reklamy</li>
          </ul>
          <div className="Cooperation__Pack__pricing">
            Cena: <span className="Cooperation__Pack__price">990 Kč / měsíc</span>
          </div>
        </div>
      </div>

      <ContactBox />
    </div>
  )
}
