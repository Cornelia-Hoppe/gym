import React, { useState } from "react";
import style from "./HomeGallery.module.css";
import { imgs } from "./GalleryImgs";

const HomeGallery = () => {

  const [sliderData, setSliderData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };
  const PrevBtn = () => {
    if (sliderData.id == 0) {
      const lastImg = imgs[3];
      setSliderData(lastImg);
    } else {
      const nextImg = imgs[sliderData.id - 1];
      setSliderData(nextImg);
    }
  };
  const NextBtn = () => {
    if (sliderData.id == 3) {
      const firstImg = imgs[0];
      setSliderData(firstImg);
    } else {
      const prevImg = imgs[sliderData.id + 1];
      setSliderData(prevImg);
    }
  };
  return (
    <>
      <div className={style.GallerySection}>
        <div className={style.GalleryInfo}>
          <h3>Galleri</h3>
          <p>Kolla in bilder på våra lokaler och vår utrustning!</p>
        </div>
        <div onClick={PrevBtn} className={style.prevBtn}>
          <p>Förra</p>
        </div>

        <div onClick={NextBtn} className={style.nextBtn}>
          <p>Nästa</p>
        </div>
        <img src={sliderData.value} height="180" width="300" />

        <div className={style.flexrow}>
          {imgs.map((data, i) => (
            <img
              key={data.id}
              src={data.value}
              onClick={() => handleClick(i)}
              height="70"
              width="100"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeGallery;
