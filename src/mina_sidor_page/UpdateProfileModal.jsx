import React from 'react'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from "react";
import { GrFormClose } from 'react-icons/gr'
import '../admin_page/AdminPage.css'
import UpdateLocalStorage from '../functions/UpdateLocalStorage'
import openLoadingModal from '../Components/loading_screen/OpenLoadingModal'

function UpdateProfileModal({closeModal, id, email, name, lastName, password, phoneNumber, img }) {

    const [newName, setNewName] = useState(name ? name : '')
    const [newEmail, setNewEmail] = useState(email ? email : '')
    const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber ? phoneNumber : '')
    const [newImg, setNewImg] = useState(img ? img : '')
    const [newLastName, setNewLastName] = useState(lastName ? lastName : '')
    const [newPassword, setNewPassword] = useState(password ? password : '')



// UPPDATERAR DATA

  const updateStaff = async (DBcollextion) => {

    openLoadingModal()

    const staffDoc = doc(db, DBcollextion, id)
    const newFields = {img: newImg, name: newName, lastName: newLastName, email: newEmail, password: newPassword, phoneNumber: newPhoneNumber}
    await updateDoc(staffDoc, newFields)
    
    UpdateLocalStorage(id)
    closeModal()

  }

// RADERAR DATA
  const deleteStaff = async (id, DBcollextion) => {
    const staffDoc = doc(db, DBcollextion, id);
    await deleteDoc(staffDoc);
  };

// BILD
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

  return (
    <section id={`${id}-update-modal`} className='update-modal-wrapper'>
        <article className='update-modal'>
            <GrFormClose className='close-icon' onClick={closeModal} />

            <img className='staff-img' id={`${id}-preview-modal`} src={img} alt={`Ingen bild tillagd`} />

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
                <h1>Ändra namn:</h1>
                <input 
                    type="text" 
                    placeholder={name} 
                    onChange={(e) => {setNewName(e.target.value)}} 
                    defaultValue={name}
                />
            </div>

            <div className='input-div'>
                <h1>Ändra efternamn:</h1>
                <input 
                    type="text" 
                    placeholder={lastName} 
                    onChange={(e) => {setNewLastName(e.target.value)}} 
                    defaultValue={lastName}
                />
            </div>

            <div className='input-div'>
                <h1>Ändra Email:</h1>
                <input 
                    type="text" 
                    placeholder={email} 
                    onChange={(e) => {setNewEmail(e.target.value)}} 
                    defaultValue={email}
                />
            </div>

            <div className='input-div'>
                <h1>Ändra telefonnummer:</h1>
                <input 
                    type="text" 
                    placeholder={phoneNumber} 
                    onChange={(e) => {setNewLastName(e.target.value)}} 
                    defaultValue={phoneNumber}
                />
            </div>

            <div className='input-div'>
                <h1>Ändra lösenord:</h1>
                <input 
                    type="password" 
                    placeholder={password} 
                    onChange={(e) => {setNewLastName(e.target.value)}} 
                    defaultValue={password}
                />
            </div>


               
            <div className="m30">
                <button onClick={() => {updateStaff('profiler')}}>Spara</button>
            </div>
            
        </article>
    </section>
  )
}

export default UpdateProfileModal