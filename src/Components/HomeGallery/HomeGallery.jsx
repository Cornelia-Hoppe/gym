import React, { useState } from "react";
import style from "./HomeGallery.module.css";
import { imgs } from "./GalleryImgs";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
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
        <div className={style.galleryImg}>
        <div onClick={PrevBtn} className={style.prevBtn}>
          <MdArrowBackIosNew />
        </div>

        <img src={sliderData.value} height="300vh" width="100%" />

        <div onClick={NextBtn} className={style.nextBtn}>
          < MdArrowForwardIos />
        </div>
        </div>
        <div className={style.flexrow}>
          {imgs.map((data, i) => (
            <div className={data === sliderData ? style.selectedImg : style.nonSelected }>
            <img
              key={data.id}
              src={data.value}
              onClick={() => handleClick(i)}
              height="50vh"
              width="100%"
            /></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeGallery;
