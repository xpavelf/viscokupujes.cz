import React from "react"
import { SvgSprite } from "@components"
import "./Share.css"

const FB_URL = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fviscokupujes.cz"

const WHATSAPP_URL = "https://wa.me/?text=" + encodeURIComponent("Nekupuj zbytečnou chemii! Stáhni si appku Víš co kupuješ? https://play.google.com/store/apps/details?id=cz.viscokupujes.mnamka")

const _handleClick = (platform, alternativeUrl) => {
  if (window.plugins && window.plugins.socialsharing) {
    window.plugins.socialsharing[platform](
      'Nekupuj zbytečnou chemii! Stáhni si appku Víš co kupuješ?',
      null,
      'https://play.google.com/store/apps/details?id=cz.viscokupujes.mnamka',
      null,
      (err) => navigator.app.loadUrl(alternativeUrl, {openExternal: true})
    )
  }
}


export default function(props) {
  return (
    <div className="Share">
      <div className="Share__title">Sdílej appku</div>
      <div className="Share__text">Pokud chceš, aby i ostatní nekupovali chemii.</div>
      { __APP_MODE__ === "mob"
        ? <button className="Share_button Share_button--facebook" onClick={() => _handleClick('shareViaFacebook', FB_URL)}>
            Facebook <SvgSprite width="20" height="20" icon="facebook" />
          </button>
        : <a className="Share_button Share_button--facebook" target="_blank" href={FB_URL}>
            Facebook <SvgSprite width="20" height="20" icon="facebook" />
          </a>
      }

      { __APP_MODE__ === "mob"
        ? <button className="Share_button Share_button--whatsapp" onClick={() => _handleClick('shareViaWhatsApp', WHATSAPP_URL)}>
            WhatsApp <SvgSprite width="20" height="20" icon="whatsapp" />
          </button>
        : <a className="Share_button Share_button--whatsapp" target="_blank" href={WHATSAPP_URL}>
            WhatsApp <SvgSprite width="20" height="20" icon="whatsapp" />
          </a>
      }
    </div>
  )
}
