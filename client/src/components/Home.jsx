import React from "react"
import { Link } from "react-router-dom"
import imgLogo from "../icons/home-banner.png"
import "./Home.css"

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <p>Najdi si éčka v potravinách a nekupuj zbytečnou chemii. Stačí si textově vyhledat výrobek nebo načíst jeho kód. Zobrazí se ti všechny éčka, která produkt obsahuje, a to včetně těch "schovaných" v textu.</p>

        <div className="Home__ecka">
          <Link to="/ecka">
            <div className="Ecko Ecko--2">!</div>
            <div className="Ecko Ecko--1">?</div>
            <div className="Ecko Ecko--0">✓</div>
          </Link>
        </div>

        <p>Éčka jsou rozdělena do tří kategorií podle škodlivosti, červená jsou nejškodlivější, oranžová s otazníkem a zelená jsou ok. Pod každým vyhledaným produktem ti nabízíme podobné zdravější výrobky bez éček. Databáze zatím obsahuje asi 19 000 výrobků.</p>

        <div style={{ textAlign: "center" }}>
          <img className="Home__logo" src={imgLogo} alt="Logo - viscokupujes.cz" />
        </div>

        <p>
          Zdravě chceme jíst asi všichni, ale ne každý má čas na hledání každého éčka na seznamu ingrediencí. Tak to prostě hodíme do košíku a nezajímá nás to. Kupujeme tak velké množství zbytečné chemie a chováme se k našemu tělu jako by bylo popelnice. Přitom stačí správně volit výrobky. Ne všechny jsou plné éček. A také ne všechna éčka jsou škodlivá. Ale kdo se v tom má vyznat, když jsou jich stovky. Navíc výrobci nemají povinnost všechny látky označovat jako E, takže spoustu z nich najdeme jen v textu a netušíme, co znamenají.
        Až tedy půjdeš příště do obchodu, zamysli se nad tím, co kupuješ pro sebe a své blízké. Najdi si v naší aplikaci své oblíbené potraviny a pokud najdeš nějaké s červeným éčkem, zkus je příště nahradit zdravější variantou.</p>
      <p>Snažíme se, aby informace o produktech byly co nejaktuálnější. Nemůžeme ovšem zaručit stoprocentní správnost. Pokud máš jakýkoliv návrh na zlepšení, dej nám to vědět.</p>
      <p>Sdílej naši aplikaci svým kamarádům na Facebooku, ať také nekupují chemii v potravinách.</p>
      <p>
          Kontaktuj nás:<br />
          <a target="_blank" rel="noopener" href="https://www.facebook.com/viscokupujes" title="Facebook">
            <svg height="32" width="32" viewBox="0 0 512 512">
              <path fill="white" d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z"/>
            </svg>
          </a>

          <a href="mailto:viscokupujes@gmail.com">
            <svg height="32" width="32" viewBox="0 0 256 200" strokeWidth="10" stroke="white" transform="scale(.8)">
              <path d="M 0,97.00377 0,0 129.00497,0 258.00995,0 257.75497,96.75 257.5,193.5 128.75,193.75377 0,194.00755 0,97.00377 z m 203.25561,47.75479 -42.24144,-42.24143 -11.75708,11.64086 c -12.15071,12.03059 -16.16572,14.86722 -20.95743,14.80657 -4.12528,-0.0522 -5.85964,-1.32169 -19.35007,-14.16339 L 96.65978,103.10234 54.829888,144.17892 C 31.82345,166.77103 13,185.64801 13,186.12775 13,186.61908 63.76621,187 129.24852,187 l 116.24852,0 -42.24143,-42.24144 z M 49.248521,54.751479 7,12.502959 7,97 7,181.49704 49.248521,139.24852 91.49704,97 49.248521,54.751479 z M 251,96.91667 C 251,50.670833 250.63934,12.983333 250.19852,13.166667 249.75771,13.35 230.77241,32.312699 208.00897,55.305998 L 166.6209,97.112 208.55599,139.056 C 231.62028,162.1252 250.60558,181 250.74554,181 250.88549,181 251,143.1625 251,96.91667 z M 188.1087,64.75281 244.7174,7.5 186.8587,7.241942 c -31.82228,-0.141932 -84.0685,-0.141932 -116.10269,0 L 12.51201,7.5 l 56.994,57.28148 c 45.3652,45.59402 57.50408,57.27562 59.49399,57.25281 1.96251,-0.0225 14.67058,-12.33773 59.1087,-57.28148 z" />
            </svg>
          </a>
        </p>
        { __APP_MODE__ !== "mob"
          ? <div className="Home__gplay">
              <a href="https://play.google.com/store/apps/details?id=cz.viscokupujes.mnamka&utm_source=web&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img alt="Nyní na Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/cs_badge_web_generic.png" />
              </a>
            </div>
          : null
        }
      </div>
    )
  }
}
