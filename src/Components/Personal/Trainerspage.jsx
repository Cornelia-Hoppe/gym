import React, { useState, useEffect } from "react";
import "./Personal.css";
import StaffBtn from "./StaffBtn";
import { getTrainer, filterTrainer } from "./services";
//import Edit from "./Edition";
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavFilter } from "./GetLink";
export default function App() {


  const staffCollectionRef = collection(db, "staff")
  const [staff, setStaff] = useState([])
  const [selected, setSelected] = useState(null);
  const [trainersPerson, setTrainersPerson] = useState(null);

  const getStaff = async () => {
    const data = await getDocs(staffCollectionRef)
    setStaff(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  };

useEffect(() => {

    getStaff()
  }, [])

  useEffect(() => {
    const Cards = () =>{
     type !== null
     ? setTrainersPerson(filterTrainer(type))
     : setTrainersPerson(getTrainer());

     setSelected(type);
      }
      Cards()
      }, []);

       let type = NavFilter()


  function handleTrainer(e) {
    let typeTrainer = e.target.value;

    typeTrainer !== ""
      ? setTrainersPerson(filterTrainer(typeTrainer))
      : setTrainersPerson(getTrainer());

      setSelected(typeTrainer);
    }

    return (
      <>
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






                </div>
              </ul>
            ))}
        </div>

        </div>
    </>
  );
}