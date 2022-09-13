import React, { useState } from 'react';
import style from "./HomeGallery.module.css";
import img1 from "../../images/gallery1.jpg";
import img2 from"../../images/gallery2.jpg";
import img3 from"../../images/gallery3.jpg";
import img4 from"../../images/gallery4.jpg";






const HomeGallery = () => {
    const imgs=[
        {id:0,value:img1},
        {id:1,value:img2},
        {id:2,value:img3},
        {id:3,value:img4},
    ]

    const [sliderData,setSliderData]=useState(imgs[0])
    const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSliderData(slider);
}
  return (
    
    <>
        <div className={style.GallerySection}>
            <div className={style.GalleryInfo}> 
              <h3>Galleri</h3>
              <p>Kolla in bilder på våra lokaler och vår utrustning!</p>
             </div>
            <div className={style.prevBtn}><p>Förra</p></div>
            <div className={style.nextBtn}><p>Nästa</p></div>
            <img src={sliderData.value} height="180" width="300" />

            <div className={style.flexrow}>
            {
            imgs.map((data,i)=>
            <img key={data.id} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
            )
            }
            </div>
        </div>
    </>    
    );
  };
  
  export default HomeGallery;