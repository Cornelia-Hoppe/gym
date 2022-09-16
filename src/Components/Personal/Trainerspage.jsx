import React, { useState, useEffect } from "react";
import "./Personal.css";
import { buttons } from "./data";
import { getTrainer, filterTrainer } from "./services";

export default function App() {
  const [trainersPerson, setTrainersPerson] = useState(null);
  useEffect(() => {
    setTrainersPerson(getTrainer());
  }, []);

  function handleTrainer(e) {
    let typeTrainer = e.target.value;
    typeTrainer !== ""
      ? setTrainersPerson(filterTrainer(typeTrainer))
      : setTrainersPerson(getTrainer());
  }

  return (
    <>
      {/* Trainers nav  */}
       <div className="nav_con list">
            
            <h1> Vårat team</h1>
           
            
      {buttons  &&
        buttons.map((type, index) => (
          <>
            <button  key={index} value={type.value} onClick={handleTrainer}>
              {type.name}
             
            </button>
         
            
          </>
        ))}
        </div>
        {/* Trainers Info & img */}
      
        <div className=" container">
        <h1>Ledning</h1>
        
        <div className="image_box">
      {trainersPerson &&
        trainersPerson.map(type => (
          <ul  key={type.id} >
            <img src={type.img} alt=""  />
             
            <div className="details">
            <p >{type.namn}</p>
              <p >{type.job}</p>
              </div>
            
          </ul>
        ))}
          </div>
    </div>
    </>
  );
}
