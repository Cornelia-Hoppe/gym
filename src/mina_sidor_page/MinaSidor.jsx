import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import './minaSidor.css'
import UpdateProfileModal from './UpdateProfileModal';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import icon from "./icon.png"
import closeLoadingScreen from '../Components/loading_screen/CloseLoadingModal'
import Login from '../Components/Auth/Login'
import SavedModal from '../Components/loading_screen/SavedModal';
import Memberships from './Memberships';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

function MinaSidor() {
  const [showModal, setshowModal] = useState(false)
  const [userAuth, loading, error] = useAuthState(auth); 

  const [user, setUser] = useState(userAuth? JSON.parse(localStorage.getItem('user')) : '')

  const [userBokadePassId, setUserBokadePassId] = useState(user ? user.bokadePass : '')
  const [userBokadePass, setUserBokadePass] = useState('')


  useEffect(() => {
    if (userBokadePass) getPassAndSet()

  }, [])

// START - HÄMTAR ANVÄNDARENS BOKADE PASS 

  const passCollectionRef = collection(db, "pass")
  const [pass, setPass] = useState([])

  useEffect(() => {

    const getPass = async () => {
      const data = await getDocs(passCollectionRef)
      setPass(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };

    getPass()
  }, [])

// ========================= START: LÄGG TILL BOKADE PASS I MINA SIDOR ======================= //

  //  DEN VIKTIGA DATAN  //
  // console.log('pass: ', pass);

  useEffect(() => {
    if (!userBokadePassId == "Inga bokade pass") {
      console.log('inloggd och pass bokade');
      getPassAndSet()
    } else if (user) {
      console.log('Inga pass bokade');
    } else if (!user) {
      console.log('ej inloggad');
    }
  }, [])

let bokatPassArray = []

   const getPassAndSet = () => {
    userBokadePassId.map((bokatPass) => {
      
      pass.find((pass, index) => {
        if (pass.id == bokatPass){
     bokatPassArray.push(pass)

      } 
      })
    })
  }


 
// ========================= END: LÄGG TILL BOKADE PASS I MINA SIDOR ======================= //

  const openModal = () => {
    document.querySelector(`#${user.id}-update-modal`).style.display='flex'
  }

  const closeModal = () => {
    setTimeout(setFromStorage, 1000)
}

  const setFromStorage = () => {
    closeLoadingScreen()
    setshowModal(true)
    document.querySelector(`#${user.id}-update-modal`).style.display="none"
    setUser(JSON.parse(localStorage.getItem('user')))
  }

// UPPDATERA EFTER LOGIN

  const updateAfterLogin = () => {
    setUser(JSON.parse(localStorage.getItem('user')))
    setTimeout(setImgDelay, 500)
  }

  const setImgDelay = () => {
    console.log(user);
  }

   return user ? ( 
    <>
      <UpdateProfileModal closeModal={closeModal} id={user.id} img={user ? user.img : icon} email={user.email} name={user.name} lastName={user.lastName} password={user.password} phoneNumber={user.phoneNumber}  />
      <section className='profile-wrapper'>   
       <h2 className='Desktop-heading-mypages'>Mina sidor</h2>
       <div className='mypages-container'>
        <div className='left-container'>
        <article className='profile-left'>
        {/* <div className='flex-between update-and-title'>
            <h2>Mina sidor</h2>
            <AiFillEdit id='update-btn' onClick={openModal} />
          </div> */}
      
            
              <h3 >Mitt konto</h3> 

            <div className='flex-between'>
              <img className='profile-img' src={user ? user.img : icon} alt="No image" />
              <div className='user-information'>
                <p>{user.name} {user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.phoneNumber}</p>
                 
              </div>
              {showModal && <SavedModal setshowModal={setshowModal}/> }
               <AiFillEdit id='update-btn' onClick={openModal} />
              <UpdateProfileModal closeModal={closeModal} id={user.id} img={user ? user.img : icon} email={user.email} name={user.name} lastName={user.lastName} password={user.password} phoneNumber={user.phoneNumber}  />
       
            </div>
        </article>
<Memberships />
        </div>
        <div className='bokade-pass'>
                <h3>Mina pass</h3>
                {bokatPassArray.map(pass => {
           return (
            <div key={pass.id} className='pass-card center'>
            <h2 className='booking-antal' style={pass.platser == pass.maxAntal ? { color:'red'} : {color:'white'}} >{!pass.platser ? 0 : pass.platser }/{pass.maxAntal}</h2>
            <img className='booking-icon' src={require(".././booking_page/"+pass.aktivitet +".png")} alt="no img" height="40px" width="30px"/>
            <div className='aktv-tid-div'>
                <h1>{pass.aktivitet}</h1>
                <h2>{pass.tid}</h2>
            </div>
            <p>instruktör: {pass.instruktör}</p>
        </div>
           )
       })} 
            </div>
            </div>
      </section>
    </>
  ) : (
    <>
      <section className='profile-wrapper'>
        <article >
          
          <Login updateAfterLogin={updateAfterLogin} darkText={{color:'black'}} />

        </article>

        {/* <article className='profile-right'>
                <div className="OfferSection">
                  <div className="OfferInfo"> 
                    <h3>Medlemskap & passkort</h3>
                  </div>
                  <button className="OfferOne" role="button"><p className="rowOne">3 månader</p>  <p className="rowTwo"> 1300:- </p> </button>
                  <button className="OfferTwo" role="button"><p className="rowOne">6 månader</p>  <p className="rowTwo"> 2100:- </p> </button>
                  <button className="OfferThree" role="button"><p className="rowOne">12 månader</p>  <p className="rowTwo"> 3600:- </p> </button>
                  <button className="OfferFour" role="button"> <p className="rowOne">Passkort</p>  <p className="rowTwo"> 150:- </p></button>
              
                </div>

        </article> */}

      </section>
    </>
  ) 
}

export default MinaSidor

