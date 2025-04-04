import '../style/MainPage.css'

import navBar from '../assets/NavigationBar.jsx'

import whyDietBackGround from "../images/why_diet_background.jpeg"
import ourOfferBackGround from "../images/our_offer_background.webp"
import typesOfDietBackGround from "../images/types_of_diet_background.jpg"
import phoneIcon from "../images/phone_number_icon.png"
import emailIcon from "../images/email_icon.png"

function MainPage() {
    return (
        <>
            <div className="main-container">
                {navBar()}
                <div className="why-diet-container">
                    <img src={whyDietBackGround} alt="Why Diet" />
                    <div className="why-diet-content">

                    </div>
                </div>
                <div className="header">
                    <p className="header-text">
                        Rodzaje diet
                    </p>
                </div>
                <div className="why-diet-container">
                    <img src={typesOfDietBackGround} alt="Why Diet" />
                </div>
                <div className="header">
                    <p className="header-text">
                        Nasza oferta
                    </p>
                </div>
                <div className="why-diet-container">
                    <img src={ourOfferBackGround} alt="Why Diet" />
                </div>
                <div className="header">
                    <p className="header-text">
                        Jak się z nami skontaktować?
                    </p>
                </div>
                <div className="contact-container">
                    <div className="contact-bar">
                        <p className="contact-text">
                            +48 123 456 789
                        </p>
                        <img src={phoneIcon} alt="phone-icon" />
                    </div>
                    <div className="contact-bar">
                        <p className="contact-text">
                            dietetyk@gmail.com
                        </p>
                        <img src={emailIcon} alt="email-icon" />
                    </div>
                </div>
            </div>
        </>
    )
} export default MainPage