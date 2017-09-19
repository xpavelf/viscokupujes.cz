import React from "react"
import { Link } from "react-router-dom"
import imgLogo from "../icons/home-banner.png"
import ContactBox from "./common/ContactBox"
import "./Home.css"

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <p>Najdi si éčka v potravinách a nekupuj zbytečnou chemii. Získej také přehled o alergenech a složení. Stačí si výrobek vyhledat nebo naskenovat jeho kód. Zobrazí se ti všechny éčka a alergeny, která produkt obsahuje, a to včetně těch "schovaných" v textu.</p>

        <div className="Home__ecka">
          <Link to="/ecka">
            <div className="Ecko Ecko--2">!</div>
            <div className="Ecko Ecko--1">?</div>
            <div className="Ecko Ecko--0">✓</div>
          </Link>
        </div>

        { __APP_MODE__ !== "mob"
          ? <div className="Home__gplay">
              <a href="https://play.google.com/store/apps/details?id=cz.viscokupujes.mnamka&utm_source=web&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img alt="Nyní na Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/cs_badge_web_generic.png" />
              </a>
            </div>
          : null
        }

        <p>Každé éčko je zařazeno do jedné ze tří kategorií podle škodlivosti. Červená éčka jsou nejškodlivější, oranžová s otazníkem a zelená jsou ok. Pod každým vyhledaným produktem ti nabízíme podobné zdravější výrobky bez éček. Databáze zatím obsahuje asi 20 000 výrobků.</p>

        <div style={{ textAlign: "center" }}>
          <img className="Home__logo" src={imgLogo} alt="Logo - viscokupujes.cz" />
        </div>

        <p>
          Zdravě chceme jíst asi všichni, ale ne každý má čas na hledání každého éčka na seznamu ingrediencí. Tak to prostě hodíme do košíku a nezajímá nás to. Kupujeme tak velké množství zbytečné chemie a chováme se k našemu tělu jako by bylo popelnice. Přitom stačí správně volit výrobky. Ne všechny jsou plné éček. A také ne všechna éčka jsou škodlivá. Ale kdo se v tom má vyznat, když jsou jich stovky. Navíc výrobci nemají povinnost všechny látky označovat jako E, takže spoustu z nich najdeme jen v textu a netušíme, co znamenají.
        Až tedy půjdeš příště do obchodu, zamysli se nad tím, co kupuješ pro sebe a své blízké. Najdi si v naší aplikaci své oblíbené potraviny a pokud najdeš nějaké s červeným éčkem, zkus je příště nahradit zdravější variantou.</p>
      <p>Snažíme se, aby informace o produktech byly co nejaktuálnější. Nemůžeme ovšem zaručit stoprocentní správnost. Pokud máš jakýkoliv návrh na zlepšení, dej nám to vědět.</p>
      <p>Sdílej naši aplikaci svým kamarádům na Facebooku, ať také nekupují chemii v potravinách.</p>



        <ContactBox />
      </div>
    )
  }
}
