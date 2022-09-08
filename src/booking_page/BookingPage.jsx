import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './bookingPage.css'
import '../admin_page/AdminPage.css'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import CheckModal from './CheckModal';
import { BsFillPencilFill } from 'react-icons/bs'
import Update_modal_pass from './Update_modal_pass';

function BookingPage() {


    // HÄMTAR DATA
const staffCollectionRef = collection(db, "pass")
const [DBdata, setDBData] = useState([])

useEffect(() => {

    const getStaff = async () => {
      const data = await getDocs(staffCollectionRef)
      setDBData(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getStaff()
  }, [])



  // BOKA-KNAPPEN

  const [bokadText, setBokadText] = useState('')

    const handleBokaBtn = async (id, DBcollextion, platser, bokad) => {


        if (bokad === true) {
            platser--
            bokad = false
        } else {
            platser++
            bokad = true
        }

            // UPPDATERAR DATA
        const staffDoc = doc(db, DBcollextion, id)
        const newFields = {platser: platser, bokad: bokad}
        await updateDoc(staffDoc, newFields)

        document.querySelector('#check-modal').style.display="flex"

        setBokadText(bokad ? 'bokat' : 'avbokat')

    }

    const openUpdateModal = (id) => {
    document.querySelector(`#${id}-update-modal`).style.display="flex"
   }


   // KALENDER

   const [date, setDate] = useState(new Date())

   console.log(date.getFullYear());

   const onSelect = (e) => {
    console.log(e);
   }

// GÖM KNAPPEN FÖR VANLIGA ANVÄNDARE
const normalUser = 0
const admin = 1

const user = admin

const [BTN_STYLE, setBTN_STYLE] = useState({})

useEffect(() => {
    if (user === 1) {
        setBTN_STYLE({display:"block"})
    } else {
        setBTN_STYLE({display:"none"})
    }
}, [])

  return (
    <>
        <section className='blue-wrapper center'>
            <h1>Kalender</h1>
            <Calendar onChange={setDate} value={date} onClickDay={onSelect}/>
        </section>  

        <section className='blue-wrapper center'>
            <h1>Pass</h1>
            <select className='drop-down' name='välj pass'>
                <option value="null">Välj pass</option>
                <option value="alt 1">Alternativ 1</option>
                <option value="alt 2">Alternativ 2</option>
                <option value="alt 3">Alternativ 3</option>
            </select>
            
            {DBdata.map((pass, index) => {

                return(
                    <>
                    <div key={index} className='pass-card center'>
                        <h2 className='booking-antal'>{pass.platser}/{pass.maxAntal}</h2>
                        <div className='aktv-tid-div'>
                            <h1>{pass.aktivitet}</h1>
                            <h2>{pass.tid}</h2>
                        </div>
                        <p>instruktör: {pass.instruktör}</p>
                        <button 
                            style={BTN_STYLE}
                            onClick={() => openUpdateModal(pass.id)}
                            className='pass-redigera-btn'>Ändra <BsFillPencilFill className='pen-icon'/>
                            
                        </button>
                        <button onClick={() => handleBokaBtn(pass.id, "pass", pass.platser, pass.bokad)} className='booking-btn'>
                            {pass.bokad ? 'Avboka' : 'Boka'}
                            </button>
                    </div>

                    <Update_modal_pass 
                        id={pass.id} 
                        aktivitet={pass.aktivitet}  
                        instruktör={pass.instruktör}
                        maxAntal={pass.maxAntal}
                        platser={pass.platser}
                        tid={pass.tid}
                    />

                    </>
                )
            })}
        
                    <CheckModal bokadText={bokadText} />

        </section>
    </>
  )
}

export default BookingPage