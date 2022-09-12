import React from 'react';
import "./Footer.css";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
   
    return (
        <footer className="footer">
            <div className="footer-container">
                <strong className="footer-subheading">Följ oss!</strong>
                <div className="footer-icons">
                    <FaFacebook className="footer-icon"/>
                    <FaInstagram className="footer-icon"/>
                    <FaTwitter className="footer-icon"/>
                    <FaLinkedin className="footer-icon"/>
                </div>
                <div className="footer-sub location">
                <strong className="footer-subheading">Kontakt oss</strong>
                   
                
                </div>
                <div className="alt-location">
                    <strong className="footer-subheading">Kontakt oss</strong>
                    
                </div>
                <span className="footer-desc">
                    Telefon: 070-111 22 33
               <div> E-post: info@sportix.se</div>

                Pusterviksgatan 3
            413 01
            Göteborg
                        <br/>
                     
                    </span>

                <div className="wrapper">
                <div className="footer-sub-start">
                    <strong className="footer-subheading">Startsida</strong>
                   
                </div>
              <div className="footer-sub-persion">
                    <strong className="footer-subheading">Personal</strong>
                   
                </div>
                
                <div className="footer-sub-bok">
                    <strong className="footer-subheading">Boka pass</strong>
                    
                </div>
                <div className="footer-sub-web">
                    <strong className="footer-subheading">Webbshop</strong>
                    
                    </div>
                    <div className="footer-sub-mina">
                    
                    <strong className="footer-subheading">Mina Sidor</strong>
                </div>
              </div>
              
                
            </div>
        </footer>
    )
}

export default Footer