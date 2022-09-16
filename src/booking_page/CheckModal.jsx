import React from 'react'
import '../booking_page/bookingPage.css'
import { FaCheck } from 'react-icons/fa'


function CheckModal({ bokadText }) {

    const closeModal = () => {
        document.querySelector('#check-modal').style.display="none"
    }

  return (
    
    <div id='check-modal'>
        <div className='booking-modal'>
            <FaCheck className='check-icon' />
            <h1>Pass {bokadText}!</h1>
            <p>Se dina bokade pass under <a href="#">Min sidor</a></p>
            <button onClick={closeModal}>OK</button>
        </div>
    </div>
  )
}

export default CheckModal