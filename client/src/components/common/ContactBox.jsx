import React from "react"
import "./ContactBox.css"

export default function() {
  return (
    <div className="ContactBox">
      <div className="ContactBox__box">
        <h2 className="ContactBox__title">Napište nám</h2>
        <a className="ContactBox__link" href="mailto:viscokupujes@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
            <path fill="currentColor" d="M28,5.5H4c-2.209,0-4,1.792-4,4v13c0,2.209,1.791,4,4,4h24c2.209,0,4-1.791,4-4v-13
              C32,7.292,30.209,5.5,28,5.5z M2,10.75L8.999,16L2,21.25V10.75z M30,22.5c0,1.104-0.898,2-2,2H4c-1.103,0-2-0.896-2-2l7.832-5.875
              l4.368,3.277c0.533,0.398,1.166,0.6,1.8,0.6c0.633,0,1.266-0.201,1.799-0.6l4.369-3.277L30,22.5L30,22.5z M30,21.25L23,16l7-5.25
              V21.25z M17.199,19.102c-0.349,0.262-0.763,0.4-1.199,0.4s-0.851-0.139-1.2-0.4L10.665,16l-0.833-0.625L2,9.501V9.5
              c0-1.103,0.897-2,2-2h24c1.102,0,2,0.897,2,2L17.199,19.102z"/>
          </svg>
          viscokupujes@gmail.com
        </a>
        <br /><br />
        <a className="ContactBox__link" target="_blank" rel="noopener" href="https://www.facebook.com/viscokupujes/">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 267 267">
            <path fill="#3C5A99" d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812
            	c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225
            	H248.082z"/>
            <path fill="#FFFFFF" d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935
            	l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585
            	v99.803H182.409z"/>

          </svg>
          / viscokupujes
        </a>

      </div>
    </div>
  )
}
