import NavBar from "../assets/NavigationBar.jsx";
import logo from "../images/logo.webp";
import phoneIcon from "../images/icons/phone_number_icon.png";
import emailIcon from "../images/icons/email_icon.png";

import "../style/Contact.css"


function Contact(){
    return (
        <>
            {NavBar()}
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-header">
                        Chcesz się z nami skontaktować?
                    </div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <img src={phoneIcon} alt=""/>
                            <p className="contact-item-text">
                                +48 123 456 789
                            </p>
                        </div>
                        <div className="contact-item">
                            <img src={emailIcon} alt=""/>
                            <p className="contact-item-text">
                                dietetyk@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <img src={logo} alt=""/>
            </div>
        </>
    )
} export default Contact