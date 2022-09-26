import React from 'react'
import { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { db } from '../firebase-config'
import './AdminPage.css'
import '../booking_page/BookingPage'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import openLoadingModal from '../Components/loading_screen/OpenLoadingModal'
import closeLoadingModal from '../Components/loading_screen/CloseLoadingModal'

function Update_modal_product({ id, img, kategori, pris, produktNamn, getProdukter }) {

    const [newProduktNamn, setNewProduktNamn] = useState({produktNamn})
    const [newKategori, setNewKategori] = useState({kategori})
    const [newPris, setNewPris] = useState({pris})
    const [newImg, setNewImg] = useState({img})

    useEffect(() => {
        setNewProduktNamn(produktNamn)
        setNewKategori(kategori)
        setNewPris(pris)
        setNewImg(img)
    }, [])


    const closeModal = () => {
        document.querySelector(`#update-modal-${id}`).style.display="none"
    }

    
//BILD
function previewImage() {
    let file = document.getElementById(`${id}-file-modal`).files;
    if (file.length > 0) {
        let fileReader = new FileReader();
        fileReader.onload = function (event) {
            document.getElementById(`${id}-preview-modal`).setAttribute("src", event.target.result);
            setNewImg(event.target.result)
        };

        fileReader.readAsDataURL(file[0]);
    }
}

// ====================================================== //


// UPPDATERAR DATA
const updateProdukter = async (DBcollextion) => {
openLoadingModal()
const staffDoc = doc(db, DBcollextion, id)
const newFields = {img: newImg, kategori: newKategori, pris: Number(newPris), produktNamn: newProduktNamn}
await updateDoc(staffDoc, newFields)

closeModal()
getProdukter()
closeLoadingModal()

setTimeout(() => alert('Sparat!'), 5)

}

// ====================================================== //


  return (
    <section id={`update-modal-${id}`} className='update-modal-wrapper'>
        <article className='update-modal'>
            <GrFormClose className='close-icon' onClick={closeModal} />
            <h1>{produktNamn}</h1>
            <h1>Pris: {pris} kr</h1>
            <p>Kategori: {kategori}</p>
            <img className='staff-img' id={`${id}-preview-modal`} src={img} alt={`bild på ${produktNamn}`} />
            
            <div className='input-div'>
                <h1>Ändra namn på produkt:</h1>
                <input 
                    type="text" 
                    placeholder={produktNamn} 
                    onChange={(e) => {setNewProduktNamn(e.target.value)}} 
                    defaultValue={produktNamn}
                />
            </div>
            <div className='modal-img-wrapper'>
                <h1>Uppdatera bild:</h1>
                 <input 
                    type="file" 
                    name="file" 
                    id={`${id}-file-modal`} 
                    accept="image/*" 
                    onChange={previewImage} 
                ></input>
            </div>
               
            <div className='input-div'>
                <h1>Ändra Pris:</h1>
                <input 
                    type="number" 
                    placeholder={pris} 
                    onChange={(e) => {setNewPris(e.target.value)}} 
                    defaultValue={pris}
                />
            </div>

            <div className='input-div'>
                <h1>Ändra kategori:</h1>
                <select className='drop-down' name='välj pass' defaultValue={kategori} onChange={(e) => setNewKategori(e.target.value)}>
                <option value="null">Välj kategori</option>
                <option value="utrustning">Utrustning</option>
                <option value="men">Män</option>
                <option value="kvinnor">Kvinnor</option>
              </select>
            </div>

            <div className="m30">
                <button onClick={() => {updateProdukter('produkter')}}>Spara</button>
            </div>
            
        </article>
    </section>
  )
}

export default Update_modal_product