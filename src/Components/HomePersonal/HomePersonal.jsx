import React from "react";
import style from "./HomePersonal.module.css";
import personal1 from "../../images/personal1.jpg";
import personal2 from "../../images/personal2.jpg";
import personal3 from "../../images/personal3.jpg";
import personal4 from "../../images/personal4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const HomePersonal = () => {
  return (
    <>
      <div className={style.PersonalSection}>
        <div className={style.HeaderPersonal}>
          <h3>Personal</h3>
        </div>
        <div className={style.PersonalButtons}>
          <CustomLink to="/staff">
            <LazyLoadComponent>
              <button
                className={style.persona1}
                style={{
                  backgroundImage: `url(${personal1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className={style.pesonaltext}>
                  <p>Ledning</p>
                </div>
              </button>

              <button
                className={style.persona2}
                style={{
                  backgroundImage: `url(${personal2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p>Tränare</p>
              </button>
              <button
                className={style.persona3}
                style={{
                  backgroundImage: `url(${personal3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p>Reception</p>
              </button>
              <button
                className={style.persona4}
                style={{
                  backgroundImage: `url(${personal4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p>Instruktörer</p>
              </button>
            </LazyLoadComponent>
          </CustomLink>
        </div>
      </div>
    </>
  );
};

export default HomePersonal;

function CustomLink({ to, ...props }) {
  return <Link to={to} {...props}></Link>;
}
