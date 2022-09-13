import React from 'react';
import {  Link } from 'react-router-dom';
import "./Footer.css";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Footer()  {
   
    return (
        <footer className='footer'>
            <div className="footer-container" >
           
                <ul>
                   
            <div className="wrapper">
                            <li className="footer-sub-start" path='/'>Startsida</li>
                            <li className="footer-sub-persion" >Personal</li>
                
                <li className="footer-sub-bok">Boka pass</li>
                    <li className="footer-sub-web">Webbshop</li>
                        <li className="footer-sub-mina">Mina Sidor</li>
                       
                        </div>
                    </ul>
                    
                        

                

            {/* ------------------------------ footer social-media ------------------------- */}
            
            <strong className="footer-subheading">Följ oss!</strong>
                <div className="footer-icons">
                <FaInstagram className="footer-icon-in"/>
                    <FaFacebook className="footer-icon-fa"/>
                    
                    <FaTwitter className="footer-icon-tw"/>
                    <FaLinkedin className="footer-icon-li"/>
                </div>

                {/* ------------------------------ footer Kontakt ------------------------- */}
                <div className="footer-sub location">
                <strong className="footer-contact">Kontakta oss</strong> 
                   
                
                </div>
                
                <span className="footer-desc">
                    Telefon: 070-111 22 33
               <div> E-post: info@sportix.se</div>

                Pusterviksgatan 3
            413 01
            Göteborg
                        <br/>
                     
                    </span>
                   
            </div>
            
        </footer>
        
    )
}

export default Footer;