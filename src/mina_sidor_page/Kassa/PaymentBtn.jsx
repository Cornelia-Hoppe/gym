import { useState } from 'react';
import '../minaSidor.css'
import { setMembership } from '../Membership/SetMembership';
import { Offerbuttons } from '../Membership/OfferBtns';


export function PaymentBtn() {
  const [Card, SetCard] = useState("");
  const [IsShown, setIsShown] = useState(false)
  const [cardId, setCardId]  = useState("") 
  
  const TypeOfMembership = () =>{
    console.log(Offerbuttons);
  }
  
  const CardContinue = ( ) => {
        setIsShown(true)
        console.log(setMembership())  
SetCard(JSON.parse(localStorage.getItem("Kort")) ? JSON.parse(localStorage.getItem("Kort")) : '')
console.log(Card)

}
console.log(Card)
  TypeOfMembership();

  return (
    <div className='m30-mypages-continue'>
  <button onClick={CardContinue}>
    Fortsätt
  </button>

  
  </div>
  )
}
