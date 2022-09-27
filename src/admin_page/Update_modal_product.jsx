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

function Update_modal_product({ id, img, kategori, price, produktNamn, getProdukter, productBrand, productshortDesc, productColor, orderSise }) {

    const [newProduktNamn, setNewProduktNamn] = useState({produktNamn})
    const [newKategori, setNewKategori] = useState({kategori})
    const [newPris, setNewPris] = useState({price})
    const [newImg, setNewImg] = useState({img})
    const [newProductBrand, setNewProductBrand] = useState(productBrand)
    const [newProductColor, setNewProductColor] = useState(productColor)
    const [newProductshortDesc, setNewProductshortDesc] = useState(productshortDesc)
    const [newOrderSise, setNewOrderSise] = useState(orderSise)

    useEffect(() => {
        setNewProduktNamn(produktNamn)
        setNewKategori(kategori)
        setNewPris(price)
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
const newFields = {img: newImg, kategori: newKategori, price: Number(newPris), produktNamn: newProduktNamn, brand: newProductBrand, shortDesc: newProductshortDesc, color: newProductColor, orderSise: newOrderSise }
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
            <h1>Pris: {price} kr</h1>
            <h1>Kategori: {kategori}</h1>
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
                    placeholder={price} 
                    onChange={(e) => {setNewPris(e.target.value)}} 
                    defaultValue={price}
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

            <div className='modal-input-wrapper'>
              <h1>Ändra beskrivning</h1>
              <input className="input" type="text" onChange={(e) => setNewProductshortDesc(e.target.value)} defaultValue={productshortDesc} />
            </div>

            <div className='modal-input-wrapper'>
              <h1>Ändra storlek:</h1>
              <input className="input" type="text" onChange={(e) => setNewOrderSise(e.target.value)} defaultValue={orderSise} />
            </div>

            <div className='modal-input-wrapper'>
              <h1>Ändra varumärke:</h1>
              <input className="input" type="text" onChange={(e) => setNewProductBrand(e.target.value)} defaultValue={productBrand} />
            </div>

            <div className='modal-input-wrapper'>
              <h1>Ändra färg:</h1>
              <input className="input" type="text" onChange={(e) => setNewProductColor(e.target.value)} defaultValue={productColor} />
            </div>

            <div className="m30">
                <button onClick={() => {updateProdukter('produkter')}}>Spara</button>
            </div>
            
        </article>
    </section>
  )
}

export default Update_modal_product