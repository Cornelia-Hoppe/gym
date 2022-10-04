import React from 'react'

export default function Memberships(props) {
  return (
    <div>
    <article className='profile-right'>
            <div className="OfferSection">
              <div className="OfferInfo"> 
                <h3>Medlemskap & passkort</h3>
              </div>
              <button onClick={props.onclick} className="OfferOne" role="button"><p className="rowOne">3 månader</p>  <p className="rowTwo"> 1300:- </p> </button>
              <button onClick={props.onclick} className="OfferTwo" role="button"><p className="rowOne">6 månader</p>  <p className="rowTwo"> 2100:- </p> </button>
              <button onClick={props.onclick} className="OfferThree" role="button"><p className="rowOne">12 månader</p>  <p className="rowTwo"> 3600:- </p> </button>
              <button onClick={props.onclick} className="OfferFour" role="button"> <p className="rowOne">Passkort</p>  <p className="rowTwo"> 150:- </p></button>
          
            </div>

    </article>
    </div>
  )
}
