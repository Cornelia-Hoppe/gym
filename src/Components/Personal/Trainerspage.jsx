import React, { useState, useEffect } from "react";
import "./Personal.css";
import { buttons } from "./data";
import { getTrainer, filterTrainer } from "./services";
import Menu from "../Navbar/components/Menu";
//import Edit from "./Edition";


import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'




export default function App() {
  

  const staffCollectionRef = collection(db, "staff")
  const [staff, setStaff] = useState([])

  const getStaff = async () => {
    const data = await getDocs(staffCollectionRef)
    setStaff(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  };

useEffect(() => {

    getStaff()
  }, [])

  console.log(staff);

  const [selected, setSelected] = useState(null);

  const [trainersPerson, setTrainersPerson] = useState(null);
  useEffect(() => {
    setTrainersPerson(getTrainer());
  }, []);

  function handleTrainer(e) {

    let typeTrainer = e.target.value;

    typeTrainer !== ""
      ? setTrainersPerson(filterTrainer(typeTrainer))

      : setTrainersPerson(getTrainer());

    setSelected(typeTrainer);
  }

  return (
    <>
      <Menu />
      {/* Trainers nav  */}
      <div className="nav_con list">
        <h1> Vårat team</h1>


        {buttons &&
          buttons.map((type, index) => (
            <>
              <button
                key={index}
                value={type.value}
                onClick={handleTrainer}
                style={{
                  backgroundColor:
                    selected === type.value ? "rgba(115, 167, 193)" : "",
                }}
              >
                {type.name}
              </button>
            </>
          ))}

      </div>
      {/* Trainers Info & img */}

      <div className=" container" >
      {/* <div className="text">
      {trainersPerson &&
            trainersPerson.map((type) => (
              <h4 >{type.kategori}</h4>
            ))}
            </div>*/}
            

        <div className="image_box">
          {trainersPerson &&
            trainersPerson.map((type) => (
             
              <ul key={type.id}>
             
              <img src={type.img} alt="" />
                
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
