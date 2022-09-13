import React from 'react';
import "./AdminPage.css";
import { useState, useEffect } from "react";
import Update_modal_Staff from './Update_modal_Staff';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { BsFillPencilFill } from 'react-icons/bs'
import Update_modal_product from './Update_modal_product';

function AdminPage() {
  // TILL ANSTÄLLDA
    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState(0)    

    const staffCollectionRef = collection(db, "staff")
    const [staff, setStaff] = useState([])

  // TILL PRODUKTER
    const [IMG_SRC_produkt, setIMG_SRC_produkt] = useState('')
    const [kategori, setKategori] = useState('')
    const [pris, setPris] = useState(0)
    const [produktNamn, setProduktNamn] = useState('')

    const produkterCollectionRef = collection(db, "produkter")
    const [produkter, setProdukter ] = useState([])

// HÄMTAR DATA
  // HÄMTAR ANSTÄLLDA
useEffect(() => {

    const getStaff = async () => {
      const data = await getDocs(staffCollectionRef)
      setStaff(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getStaff()
  }, [])


  // HÄMTAR PRODUKTER 
useEffect(() => {

    const getProdukter = async () => {
      const data = await getDocs(produkterCollectionRef)
      setProdukter(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getProdukter()
  }, [])


// BILD PRODUKTER
function previewImageProdukt() {
  const file = document.getElementById("file-produkt").files;
  
  if (file.length > 0) {
      let fileReader = new FileReader();
      fileReader.onload = function (event) {
          document.getElementById("preview-produkt").setAttribute("src", event.target.result);
          setIMG_SRC_produkt(event.target.result)
      };

      fileReader.readAsDataURL(file[0]);
  }
}

  // LÄGGER TILL DATA
    // ANSTÄLLDA
  const createStaff = async () => {
    await addDoc(staffCollectionRef, {name: newName, age: Number(newAge), img: IMG_SRC});
  }

    // PRODUKTER
  const createProduct = async () => {
    await addDoc(produkterCollectionRef, {img: IMG_SRC_produkt, kategori: kategori, pris: Number(pris), produktNamn: produktNamn});
  }


  // RADERAR DATA
const deleteProdukter = async (id, DBcollextion) => {

    const staffDoc = doc(db, DBcollextion, id);
    await deleteDoc(staffDoc);
    alert('Raderad')
  };

// 

  const openUpdateModal = (id) => {
    document.querySelector(`#${id}-update-modal`).style.display='flex'
  }

  const openProductUpdateModal = (id) => {
    document.querySelector(`#${id}-update-modal`).style.display="flex"
  }


  // BILD ANSTÄLLDA
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
          <div className='line'></div>

{/* ------------------------------ PRODUKTER ------------------------- */}

        <section className='center'>
            <h1>Lista över produkter</h1>

          <div className='m30'>
            <h1>Lägg till ny produkt</h1>

            <div className='modal-input-wrapper'>
              <p>Namn på produkt:</p>
              <input type="text" onChange={(e) => setProduktNamn(e.target.value)} />
            </div>

            <div className='modal-input-wrapper'>
              <p className='m10'>Kategori:</p>
              <select className='drop-down' name='välj pass' onChange={(e) => setKategori(e.target.value)}>
                <option value="null">Välj kategori</option>
                <option value="utrustning">Utrustning</option>
                <option value="men">Män</option>
                <option value="kvinnor">Kvinnor</option>
              </select>
            </div>
            
            <div className='modal-input-wrapper'>
              <p>Pris:</p>
              <input type="number" required onChange={(e) => setPris(e.target.value)} />
            </div>
            <div className='modal-input-wrapper column'>
               <input 
                  type="file" 
                  name="file-produkt" 
                  id="file-produkt" 
                  accept="image/*" 
                  onChange={previewImageProdukt} ></input>
              <img src='' id="preview-produkt" />
            </div>
           
          <button onClick={createProduct}>Spara</button>
          </div>

          <article className='map-article'>
            {produkter.map((produkt, index) => {
              return( 
                <>
                <div key={index} className='center staff-card' id={`${produkt.id}-div`}>
                    <h1 className='m10'>{produkt.produktNamn}</h1>
                    <h1 className='m10'>{produkt.pris}</h1>
                    <p className='m10'>{produkt.kategori}</p>
                  <img className='img-produkt' src={produkt.img} alt={`Bild på ${produkt.produktNamn}`} />
                
                  <button className='pass-redigera-btn' onClick={() => openProductUpdateModal(produkt.id)}>Ändra <BsFillPencilFill className='pen-icon' /></button>
                  <button className='booking-btn' onClick={() => {deleteProdukter(produkt.id, 'produkter')}}>Radera produkt</button>
                </div>

                <Update_modal_product 
                    id={produkt.id}
                    img={produkt.img}
                    kategori={produkt.kategori}
                    pris={produkt.pris}
                    produktNamn={produkt.produktNamn}
                />
              </>
              )
            })}
          </article>

        </section>

        <div className='line'></div>


{/* ------------------------------ ANSTÄLLDA ------------------------- */}

        <section className='center'>
            <h1>Anställda</h1>


            <div className="m30">
              <h1>Lägg till ny anställd +</h1>
              <input type="text" placeholder='Name...' onChange={(e) => {setNewName(e.target.value)}}  />
              <input type="number" placeholder='Age...' onChange={(e) => {setNewAge(e.target.value)}}  />

              <input type="file" name="file" id="file" accept="image/*" onChange={previewImage} ></input>
              <img src='' id="preview" />



              <button onClick={createStaff}>Lägg till</button>
            </div> 

                <article className='map-article'>
                  {staff.map((staff, index) => {
                    return (
                      <>
                        <div key={index} className='center staff-card' id={`${staff.id}-div`}>
                            <h1 id={`${staff.id}-name`}>{staff.name}, {staff.age} år</h1>
                            <img className='staff-img' src={staff.img} alt={`bild på ${staff.name}`} />
                            <button className='pass-redigera-btn' onClick={() => openUpdateModal(staff.id)}>Ändra <BsFillPencilFill className='pen-icon' /></button>
                        </div>
                        
                        <div id={`${staff.id}-modal-div`}>
                            <Update_modal_Staff id={staff.id} staffName={staff.name} age={staff.age} img={staff.img} />
                        </div>
                      </>
                      )
                    })}
                </article>
        

        </section>

        <div className='line'></div>

    </>
  )
}

export default AdminPage