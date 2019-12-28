import React from "react"
import { Link } from "react-router-dom"
import ContactBox from "../components/common/ContactBox"
import Ecko from "../components/common/Ecko"
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

        <div className="Home__bgblock Home__bgblock--white">
          <div className="Home__container">
            { __APP_MODE__ !== "mob"
              ? <div style={{ maxWidth: 600, margin: "35px auto 10px auto", textAlign: "center" }}>
                  <div className="Home__video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/l_qApM2nKCY?rel=0" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                  </div>
                </div>
              : null
            }
            <h2 className="Home__subtitle">Proč tato aplikace vznikla?</h2>
            <p>Zdravě chceme jíst asi všichni, ale ne každý má čas na hledání všech éček ve složení výrobku. Ne všechny potraviny jsou plné éček. A také ne všechna éčka jsou škodlivá. Ale kdo se v tom má vyznat, když jsou jich stovky. Navíc výrobci nemají povinnost všechny látky označovat písmenem E, takže spoustu z nich najdeme pod různými názvy a netušíme, co znamenají.</p>
            <p>Zdraví máme jen jedno a proto aplikaci Víš co kupuješ? nabízíme všem zadarmo. Chceme všem usnadnit výběr potravin a zlepšit tak náš životní styl v Česku. Proto je našim cílem také podporovat firmy vyrábějící zdravé potraviny bez chemie.</p>
          </div>
        </div>

        <div className="Home__bgblock Home__bgblock--withImg">
          <div className="Home__container">
            <h2 className="Home__subtitle">Kdo jsme?</h2>
            <p>Jsme pár a je nám něco přes třicet. Začalo to tak, že jsme chtěli kupovat potraviny bez chemie, a proto jsme luštili malá písmenka na obalech a vypisovali si seznamy škodlivých éček. To bylo časově náročné a hlavně hrozně nudné. Takže jsme se rozhodli vytvořit mobilní aplikaci, která by tento proces usnadňovala.</p>
            <p>Víš co kupuješ? jsme vyvinuli ve svém volném čase a nemáme žádné sponzory. Aplikaci chceme lidem nabízet zdarma a proto doufáme, že nám pomůžete s propagací a do budoucna s tvorbou. Uděláte nám velkou radost, když se o své zkušenosti s Víš co kupuješ? podělíte se všemi okolo. Ať také nekupují zbytečnou chemii.</p>
          </div>
        </div>

        <div className="Home__bgblock Home__bgblock--white">
          <div className="Home__container">
          <h2 className="Home__subtitle">Plán do budoucna</h2>
          <p>Často nám píšete, že v aplikaci není dostatek výrobků. Snažili jsme se o to, aby nám velké řetězce poskytli databázi, ale bezúspěšně. Důvody k tomu můžou mít různé, ale nám nezbývá než výrobky přidávat převážně ručně hlavně díky vám uživatelům. Jsme moc rádi, že nám pomáháte a přidáváte potraviny do databáze. Ve dvou lidech ale naprosto nezvládáme schvalovat tisíce výrobků. Bohužel velké množství přidaných výrobků není zadáno správně, což proces výrazně zpomaluje. Naprosto ale chápeme, že vypisování složení je otrava a hodně z vás to vzdá. Proto máme následující plán.</p>
          <p>Nedávno jsme přidali možnost zobrazit také neschválený výrobek. Poznáte ho tak, že má před názevm POZOR ZATÍM NESCHVÁLENO. Do budoucna chceme také prozkoumat možnosti technologie OCR, která pomůže číst obrázek a přepsat složení za vás. Našim velkým cílem je umožnit schvalování lidmi tak, že celou databázi budou tvořit a schvalovat hlavně uživatelé.</p>
          </div>
        </div>


        <ContactBox />
      </div>
    )
  }
}
