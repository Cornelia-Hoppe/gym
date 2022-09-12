import React from "react";
import Trainer from "./Trainers";
import "./Personal.css";
import Context from "./Context";


import list from "./data";


const Trainers = ({ handleClick }) => {
  
  return (
    
    
    <section>
      <Context/>
      {list.map((item) =>
      <Trainer key={item.id} item={item} handleClick={handleClick}/>
      )}
    </section>
 

      
  );
}

export default Trainers;