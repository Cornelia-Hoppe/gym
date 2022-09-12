import React from 'react'
import style from "./HomeAbout.module.css";



const HomeAbout = () => {
  return (
    <>
        <div className={style.AboutSection}>
            <div className={style.AboutInfo}> 
                <h3>Om gymmet</h3>
                <p>Vi är ett team av mycket professionella personliga tränare och instruktörer med en mycket bred kunskap kring vad som blir bästa vägen fram för dig och för din hälsa. <br></br><br></br>Vårt gym & anläggning är inte som någon annan och vi gör allting för att din upplevelse ska bli så perfekt som möjligt. Vi prioriterar det som vi tror är viktigt för dig och för att du ska få ut mesta möjliga av ditt besök hos oss:</p>
            </div>
            <div className={style.AboutPerks}>
                <div className={style.perkOne}>
                    <p className={style.arrow}>-></p>
                    <div className={style.AboutBox}><p>Ett luftigt inrett gym centralt i Göteborg med allt du behöver.</p></div>
                </div>
                <div className={style.perkTwo}>
                    <p className={style.arrow}>-></p>
                    <div className={style.AboutBox}><p>Fullt utrustad med maskiner och övrig gymutrustning.</p></div>
                </div>
                <div className={style.perkThree}>
                    <p className={style.arrow}>-></p>
                    <div className={style.AboutBox}><p>En upplyftande och fräsch miljö som ger både energi och lugn</p></div>
                </div>
                <div className={style.perkFour}>
                    <p className={style.arrow}>-></p>
                    <div className={style.AboutBox}><p>Kompetent och hjälpsam personal som finns där för dig.</p></div>
                </div>
            </div>
            <div className={style.aboutEnd}>
                <p className={style.aboutEndOne}>Öppettider:</p>
                <p className={style.aboutEndTwo}>Måndag-söndag 07:00-21:00</p>
            </div>
        </div>
    </>    
    );
  };
  
  export default HomeAbout;