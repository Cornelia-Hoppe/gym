import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import './minaSidor.css'
import TEMP_IMG from '../images/istockphoto-1362531854-612x612.jpg'
import style from "../Components/HomeOffer/HomeOffer.module.css"

function MinaSidor() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return (
    <>
      <section className='profile-wrapper'>
        <article className='profile-left'>
          <h2>Mina sidor</h2>
            <div className='flex-between a-center'>
              <h1 className=''>Kontouppfigter</h1>
              <AiFillEdit />
            </div>
            <div className='flex-between'>
              <img className='profile-img' src={TEMP_IMG} alt="" />
              <div>
                <p>{user.name} {user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.phoneNumber}</p>
              </div>
            </div>
            <div>              

              


            </div>
        </article>

        <article className='profile-right'>
                <div className={style.OfferSection}>
                  <div className={style.OfferInfo}> 
                    <h3>Medlemskap & passkort</h3>
                  </div>
                  <button className={style.OfferOne} role="button"><p className={style.rowOne}>3 månader</p> <br></br> <p className={style.rowTwo}> 1300:- </p> </button>
                  <button className={style.OfferTwo} role="button"><p className={style.rowOne}>6 månader</p> <br></br> <p className={style.rowTwo}> 2100:- </p> </button>
                  <button className={style.OfferThree} role="button"><p className={style.rowOne}>12 månader</p> <br></br> <p className={style.rowTwo}> 3600:- </p> </button>
                  <button className={style.OfferFour} role="button"> <p className={style.rowOne}>Passkort</p> <br></br> <p className={style.rowTwo}> 150:- </p></button>
                  <button className={style.buttonMember} role="button"> <p className={style.rowMember}>Bli medlem</p> </button>
                </div>

        </article>

      </section>
    </>
  ) 
}

export default MinaSidor