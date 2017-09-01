import React from "react"
import ContactBox from "./ContactBox"
import "./Cooperation.css"


export default function() {
  return (
    <div className="Cooperation">
      <h1>Spolupráce</h1>
      <h2>Nenašli jste hledaný výrobek?</h2>
      <p>Pokud máte zájem o rozšíření naší databáze o vaše výrobky či vám u nás chybí oblíbené produkty, stačí nám zaslat následující informace na <a className="Cooperation__link" href="mailto:viscokupujes@gmail.com">viscokupujes@gmail.com</a><br />
        <br />- název výrobku
        <br />- název výrobce či značky
        <br />- EAN kód a jeho foto
        <br />- složení výrobku a jeho foto
      </p>
      <h2>Jste firma?</h2>
      <p>Pokud vyrábíte nebo prodáváte zdravé potraviny, nabízíme Vám možnost zadat výrobky do naší databáze zdarma. Nebráníme se dalším formám spolupráce, například možnost propagace vaší značky formou bannerové reklamy a další dle domluvy.</p>
      <h2>Jste nutriční terapeut či jiným stylem propagujete zdravý životní styl?</h2>
      <p>Jsme otevření všem druhům spolupráce, můžete klidně něco navrhnout.</p>
      <ContactBox />
    </div>
  )
}
