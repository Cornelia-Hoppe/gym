import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./bookingPage.css";
import "../admin_page/AdminPage.css";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import CheckModal from "./CheckModal";
import { BsFillPencilFill } from "react-icons/bs";
import Update_modal_pass from "./Update_modal_pass";
import Menu from "../Components/Navbar/components/Menu";

function BookingPage() {
  // HÄMTAR STAFF
  const passCollectionRef = collection(db, "pass");
  const [pass, setPass] = useState([]);

  useEffect(() => {
    const getStaff = async () => {
      const data = await getDocs(passCollectionRef);
      setPass(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getStaff();
    sortPass()
  }, []);

   // HÄMTAR PROFILER
   const profilerCollectionRef = collection(db, "profiler");
   const [profiler, setProfiler] = useState([]);
 
   useEffect(() => {
     const getProfiler = async () => {
       const data = await getDocs(profilerCollectionRef);
       setProfiler(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     };
 
     getProfiler();
   }, []);

   const [inloggadUser, setInloggadUser] = useState(JSON.parse(localStorage.getItem('user')))
   
  //  console.log('inloggadUser: ', inloggadUser);
  //  console.log('profiler: ,', profiler);

  // BOKA-KNAPPEN

  const [bokadText, setBokadText] = useState("");

  // PROBLEM: Localstorage uppdateras ej när man bokar pass. Detta gör att man måste
  //  logga ut, uppdatera sidan, logga in, uppdatera sidan och sedan boka nästa pass
  //  för att boka ett till pass. 

  const handleBokaBtn = async (passId, DBcollextion, platser, bokad) => {

    addPassToProfile(passId)

    if (bokad === true) {
      platser--;
      bokad = false;
    } else {
      platser++;
      bokad = true;
    }

    // UPPDATERAR DATA
    const staffDoc = doc(db, DBcollextion, passId);
    const newFields = { platser: platser, bokad: bokad };
    await updateDoc(staffDoc, newFields);
// ---

    document.querySelector("#check-modal").style.display = "flex";

    setBokadText(bokad ? "bokat" : "avbokat");
  };

  const addPassToProfile = async (passId) => {

    console.log('addPassToProfile Kör');

    // console.log('inloggadUser: ', inloggadUser);


    const inloggadId = inloggadUser.id
    const entill = 'en till!'
    


    const tidigarePass = inloggadUser.bokadePass

    const newPassLista = []


    if (tidigarePass) {
      console.log('tidigarePass == true');
      tidigarePass.map((item, index) => {
        newPassLista.push(passId)
        newPassLista.push(item)
      })
    } else {
      newPassLista.push(passId)
    }

      // UPPDATERAR DATA
      const staffDoc = doc(db, 'profiler', inloggadId);
      const newFields = { bokadePass: newPassLista };
      await updateDoc(staffDoc, newFields);
    
    };
    

//--

  const openUpdateModal = (id) => {
    document.querySelector(`#${id}-update-modal`).style.display = "flex";
  };

 // KALENDER

 const [date, setDate] = useState(new Date())
 const [passDenDagen, setPassDenDagen] = useState([])


 const sortPass = (e) => {

  const filteredPass = pass.filter((pass) => {
      return pass.dag == e 
  })

  setPassDenDagen(filteredPass)

 }


// SORTERA PASSEN

const [passKategorier, setPassKategorier] = useState()

const sortKategories = (selectedKategori) => {

 setPassKategorier(selectedKategori)

 const filteredPass = pass.filter((pass) => {
     return pass.kategori == selectedKategori
 })

 setPassDenDagen(filteredPass)
}




  // GÖM KNAPPEN FÖR VANLIGA ANVÄNDARE
  const normalUser = 0;
  const admin = 1;

  const user = normalUser;

  const [BTN_STYLE, setBTN_STYLE] = useState({});

  useEffect(() => {
    if (user === 1) {
      setBTN_STYLE({ display: "block" });
    } else {
      setBTN_STYLE({ display: "none" });
    }
  }, []);

  // ÄR MAN 

  // STYLING - RÖD TEXT

  const [maxAntal_STYLE, setmaxAntal_STYLE] = useState({});

  return (
    <>
    <Menu />
    <article className="booking-page-container"> 
     <div className="booking-page-header-desktop">
          <h1>Boka Pass</h1>
          </div>
          <div className="booking-content">
        <section className='blue-wrapper center'>
        
          <div className="booking-page-header-mobile">
            <h1>Kalender</h1></div>
            <Calendar onChange={setDate} value={date} onClickDay={sortPass}/>
        </section>  

        <section className='blue-wrapper center'>
        <div className="booking-page-header-mobile"> <h1>Pass</h1> </div>
            <select className='drop-down' name='välj pass' onChange={(e) => sortKategories(e.target.value)}>
                <option value="null">Välj pass</option>
                <option value="kondition">Kondition</option>
                <option value="styrka">Styrka</option>
                <option value="crossfit">Crossfit</option>
                <option value="funktionell-träning">Funktionell Träning</option>
            </select>
            
            {passDenDagen.map((pass, index) => {

                return(
                    <>
                    <div key={index} className='pass-card center'>
                        <h2 className='booking-antal' style={pass.platser == pass.maxAntal ? { color:'red'} : {color:'white'}} >{!pass.platser ? 0 : pass.platser }/{pass.maxAntal}</h2>
                        <img clasName='booking-icon' src={require("./"+pass.aktivitet +".png")} alt="no img" height="40px" width="30px"/>
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
                        <button onClick={() => handleBokaBtn(pass.id, "pass", pass.platser)} className='booking-btn'>
                            {pass.bokad ? 'Avboka' : 'Boka'}
                            </button>
                    </div>

                    <Update_modal_pass 
                        key={Math.random()}
                        id={pass.id} 
                        aktivitet={pass.aktivitet}  
                        instruktör={pass.instruktör}
                        maxAntal={pass.maxAntal}
                        platser={pass.platser}
                        tid={pass.tid}
                        date={pass.dag}
                    />

                    </>
                )
            })}
        
                    <CheckModal bokadText={bokadText} />

        </section>
        </div>
        </article>
    </>
  );
}

export default BookingPage;