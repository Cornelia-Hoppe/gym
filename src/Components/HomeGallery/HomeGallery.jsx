import React from 'react'
import style from "./HomeGallery.module.css";



const HomeGallery = () => {
  return (
    <>
        <div className={style.GallerySection}>
            <div className={style.GalleryInfo}> 
              <h3>Galleri</h3>
              <p>Kolla in bilder på våra lokaler och vår utrustning!</p>
             </div>
        
        </div>
    </>    
    );
  };
  
  export default HomeGallery;