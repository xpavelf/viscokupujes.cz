import React from 'react'
import {
  Button,
  Badges,
  Allergen
} from "@components"
import {
  getAdditives,
  getAllergens,
  hasPalmOil,
  hasGlukoseSirup,
  populateProduct
} from '../utils/getInfoAboutProduct'
import './AddProductWizzard.css'



const Step0 = (props) => (
  <div className="AddProductWizzard">
    <div><p>Vyfoť <span style={{fontWeight: "bold"}}>přední stranu</span> výrobku.</p></div>
    { getPic(0) }
    { getPicBtn(props.next) }
  </div>
)

class Step1 extends React.Component {
  state = {
    q: this.props.q || "",
    name: this.props.name || "",
    producer: this.props.producer || ""
  }

  change = (key, e) => this.setState({ [key]: e.target.value })

  render() {
    return (
     <div className="AddProductWizzard">
       <label htmlFor="name"><span style={{fontWeight: "bold"}}>Název</span> produktu</label>
       <input value={this.state.name} placeholder="např. Milka mléčná čokoláda z alpského mléka" id="name" className="AddProductWizzard__input" onChange={this.change.bind(this, 'name')} type="text" />
       <label htmlFor="producer"><span style={{fontWeight: "bold"}}>Značka</span> nebo <span style={{fontWeight: "bold"}}>výrobce</span></label>
       <input value={this.state.producer} placeholder="např. Mondelez" id="producer" className="AddProductWizzard__input" onChange={this.change.bind(this, 'producer')} type="text" />
       <label htmlFor="q"><span style={{fontWeight: "bold"}}>Hmotnost</span> nebo <span style={{fontWeight: "bold"}}>objem</span></label>
       <input value={this.state.q} placeholder="např. 100g nebo 300ml" id="q" className="AddProductWizzard__input" onChange={this.change.bind(this, 'q')} type="text" />
       <Button onClick={this.props.prev.bind(this, this.state)}>Zpět</Button>
       <Button disabled={!this.state.name.trim() || !this.state.producer.trim() || !this.state.q.trim()}
         onClick={this.props.next.bind(this, this.state)} color="green">Pokračovat</Button>
     </div>
   )
  }
}

const Step2 = (props) => (
  <div className="AddProductWizzard">

    <div><p>Nyní vyfoť <span style={{fontWeight: "bold"}}>složení</span> výrobku. <div style={{ fontSize: 20, paddingTop: 10 }}>např. pitná voda, jedlá sůl, cukr, ...</div></p></div>
    { getPic(1) }
    <Button onClick={props.prev}>Zpět</Button>
    { getPicBtn(props.next) }
  </div>
)

class Step3 extends React.Component {
  state = {
    ing: this.props.ing || "",
    info: this.props.info || { e: [], a: [], po: false, gf: false }
  }

  ingChange = (evt) => {
    let ing = evt.target.value
    let e = getAdditives(ing)
    let a = getAllergens(ing)
    let po = hasPalmOil(ing)
    let gf = hasGlukoseSirup(ing)
    let info = populateProduct({ e, a, po, gf })
    this.setState({ ing, info })
  }

