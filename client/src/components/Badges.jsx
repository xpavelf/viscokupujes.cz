import React from "react"
import { eComparator } from "../utils/eUtils"
import Modal from "./common/Modal"
import Ecko from "./common/Ecko"
import Badge from "./Badge"
import "./Badges.css"

const badgesTxt = {
  po: ["Palmový olej", <p>Palmový olej se získává z plodů palmy olejné. Kvůli rychlému rozšiřování palmových plantáží se kácí deštné pralesy, čímž přicházejí o svůj domov nejen lidé, ale také kriticky ohrožené druhy zvířat jako orangutani, tygři, sloni a nosorožci. Nejhorší je situace v Indonésii a Malajsii, ale plantáže se vysazují také v Africe a Jižní Americe.<br /><br />A jak je to s jeho škodlivostí?<br />Je vnímán jako nezdravý tuk z důvodu vyššího podílu nasycených mastných kyselin, které zvyšují hladinu cholesterolu v krvi. Jeho škodlivost zdraví je ovšem relativní. Zjednodušeně řečeno, pokud nahradíte slunečnicový olej palmovým, tak si zvýšíte podíl nasycených mastných kyselin a cholesterol se vám tak bude zvyšovat. Pokud ale palmovým olejem nahradíte živočišné tuky, které mají vysoký podíl nasycených mastných kyselin, tak se vám bude cholesterol snižovat. Důležité je, aby ve stravě převažovaly tuky s vyšším podílem nenasycených mastných kyselin. Pokud tomu tak je, není třeba se palmového tuku ze zdravotního hlediska obávat.</p>],
  gf: ["Glukózo-fruktózový sirup", <p>Glukózo-fruktózový sirup je levnou náhražkou cukru. Vyrábí se z kukuřice nebo pšenice a oproti cukru je více než dvakrát sladší a obsahuje více fruktózy než glukózy. Glukóza se mění v tělě na tuk jen z 5%, ale fruktóza rovnou ze 40%. Glukózo-fruktózový sirup tak může za nebezpečné ukládání tuku kolem břišních orgánů a v cévách. Způsobuje tak obezitu, cukrovku a srdeční nemoci. Dokáže také stimulovat náš mozek tak, že vyvolává větší pocit hladu.</p>]
}

export default class Badges extends React.Component {

  state = {
    ecka: this.props.ecka.sort(eComparator)
  }

  selectE = (e) => this.setState({ selectedE: e })
  selectB = (b) => this.setState({ selectedB: b })

  getModalE() {
    let e = this.state.selectedE

    if (!e.names) {
      return null
    }

    let desc = e.desc || (e.rating === 0 && "Není škodlivé pro lidský organismus.")
    return (
      <Modal onClose={this.selectE.bind(this, null)}>
        <div className="Badges__modal__title">
          <Ecko e={e} />
          <div className="Badges__modal__name">{e.names[0]}</div>
          { e.names.length > 1
            ? <div className="Badges__modal__aliases">
                Další názvy:<br />{ e.names.slice(1).join(", ") }
              </div>
            : null
          }
        </div>
        {desc ? <div className="Badges__modal__content">{desc}</div> : null }
      </Modal>
    )
  }

  getModalB() {
    let b = this.state.selectedB
    return (
      <Modal onClose={this.selectB.bind(this, null)}>
        <div className="Badges__modal__title">
          <Badge type={b} />
          <div className="Badges__modal__name">{ badgesTxt[b][0] }</div>
        </div>
        <div className="Badges__modal__content">{ badgesTxt[b][1] }</div>
      </Modal>
    )
  }

  getEckaList = () => {
    if (!this.state.ecka.length) {
      return (
        <div className="Badges__emptyEckoList">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/>
          </svg>
          <div className="Badges__emptyEckoList__text">Buď v klidu, tento výrobek neobsahuje žádné éčko.</div>
        </div>
      )
    }
    return this.state.ecka.map(e => <Ecko e={e} onClick={this.selectE.bind(this, e)} key={e.id} />)
  }

  render() {
    return (
      <div>
        { this.getEckaList() }
        { this.props.po ? <Badge onClick={this.selectB.bind(this, "po")} type="po" /> : null }
        { this.props.gf ? <Badge onClick={this.selectB.bind(this, "gf")}  type="gf" /> : null }
        { this.state.selectedE ? this.getModalE() : null }
        { this.state.selectedB ? this.getModalB() : null }
      </div>
    )
  }
}
