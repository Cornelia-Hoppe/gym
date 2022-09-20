import React, { useState } from 'react'
import '../admin_page/AdminPage.css'
import { GrFormClose } from 'react-icons/gr'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { useEffect } from 'react'



function Update_modal_pass({ id, aktivitet, instruktör, maxAntal, platser, tid }) {

    const [newAktivitet, setNewAktivitet] = useState('')
    const [newInstruktör, setNewInstruktör] = useState('')
    const [newMaxAntal, setNewMaxAntal] = useState(0)
    const [newTid, setNewTid] = useState('')

    useEffect(() => {
        setNewAktivitet(aktivitet)
        setNewInstruktör(instruktör)
        setNewMaxAntal(maxAntal)
        setNewTid(tid)
    }, [])


// UPPDATERAR DATA
  const updateStaff = async (DBcollextion) => {
    const staffDoc = doc(db, DBcollextion, id)
    const newFields = {
        aktivitet: newAktivitet, 
        instruktör: newInstruktör, 
        maxAntal: newMaxAntal,
        tid: newTid
        }
    await updateDoc(staffDoc, newFields)
        
    alert('Sparat!')
    closeModal()
  }

// RADERAR DATA
  const deleteStaff = async (id, DBcollextion) => {
    const staffDoc = doc(db, DBcollextion, id);
    await deleteDoc(staffDoc);

    alert('pass borttaget')
    closeModal()
  };


//

    const closeModal = () => {
        document.querySelector(`#${id}-update-modal`).style.display="none"
    }

  return (
    <section id={`${id}-update-modal`} className='update-modal-wrapper'>
        <article className='update-modal'>
            <GrFormClose className='close-icon' onClick={closeModal} />
            <h1>Redigera aktivitet</h1>
            <div className='modal-input-wrapper'>Aktivitet: {aktivitet}</div>
            <div className='modal-input-wrapper'>instruktör: {instruktör}</div>
            <div className='modal-input-wrapper'>tid: {tid}</div>
            <div className='modal-input-wrapper'>Bokade: {platser}</div>
            <div className='modal-input-wrapper'>Max antal: {maxAntal}</div>

            <div className='modal-input-wrapper'>
                <h1>Ändra namn på aktivitet:</h1>
                <input 
                    type="text" 
                    placeholder={aktivitet}
                    onChange={(e) => {setNewAktivitet(e.target.value)}}
                    defaultValue={aktivitet} 
                />
            </div>

            <div className='modal-input-wrapper'>
                <h1>Ändra instruktör: </h1>
                <input 
                    type="text" 
                    placeholder={instruktör}
                    onChange={(e) => {setNewInstruktör(e.target.value)}}
                    defaultValue={instruktör}
                />
            </div>

            <div className='modal-input-wrapper'>
                <h1>Ändra tid: </h1>
                <input 
                    type="text" 
                    placeholder={tid}
                    onChange={(e) => {setNewTid(e.target.value)}}
                    defaultValue={tid}
                />
            </div>

            <div className='modal-input-wrapper'>
                <h1>Ändra maxAntal: </h1>
                <input 
                    type="text" 
                    placeholder={maxAntal}
                    onChange={(e) => {setNewMaxAntal(e.target.value)}}
                    defaultValue={maxAntal}
                />
            </div>
            
            <div className="m30">
                <button onClick={() => {updateStaff('pass')}}>Spara</button>
                <button onClick={() => {deleteStaff(id, 'pass')}}>Ta bort pass</button>
            </div>

        </article>
    </section>
  )
}

export default Update_modal_pass