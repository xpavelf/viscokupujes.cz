import React from "react"
import { Link } from "react-router-dom"
import { Ecko, ContactBox } from "@components"
import imgSprite from "../icons/sprite.svg"
import "./Home.css"

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__bgblock--white">
          <div className="Home__container Home__container--first">
            <p>Získej během sekundy přehled o složení výrobku. Jednoduše a zdarma.</p>
            <p>Ušetříš tak spoustu času a peněz a uděláš něco pro své zdraví.</p>
          </div>
          <div className="Home__funcList">
            <div className="Home__func">
              <div className="Home__funcbox">
                <svg viewBox="55 25 100 100"><use xlinkHref={`${imgSprite}#logo-E-letter`} transform="scale(2)" /></svg>
              </div>
              <div>éčka</div>
            </div>
            <div className="Home__func">
              <div className="Home__funcbox">
                <svg><use xlinkHref={`${imgSprite}#allergens-fish`}></use></svg>
              </div>
              <div>alergeny</div>
            </div>
            <div className="Home__func">
              <div className="Home__funcbox">
                <svg><use xlinkHref={`${imgSprite}#palmoil`}></use></svg>
              </div>
              <div>palm oil</div>
            </div>

            <div className="Home__func">
              <div className="Home__funcbox">
                <svg><use xlinkHref={`${imgSprite}#gf-sirup`}></use></svg>
              </div>
              <div>gf sirup</div>
            </div>
            <div className="Home__func">
              <div className="Home__funcbox">
                <svg><use xlinkHref={`${imgSprite}#coins`}></use></svg>
              </div>
              <div>cena</div>
            </div>
          </div>
        </div>

        <div className="Home__bgblock Home__bgblock--withImg">
          <div className="Home__container">
            <h2 className="Home__subtitle">Jak to funguje?</h2>


            <ol className="Home__list">
              { __APP_MODE__ !== "mob"
                ? <li>
                    Nainstaluj si aplikaci do mobilu.
                    <div className="Home__gplay">
                       <a href="https://play.google.com/store/apps/details?id=cz.viscokupujes.mnamka&utm_source=web&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                         <img alt="Nyní na Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/cs_badge_web_generic.png" />
                       </a>
                     </div>
                  </li>
                : null
              }
              <li>
                Vyhledej produkt nebo naskenuj čárový kód.
                Pokud výrobek nenajdeš mezi 33 000 produkty, můžeš nám ho přidat do databáze.
              </li>
              <li>
                Zobrazí se ti éčka, alergeny, palmový olej nebo glukózo-fruktózový sirup.
                Každé éčko, včetně těch "schovaných" v textu, je zařazeno do jedné ze tří kategorií podle škodlivosti.
                <br /><div className="Home__ecka">
                  <Link to="/ecka">
                    <Ecko size="small" e={{ rating: 2, id: "!" }} />
                    <Ecko size="small" e={{ rating: 1, id: "?" }} />
                    <Ecko size="small" e={{ rating: 0, id: "✓" }} />
                  </Link>
                </div>
              </li>
              <li>
                Pod každým vyhledaným produktem ti nabízíme zdravější alternativy bez škodlivých éček, tak abys mohl kupovat zdravější potraviny bez chemie, a tím podporovat jejich výrobce.
              </li>
            </ol>
          </div>

        </div>

        <ContactBox />
      </div>
    )
  }
}
