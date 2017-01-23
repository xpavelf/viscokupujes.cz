import React from "react";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutUs">
        <p className="AboutUs__text">
          Chc<span className="text-red">e</span>š jíst zdrav<span className="text-red">ě</span>?<br />
        N<span className="text-red">e</span>vyznáš s<span className="text-red">e</span> v <span className="text-red">É</span>čkách?<br />
          Máš dost n<span className="text-red">e</span>kvalitních výrobků?
        </p>
        <div className="AboutUs__ecka">

          <p>A protože nás už taky nebavilo stát v supermarketu, luštit malá písmenka na obalech a hledat schovaná éčka v textu, rozhodli jsme se přijít s aplikací <strong>VíšCoKupuješ</strong>. Stačí jen najít výrobek kliknutím na lupu v pravém horním rohu.</p>
          <p><strong>Rozdělili jsme ti éčka jednoduše do tří kategorií podle škodlivosti.</strong></p>
          <div className="Ecko Ecko--2">!</div>
          <div className="Ecko Ecko--1">?</div>
          <div className="Ecko Ecko--0">✓</div>
          <p>Zatím máme databázi asi 12 000 výrobků. Jsme jen obyčejní lidi jako ty, co chtějí kupovat a jíst kvalitnější potraviny. Nikdo nás nesponzoruje ani neovlivňuje. Proto budeme rádi, když naši aplikaci <strong>VíšCoKupuješ</strong> budeš sdílet přes Facebook a řekneš o ní svým kamarádům. Pokud se ti na ní něco nelíbí, dej to vědět nám, ať máme co zlepšovat.</p>
        </div>
      </div>
    );
  }
};
