import React, { useState, useEffect} from 'react'
import style from "./Arrow.module.css"
import {AiOutlineArrowUp} from "react-icons/ai"
export default function ScrollToTop() {

    const [Arrow, setArrow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setArrow(true);
        } else {
          setArrow(false);
        }
      });
    }, []);
    
    const scrollBtn= () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };

  return (
    <>
        {Arrow && (
            <i className={style.Arrow} onClick={scrollBtn}><AiOutlineArrowUp /></i>
        )}
    </>
  )
}
