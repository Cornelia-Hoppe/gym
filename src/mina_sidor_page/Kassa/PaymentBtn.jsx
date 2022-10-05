import React from 'react'
import { useState } from 'react';
import '../minaSidor.css'
import { setMembership } from '../Membership/SetMembership';


export function PaymentBtn() {
    
  const [Card, SetCard] = useState("");
  const [IsShown, setIsShown] = useState(false)
    const CardContinue = ( ) => {
        setIsShown(true)
        console.log(setMembership())  
SetCard(JSON.parse(localStorage.getItem("Kort")) ? JSON.parse(localStorage.getItem("Kort")) : '')
console.log(Card)

}
console.log(Card)
  return (
    <div className='m30-mypages'>
  <button  onClick={CardContinue}>
    Fortsätt
  </button>

  
  </div>
  )
}