  render() {
    let { e, po, gf, a } = this.state.info
    return (
     <div className="AddProductWizzard">
       <label htmlFor="ing">Vypiš přesné <span style={{fontWeight: "bold"}}>složení a alergeny</span><div style={{ fontSize: 20 }}>(pouze v češtině)</div></label>
       <div className="AddProductWizzard__info">
         { e.length || a.length
           ? <div className="AddProductWizzard__infobox">
               <div style={{fontWeight: "bold"}}>Éčka</div>
               <Badges ecka={e} po={po} gf={gf} nojumps={true} /><br />
               <div style={{fontWeight: "bold"}}>Alergeny</div>
               { a.map(it => <Allergen key={it} code={it} />) }
             </div>
           : <div className="AddProductWizzard__infobox" style={{ textAlign: "center", fontSize: 12 }}>Zde se zobrazí éčka a alergeny.</div>
         }
       </div>
       <textarea value={this.state.ing} placeholder="např. pitná voda, sůl, e330. Výrobek může obsahovat stopy arašídů." id="ing" className="AddProductWizzard__ta" onChange={this.ingChange} />
       <div style={{ fontSize: 13, fontFamily: 'Roboto', padding: '0 20px 20px 20px', textAlign: 'justify' }}>Víme, že manuální vypisování složení je otrava. Je to ale způsob, jak rozšířit tuto databázi. Budeme moc rádi, když budeš vkládat složení výrobku velmi přesně. Každý produkt musíme totiž manuálně schválit a případně opravit. To také znamená, že se produkty hned nepřidají automaticky do databáze. Děkujeme za trpělivost.</div>
       <Button onClick={this.props.prev.bind(this, this.state)}>Zpět</Button>
       <Button disabled={!this.state.ing.trim()} onClick={this.props.next.bind(this, this.state)} color="green">Uložit</Button>
     </div>
   )
  }
}

export default { Step0, Step1, Step2, Step3 }

const getPicBtn = (onclick) => {
  return (
    <Button onClick={onclick} color="green" className="AddProductWizzard__actionBtn--icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
        <g fill="currentColor">
          <path d="M16,9.501c-4.419,0-8,3.581-8,8c0,4.418,3.581,8,8,8c4.418,0,8-3.582,8-8S20.418,9.501,16,9.501z
             M20.555,21.406c-2.156,2.516-5.943,2.807-8.459,0.65c-2.517-2.156-2.807-5.944-0.65-8.459c2.155-2.517,5.943-2.807,8.459-0.65
            C22.42,15.102,22.711,18.891,20.555,21.406z"/>
          <path d="M16,13.501c-2.209,0-3.999,1.791-4,3.999v0.002c0,0.275,0.224,0.5,0.5,0.5s0.5-0.225,0.5-0.5V17.5
            c0.001-1.656,1.343-2.999,3-2.999c0.276,0,0.5-0.224,0.5-0.5S16.276,13.501,16,13.501z"/>
          <path d="M29.492,8.542l-4.334-0.723l-1.373-3.434C23.326,3.24,22.232,2.5,21,2.5H11
            c-1.232,0-2.326,0.74-2.786,1.886L6.842,7.819L2.509,8.542C1.055,8.783,0,10.027,0,11.5v15c0,1.654,1.346,3,3,3h26
            c1.654,0,3-1.346,3-3v-15C32,10.027,30.945,8.783,29.492,8.542z M30,26.5c0,0.553-0.447,1-1,1H3c-0.553,0-1-0.447-1-1v-15
            c0-0.489,0.354-0.906,0.836-0.986L8.28,9.607l1.791-4.478C10.224,4.75,10.591,4.5,11,4.5h10c0.408,0,0.775,0.249,0.928,0.629
            l1.791,4.478l5.445,0.907C29.646,10.594,30,11.011,30,11.5V26.5z"/>
        </g>
      </svg>
      Vyfotit
    </Button>
  )
}

