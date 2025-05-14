import "../../style/NavigationBar.css"
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.webp"
import loginIcon from "../../images/icons/login_icon.png"

function NavigationBar() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleAboutUsClick = () => {
        navigate("/about-us");
    };

    const handleHomePageClick = () => {
        navigate("/home");
    };

    const handleContactPageClick = () => {
        navigate("/contact");
    };

    const handleDietitiansPageClick = () => {
        navigate("/dietitians");
    };

    return (
        <>
            <div className="navbar-container">
                <div className="logo" onClick={handleHomePageClick}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="item" onClick={handleDietitiansPageClick}>
                    <p className="item-text">
                        Dietetycy
                    </p>
                </div>
                <div className="item" onClick={handleAboutUsClick}>
                    <p className="item-text">
                        O nas
                    </p>
                </div>
                <div className="item item-last" onClick={handleContactPageClick}>
                    <p className="item-text">
                        Kontakt
                    </p>
                </div>
                <div className="login" onClick={handleLoginClick}>
                    <p className="login-text item-text">
                        Zaloguj się
                    </p>
                    <img src={loginIcon} alt="login-icon"/>
                </div>
            </div>
        </>
    )
} export default NavigationBar