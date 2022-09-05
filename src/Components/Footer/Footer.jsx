import React from 'react';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-container">
                <strong className="footer-subheading">JOIN </strong>
                <div className="footer-icons">
                    
                </div>
                <div className="footer-sub location">
                <strong className="footer-subheading">Location</strong>
                    <strong className="footer-desc">216</strong>
                    <strong className="footer-desc">Monday Through Thursday </strong>
                    <strong className="footer-desc">Friday </strong>
                </div>
                <div className="alt-location">
                    <strong className="footer-subheading">Location</strong>
                    <span className="footer-desc">
                        152
                        <br/>
                        Monday through Thursday (6AM to 8Pm). Friday (6AM to 6Pm)
                    </span>
                </div>

            <div className="wrapper">
              <div className="footer-sub">
                    <strong className="footer-subheading">Community</strong>
                    <small>Hs</small>
                    <small>S</small>
                    <small>B</small>
                </div>
                
                <div className="footer-sub">
                    <strong className="footer-subheading">Services</strong>
                    <small>Hej</small>
                    <small> Hej</small>
                    <small> hej</small>
                </div>
                <div className="footer-sub">
                    <strong className="footer-subheading">Privacy Policy</strong>
                    <strong className="footer-subheading">Terms of Service</strong>
                </div>
              </div>
              
                <span className="footer-subheading footer-copy"> {currentYear}</span>
            </div>
        </footer>
    )
}

export default Footer