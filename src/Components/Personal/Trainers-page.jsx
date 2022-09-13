import React from "react";
import Trainer from "./Trainers";
import "./Personal.css";
import Context from "./Context";
 //hämtar data
import list from "./data";


const Trainers = ({ handleClick }) => {
  
  return (
    <>
   
   
      <div>
     <Context></Context>
      
      </div>       
    {/* ------------------------------ Trainers Page  ------------------------- */}
      <section className="container">
        <h1>Ledning</h1>
     
      {list.map((item) =>
      <Trainer key={item.id} item={item} handleClick={handleClick}/>
      )}
    </section>
 

    </> 
  );
}

export default Trainers;