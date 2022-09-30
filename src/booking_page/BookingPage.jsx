import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./bookingPage.css";
import "../admin_page/AdminPage.css";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import CheckModal from "./CheckModal";
// import { BsFillPencilFill } from "react-icons/bs";
import Update_modal_pass from "./Update_modal_pass";
import openLoadingModal from "../Components/loading_screen/OpenLoadingModal";
import closeLoadingModal from "../Components/loading_screen/CloseLoadingModal";
import UpdateLocalStorage from "../functions/UpdateLocalStorage";
import { async } from "@firebase/util";

function BookingPage() {

  const [passKategorier, setPassKategorier] = useState();
  const [maxAntal_STYLE, setmaxAntal_STYLE] = useState({});

  const [date, setDate] = useState(new Date())
  const [passDenDagen, setPassDenDagen] = useState([])

  // SÄTTER inloggaUser. DENNA KOMMER UPPDATERAS
  const [inloggadUser, setInloggadUser] = useState(JSON.parse(localStorage.getItem('user')))

  const ref = useRef(null);


// START: HÄMTAR PASS

  const passCollectionRef = collection(db, "pass");
  const [pass, setPass] = useState([]);

  const getPass = async () => {
    openLoadingModal()
    console.log('getPass körs');
    const data = await getDocs(passCollectionRef);
    setPass(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    closeLoadingModal()
  };

    // HÄMTAR PASS FÖRSTA GÅNGEN
  const getStaffFirstTime = async () => {
    const data = await getDocs(passCollectionRef);
    setPass(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getStaffFirstTime()
  }, []);

// END: HÄMTAR PASS


// START: HÄMTAR PROFILER

  const profilerCollectionRef = collection(db, "profiler");
  const [profiler, setProfiler] = useState([]);
 
  useEffect(() => {
    const getProfiler = async () => {
      const data = await getDocs(profilerCollectionRef);
      setProfiler(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
 
    getProfiler();
  }, []);

// END: HÄMTAR PROFILER

  // BOKA-KNAPPEN

  const handleBokaBtn = async (passId, platser, ) => {

    if (!inloggadUser) alert('go to login / sign up')
    else {
      inloggadUser.bokadePass.find((item) => {
      if (passId == item) avbokaPass() })
              
        openLoadingModal()

        addPassToProfile(passId)
        
      };


// START: UPPDATERAR PASS DATA OCH LOCALSTORAGE

      const addPassToProfile = async (passId) => {
      
      const inloggadId = inloggadUser.id
      
      const tidigarePass = inloggadUser.bokadePass

      const newPassLista = []

      if (tidigarePass) {
        tidigarePass.map((item, index) => {
          newPassLista.push(passId)
          newPassLista.push(item)
        })
      } else {
        newPassLista.push(passId)
      }

      const passDoc = doc(db, 'profiler', inloggadId);
      const newFields = { bokadePass: newPassLista };
      await updateDoc(passDoc, newFields);

      UpdateLocalStorage(inloggadUser.id)

      getPass()

      closeLoadingModal()

      document.querySelector("#check-modal").style.display = "flex";
      }

   

  };

// END: UPPDATERAR PASS DATA OCH LOCALSTORAGE


// START: SORTERA PASSEN

  // PER DAG
  const sortPassDay = (e) => {
    const filteredPass = pass.filter((pass) => {
      return pass.dag == e;
    });
    setPassDenDagen(filteredPass);
    scrollToPass();
  };

  // PER KATEGORI
  const sortKategories = (selectedKategori) => {
    const filteredKategoryPass = pass.filter((pass) => {
      return pass.kategori == selectedKategori;
    });
    setPassDenDagen(filteredKategoryPass);
    scrollToPass();
    setPassKategorier(selectedKategori);
    
  }
  
// END: SORTERA PASSEN


// START: AVBOKA PASS 

const avbokaPass = async (passId, passPlatser) => {

  let newBokadePass = []

  inloggadUser.bokadePass.find((item) => {
    if (passId == item) {
    } else {
      newBokadePass.push(item)
    }
  })

    // UPPDATERAR DATA PROFILER
      const profulerDoc = doc(db, 'profiler', inloggadUser.id);
      const newFields = { bokadePass: newBokadePass,};
      await updateDoc(profulerDoc, newFields);

      UpdateLocalStorage(inloggadUser.id)

      passPlatser--

      // UPPDATERAR DATA PASS
      const passfDoc = doc(db, "pass", passId);
      const newFields2 = { platser: passPlatser,};
      await updateDoc(passfDoc, newFields2);

getPass()

}

// END: AVBOKA PASS  

// SCROLL FUNCTION
const scrollToPass = () => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};


    return (
      <>
        <article className="booking-page-container">
          {/* <div className="booking-page-header-desktop">
          </div> */}
            <h1 className="booking-page-header-desktop">Boka Pass</h1>
          <div className="booking-content">
            <section className='blue-wrapper center'>
        
              <div className="booking-page-header-mobile">
                <h1>Kalender</h1></div>
              <Calendar onChange={setDate} value={date} onClickDay={sortPassDay} />
            </section>

            <section className='blue-wrapper center choose-workout-section'>
              <div className="booking-page-header-mobile"> <h1>Pass</h1> </div>
              <select className='drop-down' name='välj pass' onChange={(e) => sortKategories(e.target.value)}>
                <option value="null">Välj pass</option>
                <option value="kondition">Kondition</option>
                <option value="spinning">Styrka</option>
                <option value="styrka">Crossfit</option>
                <option value="flexebilitet">Funktionell Träning</option>
                <option value="mindfullnes">Mindfullnes</option>
                <option value="crossfit">Crossfit</option>
                <option value="funktionell-träning">Funktionell träning</option>

              </select>
            
              {passDenDagen.map((pass, index) => {

                return (
                  <>
                    <div key={index} className="pass-card" ref={ref}>
                      
                      {/* <img clasName='booking-icon' src={require("./"+pass.kategori +".png")} alt="no img" height="40px" width="30px"/> */}
                      <div className="aktv-tid-div">
                        <h1>{pass.aktivitet}</h1>
                        <p>
                          {pass.dayString}, {pass.dateString} {pass.monthString}{" "}
                          <br />
                          {pass.tid}
                        </p>
                      <p>Av: {pass.instruktör}</p>
                      </div>
                      <div className="pass-button-container">
                      <h2
                        className="booking-antal"
                        style={
                          pass.platser == pass.maxAntal
                            ? { color: "red" }
                            : { color: "white" }
                        }
                      >
                        {!pass.platser ? 0 : pass.platser}/{pass.maxAntal}
                      </h2>
                      <button
                        class="booking-btn"
                        onClick={() =>
                          handleBokaBtn(pass.id, "pass", pass.platser)}>
                        Boka
                      </button>
                      </div>
                    </div>
                  </>
                );
              })}

              <CheckModal bokadText={'Bokat'} />
            </section>
          </div>
        </article>
      </>
    );
  }

  

export default BookingPage;
