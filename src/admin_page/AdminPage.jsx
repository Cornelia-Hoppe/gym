import React from 'react';
import "./AdminPage.css";
import { useState, useEffect } from "react";
import Update_modal from './Update_modal';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { BsFillPencilFill } from 'react-icons/bs'

function AdminPage() {

    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState(0)

    const [staff, setStaff] = useState([])

    const staffCollectionRef = collection(db, "staff")

   
// HÄMTAR DATA
useEffect(() => {

    const getStaff = async () => {
      const data = await getDocs(staffCollectionRef)
      setStaff(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getStaff()
  }, [])


  // LÄGGER TILL DATA
  const createStaff = async () => {
    await addDoc(staffCollectionRef, {name: newName, age: Number(newAge), img: IMG_SRC});
  }

// 

  const openUpdateModal = (id) => {
    document.querySelector(`#${id}-update-modal`).style.display='flex'
  }


  // bild

  const [IMG_SRC, setIMG_SRC] = useState('')

  function previewImage() {
    let file = document.getElementById("file").files;
    
    if (file.length > 0) {
        let fileReader = new FileReader();
        fileReader.onload = function (event) {
            document.getElementById("preview").setAttribute("src", event.target.result);
            setIMG_SRC(event.target.result)
        };

        fileReader.readAsDataURL(file[0]);
    }
}

  return (
    <>
        <section className='center'>
            <h1>Aktivitetslista</h1>


        </section>

        <div className='line'></div>

        <section className='center'>
            <h1>Lista över produkter</h1>
        </section>

        <div className='line'></div>

        <section className='center'>
            <h1>Anställda</h1>


        <div className="App m30">
            <h1>Lägg till ny anställd +</h1>
            <input type="text" placeholder='Name...' onChange={(e) => {setNewName(e.target.value)}}  />
            <input type="number" placeholder='Age...' onChange={(e) => {setNewAge(e.target.value)}}  />

            <input type="file" name="file" id="file" accept="image/*" onChange={previewImage} ></input>
            <img src='' id="preview" />



            <button onClick={createStaff}>Lägg till</button>
        </div> 

            
            {staff.map((staff) => {
        return (
            <>
            <div className='center staff-card' id={`${staff.id}-div`}>
                <h1 id={`${staff.id}-name`}>{staff.name}, {staff.age} år</h1>
                <img className='staff-img' src={staff.img} alt={`bild på ${staff.name}`} />
                <button onClick={() => openUpdateModal(staff.id)}>Ändra <BsFillPencilFill className='pen-icon' /></button>
            </div>
            
            <div id={`${staff.id}-modal-div`}>
                <Update_modal id={staff.id} staffName={staff.name} age={staff.age} img={staff.img} />
            </div>
          </>
        )
      })}

        

        </section>

        <div className='line'></div>

    </>
  )
}

export default AdminPage