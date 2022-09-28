import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import './minaSidor.css'
import UpdateProfileModal from './UpdateProfileModal';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import Menu from '../Components/Navbar/components/Menu';
import icon from "./icon.png"
import closeLoadingScreen from '../Components/loading_screen/CloseLoadingModal'
import Login from '../Components/Auth/Login'

function MinaSidor() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
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
  // console.log('userBokadePassId: ', userBokadePassId);
let HI = []
  const getPassAndSet = () => {
    userBokadePassId.map((bokatPass) => {
      
pass.find((pass, index) => {
        if (pass.id == bokatPass){
     HI.push(pass)

      } 
      })
    
    })
    
  }
  
  getPassAndSet()
// ========================= START: LÄGG TILL BOKADE PASS I MINA SIDOR ======================= //
console.log(HI)
  const openModal = () => {
    document.querySelector(`#${user.id}-update-modal`).style.display='flex'
  }

  const closeModal = () => {
    setTimeout(setFromStorage, 1000)
}

  const setFromStorage = () => {
    closeLoadingScreen()
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
      <Menu updateAfterLogin={updateAfterLogin} />
      <UpdateProfileModal closeModal={closeModal} id={user.id} img={user ? user.img : icon} email={user.email} name={user.name} lastName={user.lastName} password={user.password} phoneNumber={user.phoneNumber}  />
      <section className='profile-wrapper'>
        <article className='profile-left'>
          <div className='flex-between update-and-title'>
            <h2>Mina sidor</h2>
            <AiFillEdit id='update-btn' onClick={openModal} />
          </div>
          
            <div className='flex-between a-center'>
              <h4 className=''>Kontouppgifter</h4>
              
              
            </div>
            <div className='flex-between'>
              <img className='profile-img' src={user ? user.img : icon} alt="No image" />
              <div>
                <p>{user.name} {user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.phoneNumber}</p>
              </div>
            </div>
            <div>              

            <div className='bokade-pass'>
                <h1>Bokade pass</h1>
                {HI.map(pass => {
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
        </article>

        <article className='profile-right'>
                <div className="OfferSection">
                  <div className="OfferInfo"> 
                    <h3>Medlemskap & passkort</h3>
                  </div>
                  <button className="OfferOne" role="button"><p className="rowOne">3 månader</p>  <p className="rowTwo"> 1300:- </p> </button>
                  <button className="OfferTwo" role="button"><p className="rowOne">6 månader</p>  <p className="rowTwo"> 2100:- </p> </button>
                  <button className="OfferThree" role="button"><p className="rowOne">12 månader</p>  <p className="rowTwo"> 3600:- </p> </button>
                  <button className="OfferFour" role="button"> <p className="rowOne">Passkort</p>  <p className="rowTwo"> 150:- </p></button>
              
                </div>

        </article>

      </section>
    </>
  ) : (
    <>
      <Menu updateAfterLogin={updateAfterLogin} />
      <section className='profile-wrapper'>
        <article className='profile-left'>
          
          <Login updateAfterLogin={updateAfterLogin} darkText={{color:'black'}} />

        </article>

        <article className='profile-right'>
                <div className="OfferSection">
                  <div className="OfferInfo"> 
                    <h3>Medlemskap & passkort</h3>
                  </div>
                  <button className="OfferOne" role="button"><p className="rowOne">3 månader</p>  <p className="rowTwo"> 1300:- </p> </button>
                  <button className="OfferTwo" role="button"><p className="rowOne">6 månader</p>  <p className="rowTwo"> 2100:- </p> </button>
                  <button className="OfferThree" role="button"><p className="rowOne">12 månader</p>  <p className="rowTwo"> 3600:- </p> </button>
                  <button className="OfferFour" role="button"> <p className="rowOne">Passkort</p>  <p className="rowTwo"> 150:- </p></button>
              
                </div>

        </article>

      </section>
    </>
  ) 
}

export default MinaSidor

