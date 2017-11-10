import React from "react"
import { Link } from "react-router-dom"
import ContactBox from "./common/ContactBox"
import Ecko from "./common/Ecko"
import pImg from "../icons/pavel.jpg"
import jImg from "../icons/jana.jpg"
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
                <svg width="30" height="30" style={{ verticalAlign: "bottom", margin: "0 10px" }}><use xlinkHref={`${imgSprite}#camera`}></use></svg><br />
                Pokud výrobek nenajdeš mezi 24 000 produkty, můžeš nám ho jednoduše přidat do databáze.
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

        <div className="Home__bgblock Home__bgblock--white">
          <div className="Home__container">
            <h2 className="Home__subtitle">Proč tato aplikace vznikla?</h2>
            <p>Zdravě chceme jíst asi všichni, ale ne každý má čas na hledání všech éček ve složení výrobku. Ne všechny potraviny jsou plné éček. A také ne všechna éčka jsou škodlivá. Ale kdo se v tom má vyznat, když jsou jich stovky. Navíc výrobci nemají povinnost všechny látky označovat písmenem E, takže spoustu z nich najdeme pod různými názvy a netušíme, co znamenají.</p>
            <p>Zdraví máme jen jedno a proto aplikaci Víš co kupuješ? nabízíme všem zadarmo. Chceme všem usnadnit výběr potravin a zlepšit tak náš životní styl v Česku. Proto je našim cílem také podporovat firmy vyrábějící zdravé potraviny bez chemie.</p>
          </div>
        </div>

        <div className="Home__bgblock Home__bgblock--withImg">
          <div className="Home__container">
            <h2 className="Home__subtitle">Kdo jsme?</h2>
            <p>
              Jsme dva celkem normální lidi a je nám něco přes třicet. Začalo to tak, že jsme chtěli kupovat potraviny bez chemie, a proto jsme luštili malá písmenka na obalech a vypisovali si seznamy škodlivých éček. To bylo časově náročné a hlavně hrozně nudné. Takže jsme se rozhodli vytvořit mobilní aplikaci, která by tento proces usnadňovala.
              <div className="Home__aboutUs">
                <div><img src={pImg} alt="Pavel" /><div>Pavel</div></div>
                <div><img src={jImg} alt="Jana" /><div>Jana</div></div>
              </div>
            </p>
            
            <p>Informace čerpáme z knihy Dr. Vrbové "Víme co jíme?" a z dalších veřejně dostupných zdrojů na internetu. Víš co kupuješ? neustále vyvíjíme a rozšiřujeme dle přání uživatelů. Máte-li tedy jakýkoliv návrh, neváhejte nás kontaktovat. Můžete se tak podílet na zlepšování této aplikace.</p>
            <p>Víš co kupuješ? vyvíjíme ve svém volném čase. Nemáme žádné sponzory a ani statisíce korun na marketing. Aplikaci chceme lidem nabízet zdarma a proto doufáme, že nám pomůžete s propagací. Uděláte nám velkou radost, když se o své zkušenosti s Víš co kupuješ? podělíte se všemi okolo. Ať také nekupují zbytečnou chemii.</p>
          </div>
        </div>
        <ContactBox />
      </div>
    )
  }
}
