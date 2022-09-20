import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
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
  // console.log(profiler);

  // BOKA-KNAPPEN

  const [bokadText, setBokadText] = useState("");

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

    document.querySelector("#check-modal").style.display = "flex";

    setBokadText(bokad ? "bokat" : "avbokat");
  };

  const addPassToProfile = async (passId) => {

    const inloggadId = inloggadUser.id
    const entill = 'en till!'

    const tidigarePass = inloggadUser.bokadePass

    const newPassLista = []

    console.log('tidigarePass innan push: ', tidigarePass);

    if (tidigarePass) {
      tidigarePass.map((item, index) => {
        newPassLista.push(passId)
        newPassLista.push(item)
      })
    } else {
      newPassLista.push(passId)
    }

    console.log('newPassLista efter pushar: ', newPassLista);

      // UPPDATERAR DATA
      const staffDoc = doc(db, 'profiler', inloggadId);
      const newFields = { bokadePass: newPassLista };
      await updateDoc(staffDoc, newFields);
    
    };


  // ------

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
        <section className='blue-wrapper center'>
            <h1>Kalender</h1>
            <Calendar onChange={setDate} value={date} onClickDay={sortPass}/>
        </section>  

        <section className='blue-wrapper center'>
            <h1>Pass</h1>
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
    </>
  );
}

export default BookingPage;