const getPic = (step) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 486 486" style={{margin: "40px auto 0px auto", display: "block"}}>
    { step === 0
      ? <rect fill="#2a802a" x="100" y="180" width="70" height="35" />
      : <g stroke="#2a802a" strokeWidth="8">
          <line x1="100" y1="195" x2="125" y2="195" strokeWidth="10" />
          <line x1="100" y1="210" x2="170" y2="210" />
          <line x1="100" y1="222" x2="170" y2="222" />
          <line x1="100" y1="234" x2="170" y2="234" />
        </g>
    }
    <g fill="#DDD">
      <path d="M392.551 243.889l-1.459 3.135c-2.668-4.409-6.402-11.096-10.594-18.604-11.816-21.17-28-50.165-44.76-72.784l-.342-.44c-16.662-20.617-35.176-30.641-56.593-30.641-6.991 0-14.317 1.116-21.776 3.316-25.36 7.477-29.273 23.495-29.776 30.02-.987 12.584 8.693 36.239 34.59 48.491l.021 18.76c12.866-3.451 28.646-10.37 29.909-20.682 1.046-8.535-3.346-16.737-11.124-20.439-23.088-10.955-27.318-20.581-26.955-24.072 1.625-15.56 34.305-21.107 60.9 11.707 15.688 21.22 31.318 49.225 42.744 69.692 3.697 6.624 6.896 12.356 9.557 16.881l-75.902 163.775c-7.473-2.03-14.008-2.938-20.617-2.938-4.118 0-7.891.342-11.563.674-4.036.363-8.208.738-13.563.738-3.559 0-7.268-.162-11.341-.497-24.182-1.979-62.97-20.846-80.709-30.871-8.762-6.45-9.573-10.621-7.959-19.165h-26.796c-1.475 12.638.71 27.337 19.808 41.091l.574.414.614.35c5.682 3.235 56.541 31.69 92.301 34.617 4.8.395 9.22.586 13.508.586 6.547 0 11.537-.449 15.979-.85 3.343-.304 6.229-.563 9.147-.563 4.807 0 10.918.61 22.982 5.029l2.594 1.027-1.359 2.923 65.969 30.673 97.959-210.679-65.968-30.674z"/>
      <path d="M249.519 319.042V218.719l-7.12-5.008c-7.65-4.529-14.047-10.074-19.181-16.085v92.437H53.021V66.872h170.197v62.13c5.403-4.521 12.677-8.631 22.512-11.53 1.267-.373 2.528-.711 3.789-1.029V37.891C249.519 16.964 232.555 0 211.628 0H64.612C43.685 0 26.721 16.964 26.721 37.891v281.15c0 20.928 16.964 37.893 37.891 37.893h147.017c20.926 0 37.89-16.965 37.89-37.892zM198.236 34.95c4.488 0 8.125 3.638 8.125 8.126 0 4.488-3.637 8.126-8.125 8.126-4.488 0-8.127-3.638-8.127-8.126 0-4.488 3.639-8.126 8.127-8.126zm-95.282 1.526h70.332v13.27h-70.332v-13.27zm35.166 291.28c-7.818 0-14.155-6.337-14.155-14.154 0-7.816 6.337-14.153 14.155-14.153 7.817 0 14.154 6.337 14.154 14.153 0 7.817-6.337 14.154-14.154 14.154z"/>
      <path d="M111.4218 266.7h47.3553c16.658 0 26.588-11.0757 26.588-29.583V169.579c0-16.1574-7.287-24.53-12.603-30.64l-1.088-1.265c-.763-.8505-1.4988-1.702-2.2026-2.554-1.2922-1.5283-2.4678-2.7915-3.5847-3.9948-3.5535-3.7898-5.5223-5.9063-5.5223-10.7243v-1.7608c1.851-.912 3.437-2.2928 4.818-4.1426.294-.3528.558-.7644.7043-1.0297.383-.558.677-1.146 1.058-1.9388.205-.499.3815-1.0282.5292-1.5844.116-.294.2337-.6195.2638-.8242.324-1.1747.5292-2.4966.6167-4.0538v-6.11c0-3.731-2.291-6.992-5.552-8.05l-.1764-.0874-.6166-.176C153.166 88.5565 144.1194 87.5 135.1 87.5s-18.0677 1.0566-26.909 3.1433l-.6182.2065c-3.437 1.1155-5.7284 4.3764-5.7284 8.1074v6.2563c.089 1.441.294 2.7328.558 3.761.0888.3242.1763.647.294.971.1476.5278.3527 1.0857.618 1.7608.3227.6167.6167 1.2047.9107 1.6177.2052.38.4992.793.8807 1.3206 1.322 1.7622 2.938 3.1447 4.7302 4.025v1.7325c0 4.8182-1.9688 6.9346-5.5234 10.7244-1.1158 1.2033-2.2915 2.466-3.5833 3.995-.7056.8217-1.44 1.6736-2.1452 2.5252l-1.1157 1.2645c-5.347 6.109-12.633 14.5118-12.633 30.6692v67.5378c0 18.5062 9.93 29.582 26.5865 29.582zm2.1738-164.8048c0-.2367.1765-.4418.4117-.4992 6.9026-1.4412 14.0132-2.145 21.093-2.145 7.079 0 14.1883.7037 21.0917 2.145.2363.0575.4127.2626.4127.4992v5.4344c0 .205-.1176.3815-.324.469-1.0284.4116-4.5543 1.7622-7.6672 2.5277-4.1125.9982-8.7255 1.615-13.513 1.615-4.7895 0-9.401-.6168-13.515-1.615-3.113-.7655-6.6392-2.116-7.6657-2.5277-.2065-.0875-.324-.264-.324-.469v-5.4345zm-17.0092 67.684c0-1.615.0875-3.1132.264-4.4954.03-.5278.1175-1.027.2064-1.5256.264-1.6178.6468-3.086 1.1158-4.4367.1477-.413.294-.793.4403-1.1756 0-.0302.03-.089.0587-.1177.1778-.4403.383-.8806.588-1.292.383-.882.8533-1.7338 1.3807-2.5566.5292-.8218 1.087-1.6447 1.675-2.4378.5878-.822 1.2346-1.6164 1.88-2.4392.6755-.793 1.3807-1.615 2.1147-2.4665l.7946-.9404c.8806-.9997 1.7622-2.0277 2.6428-3.0542.4113-.5005.852-.971 1.2646-1.4413.1176-.1463.2338-.294.38-.4403.5006-.558.9993-1.1158 1.4984-1.6163 0-.0288 0-.0288.03-.0575 4.0538-4.319 8.6654-9.2558 8.6654-18.685v-4.0538c4.2014.9695 8.7843 1.4682 13.515 1.4682 4.4078 0 8.6733-.4498 12.6356-1.2933.2912-.0588.589-.1026.8774-.1642v4.043c0 9.4296 4.6117 14.366 8.6668 18.685.0287.0287.0287.0287.0287.0574.499.5004.9992 1.0583 1.4986 1.6162.1463.1463.264.294.3815.4403.4115.4704.8532.9404 1.2634 1.4413.8816 1.027 1.7632 2.0545 2.6438 3.054l.793.9405c.7358.852 1.44 1.6737 2.1166 2.4665.645.8228 1.2918 1.6173 1.8784 2.439.5877.7932 1.147 1.616 1.6748 2.438.5292.8227.9992 1.6746 1.381 2.5566.2066.4113.4113.852.5877 1.292.0287.0286.0588.0874.0588.1175.1464.3828.294.7625.4404 1.1755.4704 1.3507.8533 2.819 1.1172 4.4366.0875.4992.1764.998.205 1.5258.1765 1.382.2654 2.8805.2654 4.4954v67.5378c0 1.7034-.089 3.2318-.2653 4.6126-.1463.9107-.294 1.7325-.469 2.5266-1.441 5.9336-4.6714 8.5778-7.786 9.752-.528.2066-1.0872.353-1.6752.5006-.3227.0574-.6167.1176-.939.175-.1463.03-.324.0588-.4704.0588-.205.03-.3814.0588-.5876.089-.499.0286-.9695.0874-1.44.0874-.4115.03-.793.03-1.2046.03h-47.356c-.4102 0-.793 0-1.2047-.03-.47 0-.939-.0588-1.4395-.0875-.205-.03-.3815-.0588-.5866-.089-.1478 0-.3242-.0286-.4705-.0587-.324-.0574-.6167-.1176-.9404-.175-.588-.1477-1.1458-.294-1.6747-.5005-3.1132-1.1743-6.3455-3.8185-7.7847-9.752-.1764-.7946-.3227-1.6164-.4704-2.5267-.1764-1.3808-.264-2.9092-.264-4.6127V169.579z"/>
    </g>
  </svg>
)
