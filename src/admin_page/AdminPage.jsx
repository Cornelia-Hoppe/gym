import React from 'react';
import "./AdminPage.css";
import { useState, useEffect } from "react";
import Update_modal_Staff from './Update_modal_Staff';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { BsFillPencilFill } from 'react-icons/bs'
import Update_modal_product from './Update_modal_product';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


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

    // TILL PASS
    const [IMG_SRC_pass, setIMG_SRC_pass] = useState('')
    const [aktivitet, setAktivitet] = useState('')
    const [instruktör, setInstruktör] = useState('')
    const [maxAntal, setMaxAntal] = useState(0)
    const [tid, setTid] = useState('')
    const [date, setDate] = useState('')
    const [passKategori, setPassKategori] = useState('')

    const passCollectionRef = collection(db, "pass")
    const [pass, setPass ] = useState([])

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
    alert ('Sparat!')

    clearFields()
  }

    // PRODUKTER
  const createProduct = async () => {
    await addDoc(produkterCollectionRef, {img: IMG_SRC_produkt, kategori: kategori, pris: Number(pris), produktNamn: produktNamn});
    alert ('Sparat!')

    clearFields()
  }

    // PASS
    const createPass = async () => {

   console.log(date);

    await fixDays()

      // await addDoc(passCollectionRef, {aktivitet: aktivitet, kategori: passKategori, dag: String(date), instruktör: instruktör, maxAntal: Number(maxAntal), tid: tid});
      // alert ('Sparat!')

      clearFields()
    }


  // RADERAR DATA
const deleteProdukter = async (id, DBcollextion) => {

    const staffDoc = doc(db, DBcollextion, id);
    await deleteDoc(staffDoc);
    alert('Raderad')
  };

// 

// FIXAR DAGARNA TILL VARJE PASS

const [dayString, setDayString] = useState('')
const [monthtring, setMonthString] = useState('')
const [dateString, setDateString] = useState('')

   const fixDays = () => {

    console.log('fixDays kör');

   const daysArray = []

   console.log('date i fixDays: ', date);

   console.log('');



        const dateStr1 = date

        console.log(dateStr1);

        const date1 = new Date(dateStr1)
        const timestamp = date1.getTime()
        
        const date = new Date(timestamp * 1000)

        console.log(date.getDate());

        let day = ""

        switch (date.getDay()) {
            case 0:
                day = "Söndag"
                break;
            case 1:
                day = "Måndag"
                break;
            case 2:
                day = "Tisdag"
                break;
            case 3:
                day = "Onsdag"
                break;
            case 4:
                day = "Torsdag"
                break;
            case 5:
                day = "Fredag"
                break;
            case 6:
                day = "Lördag"
                break;
        }

        setDayString(day)

        let month = ""

        switch (date.getMonth()) {
            case 0:
                month = "Januari"
                break;
            case 1:
                month = "Februari"
                break;
            case 2:
                month = "Mars"
                break;
            case 3:
                month = "April"
                break;
            case 4:
                month = "Maj"
                break;
            case 5:
                month = "Juni"
                break;
            case 6:
                month = "Juli"
                break;
            case 7:
                month = "Agusti"
                break;
            case 8:
                month = "September"
                break;
            case 9:
                month = "Oktober"
                break;
            case 10:
                month = "November"
                break;
            case 11:
                month = "December"
                break;

        setMonthString(month)

    }
   }


  const clearFields = () => {

    const allInputs = document.querySelectorAll('.input')
    for (let i=0; i < allInputs.length; i++) {
      allInputs[i].value=""
    }

    const allSelected = document.querySelectorAll('.input-select')
    for (let i=0; i < allSelected.length; i++) {
      allSelected[i].selectedIndex = 0 ;
    }

    const allImages = document.querySelectorAll('.input-img')
    for (let i=0; i < allImages.length; i++) {
      allImages[i].src = "" ;
    }
    
  }

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

// KALENDER


  const onSelect = (e) => {
    setDate(e)
    console.log('date is set: ', e);
    console.log('date: ', date);
  }

  return (
    <>
{/* ------------------------------ PASS -------------------------------- */}

<section className='center'>

          <div className='m30'>
            <h1>Lägg till nytt pass</h1>

            <div className='modal-input-wrapper'>
              <p>Aktivitet:</p>
              <input className="input" type="text" onChange={(e) => setAktivitet(e.target.value)} />
            </div>

            <div className='modal-input-wrapper'>
              <p>Kategori:</p>
              <select className='drop-down input-select' name='välj pass' onChange={(e) => setPassKategori(e.target.value)}>
                <option value="övrigt">Välj kategori</option>
                <option value="kondition">Kondition</option>
                <option value="styrka">Styrka</option>
                <option value="crossfit">Crossfit</option>
                <option value="funktionell-träning">Funktionell träning</option>
            </select>
            </div>
    
            <p>Dag: </p>
            <Calendar value={date} onClickDay={onSelect}/>
            
            <div className='modal-input-wrapper'>
              <p>tid:</p>
              <input className="input" type="text" required onChange={(e) => setTid(e.target.value)} />
            </div>

            <div className='modal-input-wrapper'>
              <p>Instruktör:</p>
              <input className="input" type="text" required onChange={(e) => setInstruktör(e.target.value)} />
            </div>

            <div className='modal-input-wrapper'>
              <p>Max antal:</p>
              <input className="input" type="number" required onChange={(e) => setMaxAntal(e.target.value)} />
            </div>
           
          <button onClick={createPass}>Lägg till pass</button>
          </div>

        </section>


          <div className='line'></div>

{/* ------------------------------ PRODUKTER ------------------------- */}

        <section className='center'>
            <h1>Produkter</h1>

          <div className='m30'>
            <h1>Lägg till ny produkt</h1>

            <div className='modal-input-wrapper'>
              <p>Namn på produkt:</p>
              <input className="input" type="text" onChange={(e) => setProduktNamn(e.target.value)} />
            </div>

            <div className='modal-input-wrapper'>
              <p className='m10'>Kategori:</p>
              <select className='drop-down input-select' name='välj pass' onChange={(e) => setKategori(e.target.value)}>
                <option value="null">Välj kategori</option>
                <option value="utrustning">Utrustning</option>
                <option value="men">Män</option>
                <option value="kvinnor">Kvinnor</option>
              </select>
            </div>
            
            <div className='modal-input-wrapper'>
              <p>Pris:</p>
              <input className="input" type="number" required onChange={(e) => setPris(e.target.value)} />
            </div>
            <div className='modal-input-wrapper column'>
               <input 
                  className='input-file'
                  type="file" 
                  name="file-produkt" 
                  id="file-produkt" 
                  accept="image/*" 
                  onChange={previewImageProdukt} ></input>
              <img className='input-img' src='' id="preview-produkt" />
            </div>
           
          <button onClick={createProduct}>Spara</button>
          </div>

          <article className='map-article'>
            {produkter.map((produkt, index) => {
              return( 
                <>
                <div key={index} className='center staff-card' id={`${produkt.id}-div`}>
                    <h1 className='m10'>{produkt.produktNamn}</h1>
                    <h1 className='m10'>{produkt.pris} kr</h1>
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

              <input 
                type="file" 
                name="file" 
                id="file" 
                accept="image/*" 
                onChange={previewImage} 
                className="input-file"
              ></input>
              <img className='input-img' src='' id="preview" />



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