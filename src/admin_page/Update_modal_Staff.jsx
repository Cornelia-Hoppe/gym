import React from 'react'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from "react";
import { GrFormClose } from 'react-icons/gr'

function Update_modal_staff({ id, staffName, age, img}) {

    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState(0)
    const [newImg, setNewImg] = useState('')

    useEffect(() => {
        setNewName(staffName)
        setNewAge(age)
        setNewImg(img)
    }, [])


// UPPDATERAR DATA

  const updateStaff = async (DBcollextion) => {
    const staffDoc = doc(db, DBcollextion, id)
    const newFields = {age: newAge, img: newImg, name: newName}
    await updateDoc(staffDoc, newFields)
        
    alert('Sparat!')
    closeModal()
  }

// RADERAR DATA
  const deleteStaff = async (id, DBcollextion) => {
    const staffDoc = doc(db, DBcollextion, id);
    await deleteDoc(staffDoc);
  };


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

const closeModal = () => {
    document.querySelector(`#${id}-update-modal`).style.display="none"
}

  return (
    <section id={`${id}-update-modal`} className='update-modal-wrapper'>
        <article className='update-modal'>
            <GrFormClose className='close-icon' onClick={closeModal} />
            <h1>{staffName}, {age} år</h1>
            <img className='staff-img' id={`${id}-preview-modal`} src={img} alt={`bild på ${staffName}`} />
            <div className='input-div'>

                <h1>Ändra namn:</h1>
                <input 
                    type="text" 
                    placeholder={staffName} 
                    onChange={(e) => {setNewName(e.target.value)}} 
                    defaultValue={staffName}
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
                <h1>Ändra ålder:</h1>
                <input 
                    type="number" 
                    placeholder={age} 
                    onChange={(e) => {setNewAge(e.target.value)}} 
                    defaultValue={age}
                />
            </div>
            <div className="m30">
                <button onClick={() => {updateStaff('staff')}}>Spara</button>
                <button onClick={() => {deleteStaff(id, 'staff')}}>Radera anställd</button>
            </div>
            
        </article>
    </section>
  )
}

export default Update_modal_staff