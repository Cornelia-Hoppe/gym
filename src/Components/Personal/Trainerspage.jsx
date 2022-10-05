import React, { useState, useEffect } from "react";
import "./Personal.css";
import StaffBtn from "./StaffBtn";
//import Edit from "./Edition";
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavFilter } from "./GetLink";
export default function App() {



  const [selected, setSelected] = useState(null);
  const [trainersPerson, setTrainersPerson] = useState(null);

  const staffCollectionRef = collection(db, "staff")
  const [staff, setStaff] = useState([])

  

  const getStaff = async () => {
    console.log('getStaff körs');
    const data = await getDocs(staffCollectionRef)
    setStaff(data.docs.map((doc) => ({...doc.data(), id: doc.id })));

    let staffLocal = data.docs.map((doc) => ({...doc.data(), id: doc.id }))
    Cards(staffLocal ? staffLocal : staff)

  };

useEffect(() => {
  getStaff()
  

}, [])

// do stuff

const Cards = (staffLocal) => { 
  type !== null
  ? setTrainersPerson(filterTrainer(type, staffLocal))
  : setTrainersPerson(staffLocal);

  setSelected(type);
   }

function filterTrainer(persionType, staffLocal) {
  let staffArray = staffLocal ? staffLocal : staff
  console.log('staffArray: ', staffArray);
  console.log('type: ', type);
  console.log('persionType: ', persionType);

  let trainersPersion = staffArray.filter(type => type.kategori === persionType);
  console.log('trainersPersion: ', trainersPersion);
  return trainersPersion;
}

// done

  let type = NavFilter()

  function handleTrainer(e) {
    let typeTrainer = e.target.value;

    typeTrainer !== ""
      ? setTrainersPerson(filterTrainer(typeTrainer))
      : setTrainersPerson(staff);

      setSelected(typeTrainer);
    }

    return (
      <>
        {/* Trainers nav  */}
        <div className="personal-main">
        <div className="Sportix-Section">
          <div className="personal-header">
          <h3> Vårt team</h3>
</div>
      <StaffBtn handleTrainer={handleTrainer} selected={selected} />
      </div>
      

      <div className="Sportix-Section" >
   


        <div className="image_box">
          {trainersPerson &&
            trainersPerson.map((type) => (

              <ul key={type.id}>
                <LazyLoadImage src={type.img} alt={type.id} />

                <div className="details">
                  <p>{type.name}, {type.age}</p>

                  <p>{type.kategori}</p>
                  <p>{type.text}</p>





                </div>
              </ul>
            ))}
        </div>
      
        </div>
        </div>
    </>
  );
}