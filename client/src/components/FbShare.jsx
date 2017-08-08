import React from "react"
import "./FbShare.css"

const _handleClick = () => {
  if (window.plugins && window.plugins.socialsharing) {
    window.plugins.socialsharing.shareViaFacebook(
      'Chceš jíst zdravě, ale nevyznáš se v éčkách? Najdi si éčka v potravinách a nekupuj zbytečnou chemii.',
      null,
      'https://play.google.com/store/apps/details?id=cz.viscokupujes.mnamka',
      null,
      (err) => alert("Sdílení selhalo.")
    )
  }
}

export default function(props) {
  return (
    <div className="FbShare">
      <div className="FbShare__box">
        <div className="FbShare__title">Líbí se ti naše aplikace?</div>
        <div className="FbShare__text">Je zadara a na reklamu nemáme.<br />Ale máme tebe, tak ji prosím sdílej.</div>
        <button className="FbShare__btn" onClick={_handleClick}>
          Sdílej
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="currentColor">
            <path d="M28.159,19.24H23.04V39h-7.6V19.24H10.88v-6.08h4.561V9.497C15.443,4.165,17.657,1,23.939,1h5.181v6.08h-3.477 c-2.446,0-2.604,0.911-2.604,2.619v3.461h6.08L28.159,19.24z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
