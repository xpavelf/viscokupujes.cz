
import React from "react"

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutUs">
        <p className="AboutUs__text">
          <strong>Chc<span className="text-red">e</span>š jíst zdrav<span className="text-red">ě</span>?<br />
        N<span className="text-red">e</span>vyznáš s<span className="text-red">e</span> v <span className="text-red">É</span>čkách?<br />
      Máš dost n<span className="text-red">e</span>kvalitních výrobků?</strong>
        </p>
        <div className="AboutUs__ecka">
          <p> Vytvořili jsme ti aplikaci <strong>VíšCoKupuješ</strong>, protože nás už nebavilo stát v supermarketu, luštit malá písmenka na obalech a hledat schovaná éčka v textu. <strong>Rozdělili jsme ti éčka jednoduše do tří kategorií podle škodlivosti.</strong></p>
          <div className="Ecko Ecko--2">!</div>
          <div className="Ecko Ecko--1">?</div>
          <div className="Ecko Ecko--0">✓</div>
          <p>Zatím máme databázi asi 12 000 výrobků. Nikdo nás nesponzoruje ani neovlivňuje. Jsme jen obyčejní lidi, co chtějí kupovat a jíst kvalitnější potraviny. Proto budeme rádi, když naši aplikaci <strong>VíšCoKupuješ</strong> budeš sdílet přes <a target="_blank" href="https://www.facebook.com/viscokupujes/">Facebook</a> a řekneš o ní svým kamarádům. Pokud se ti na ní něco nelíbí, dej to vědět nám, ať máme co zlepšovat.</p>
          <p>
            Kontaktujte nás na:<br />
            <a target="_blank" href="https://www.facebook.com/viscokupujes" title="Facebook">
              <svg height="32" width="32" viewBox="0 0 512 512">
                <path fill="#319631" d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z"/>
              </svg>
            </a>

            <a href="mailto:viscokupujes@gmail.com">
              <svg height="32" width="32" viewBox="0 0 256 200" strokeWidth="10" stroke="#319631" transform="scale(.8)">
                <path d="M 0,97.00377 0,0 129.00497,0 258.00995,0 257.75497,96.75 257.5,193.5 128.75,193.75377 0,194.00755 0,97.00377 z m 203.25561,47.75479 -42.24144,-42.24143 -11.75708,11.64086 c -12.15071,12.03059 -16.16572,14.86722 -20.95743,14.80657 -4.12528,-0.0522 -5.85964,-1.32169 -19.35007,-14.16339 L 96.65978,103.10234 54.829888,144.17892 C 31.82345,166.77103 13,185.64801 13,186.12775 13,186.61908 63.76621,187 129.24852,187 l 116.24852,0 -42.24143,-42.24144 z M 49.248521,54.751479 7,12.502959 7,97 7,181.49704 49.248521,139.24852 91.49704,97 49.248521,54.751479 z M 251,96.91667 C 251,50.670833 250.63934,12.983333 250.19852,13.166667 249.75771,13.35 230.77241,32.312699 208.00897,55.305998 L 166.6209,97.112 208.55599,139.056 C 231.62028,162.1252 250.60558,181 250.74554,181 250.88549,181 251,143.1625 251,96.91667 z M 188.1087,64.75281 244.7174,7.5 186.8587,7.241942 c -31.82228,-0.141932 -84.0685,-0.141932 -116.10269,0 L 12.51201,7.5 l 56.994,57.28148 c 45.3652,45.59402 57.50408,57.27562 59.49399,57.25281 1.96251,-0.0225 14.67058,-12.33773 59.1087,-57.28148 z" />
              </svg>
            </a>
          </p>
      </div>
      </div>
    )
  }
}
