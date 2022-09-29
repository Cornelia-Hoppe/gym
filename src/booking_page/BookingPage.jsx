import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
  refEqual,
} from "firebase/firestore";
import CheckModal from "./CheckModal";
// import { BsFillPencilFill } from "react-icons/bs";
import Update_modal_pass from "./Update_modal_pass";
import Menu from "../Components/Navbar/components/Menu";
import openLoadingModal from "../Components/loading_screen/OpenLoadingModal";
import closeLoadingModal from "../Components/loading_screen/CloseLoadingModal";
import UpdateLocalStorage from "../functions/UpdateLocalStorage";
import { async } from "@firebase/util";

function BookingPage() {
  const ref = useRef(null);
  // HÄMTAR STAFF
  const passCollectionRef = collection(db, "pass");
  const [pass, setPass] = useState([]);

  const getPass = async () => {
    openLoadingModal()
    console.log('getPass körs');
    const data = await getDocs(passCollectionRef);
    setPass(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    sortPass()
    closeLoadingModal()
  };

  const getStaffFirstTime = async () => {
    const data = await getDocs(passCollectionRef);
    setPass(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    sortPass()
  };

  useEffect(() => {
    getStaffFirstTime()
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
   

   // KALENDER

 const [date, setDate] = useState(new Date())
 const [passDenDagen, setPassDenDagen] = useState([])

  const handleBokaBtn = async (passId, DBcollextion, platser, bokad) => {
    addPassToProfile(passId);

 const sortPass = async (e) => {
  console.log(e);

  const filteredPass = pass.filter((pass) => {
      return pass.dag == e 
  })
    // UPPDATERAR DATA
    const staffDoc = doc(db, DBcollextion, passId);
    const newFields = { platser: platser, bokad: bokad };
    await updateDoc(staffDoc, newFields);
    // ---

  setPassDenDagen(filteredPass)

 }

  // BOKA-KNAPPEN

  const handleBokaBtn = async (passId, platser, ) => {

    inloggadUser.bokadePass.find((item) => {
      if (passId == item) avbokaPass() })
      
      
      
      openLoadingModal()

      addPassToProfile(passId)
      
    };

    const addPassToProfile = async (passId) => {
    const newPassLista = [];

    if (tidigarePass) {
      tidigarePass.map((item, index) => {
        newPassLista.push(passId);
        newPassLista.push(item);
      });
    } else {
      newPassLista.push(passId);
    }

    // UPPDATERAR DATA
    const staffDoc = doc(db, "profiler", inloggadId);
    const newFields = { bokadePass: newPassLista };
    await updateDoc(staffDoc, newFields);
  };

  //--

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

        // UPPDATERAR DATA PROFILER
        const staffDoc = doc(db, 'profiler', inloggadId);
        const newFields = { bokadePass: newPassLista };
        await updateDoc(staffDoc, newFields);

        UpdateLocalStorage(inloggadUser.id)

        getPass()

        closeLoadingModal()

        document.querySelector("#check-modal").style.display = "flex";

    };

// SORTERA PASSEN

const sortKategories = (selectedKategori) => {

  // KALENDER

  const [date, setDate] = useState(new Date());
  const [passDenDagen, setPassDenDagen] = useState([]);

  const sortPass = (e) => {
    const filteredPass = pass.filter((pass) => {
      return pass.dag == e;
    });

    setPassDenDagen(filteredPass);

    const scrollToPass = () => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToPass();
  };

  // SORTERA PASSEN

  const [passKategorier, setPassKategorier] = useState();

  const [maxAntal_STYLE, setmaxAntal_STYLE] = useState({});

// START: AVBOKA PASS  ====================================================

const avbokaPass = async (passId, passPlatser) => {

  let newBokadePass = []

  inloggadUser.bokadePass.find((item) => {
    if (passId == item) {
    } else {
      newBokadePass.push(item)
    }
  })

    // UPPDATERAR DATA
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


// END: AVBOKA PASS  ====================================================

  const sortKategories = (selectedKategori) => {
    setPassKategorier(selectedKategori);

    const filteredPass = pass.filter((pass) => {
      return pass.kategori == selectedKategori;
    });
  }
    // const [maxAntal_STYLE, setmaxAntal_STYLE] = useState({});

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
              <Calendar onChange={setDate} value={date} onClickDay={sortPass} />
            </section>

            <section className='blue-wrapper center'>
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
                    <div key={index} className="pass-card center" ref={ref}>
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
                      {/* <img clasName='booking-icon' src={require("./"+pass.kategori +".png")} alt="no img" height="40px" width="30px"/> */}
                      <div className="aktv-tid-div">
                        <h1>{pass.aktivitet}</h1>
                        <p>
                          {pass.dayString}, {pass.dateString} {pass.monthString}{" "}
                          <br />
                          {pass.tid}
                        </p>
                      </div>
                      <h2>instruktör: {pass.instruktör}</h2>
                      <button
                        class="myButton booking-btn"
                        onClick={() =>
                          handleBokaBtn(pass.id, "pass", pass.platser)
                        }
                      >
                        {" "}
                        {pass.bokad ? "Avboka" : "Boka"}
                      </button>
                    </div>
                  </>
                );
              })}

              <CheckModal bokadText={bokadText} />
            </section>
          </div>
        </article>
      </>
    );
  }
}
  

export default BookingPage;
