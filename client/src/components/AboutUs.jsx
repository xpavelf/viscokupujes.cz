import React from "react";

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
          <p>Zatím máme databázi asi 12 000 výrobků. Nikdo nás nesponzoruje ani neovlivňuje. Jsme jen obyčejní lidi jako ty, co chtějí kupovat a jíst kvalitnější potraviny. Proto budeme rádi, když naši aplikaci <strong>VíšCoKupuješ</strong> budeš sdílet přes <a target="_blank" href="https://www.facebook.com/viscokupujes/">Facebook</a> a řekneš o ní svým kamarádům. Pokud se ti na ní něco nelíbí, dej to vědět nám, ať máme co zlepšovat.</p>
        </div>
      </div>
    );
  }
};
