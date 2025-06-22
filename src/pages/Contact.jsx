import logo from "../images/logo.webp";
import phoneIcon from "../images/icons/phone_number_icon.png";
import emailIcon from "../images/icons/email_icon.png";

import "../style/Contact.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import {useConnection} from "../assets/ConnectionProvider.jsx";
import Error from "../assets/elements/error_page/Error.jsx";

/**
 * Strona z informacjami o kontakcie z właścicielami serwisu.
 *
 * @see NavigationBar
 *
 * @returns {JSX.Element} - Strona z informacjami o kontakcie z właścicielami serwisu
 */
function Contact() {
    const {isConnected} = useConnection();

    return (
        isConnected ? (
            <>
                <NavigationBar/>
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-header">
                            Chcesz się z nami skontaktować?
                        </div>
                        <div className="contact-items">
                            <div className="contact-item">
                                <img src={`${phoneIcon}`} alt=""/>
                                <p className="contact-item-text">
                                    +48 123 456 789
                                </p>
                            </div>
                            <div className="contact-item">
                                <img src={`${emailIcon}`} alt=""/>
                                <p className="contact-item-text">
                                    dietetyk@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={`${logo}`} alt=""/>
                </div>
            </>) : (
            <Error
                errorCode={"Error 404"}
                errorMessage={"Nie znaleziono strony lub zasobu, którego szukasz."}
            />
        )
    )
}

export default Contact