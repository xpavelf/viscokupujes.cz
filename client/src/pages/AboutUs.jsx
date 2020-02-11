import React from 'react'
import {
  Page,
  Share,
} from '@components'
import mockup01 from "../icons/mockup01.jpg"
import us from "../icons/us.jpg"
import './AboutUs.css'

export default function() {
  return (
    <Page>
      <div className="AboutUs">
        <h2 className="AboutUs__heading">Jak vznikla naše appka?</h2>
        <p>Jsme pár a je nám něco přes třicet. Začalo to tak, že jsme chtěli kupovat potraviny bez chemie, a proto jsme luštili malá písmenka na obalech a vypisovali si seznamy škodlivých éček. To bylo časově náročné a hlavně hrozně nudné. Takže jsme se rozhodli vytvořit mobilní aplikaci, která by tento proces usnadňovala.</p>
        <p>Zdravě chceme jíst asi všichni, ale ne každý má čas na hledání všech éček ve složení výrobku. Ne všechny potraviny jsou plné éček. A také ne všechna éčka jsou škodlivá. Ale kdo se v tom má vyznat, když jsou jich stovky. Navíc výrobci nemají povinnost všechny látky označovat písmenem E, takže spoustu z nich najdeme pod různými názvy a netušíme, co znamenají.</p>
        <a href="https://play.google.com/store/apps/details?id=cz.viscokupujes.mnamka" target="_blank">
          <img src={mockup01} />
        </a>
        <Share />
        <p>Víš co kupuješ? jsme vyvinuli ve svém volném čase a nemáme žádné sponzory. Zdraví máme jen jedno a proto aplikaci Víš co kupuješ? nabízíme všem zadarmo. Chceme všem usnadnit výběr potravin a zlepšit tak náš životní styl v Česku. Proto je našim cílem také podporovat firmy vyrábějící zdravé potraviny bez chemie.</p>

        

        <div className="AboutUs__signature">Děkujeme</div>
        <img src={us} className="AboutUs__img-us" />
        <div className="AboutUs__signature">Pavel a Jana</div>
        
        <p className="AboutUS__ps">PS: Kromě appky máme ještě cestovní blog<br /><a href="https://travelenjoylive.com" target="_blank">travelenjoylive.com</a></p>
        

      </div>
    </Page>
  )
}