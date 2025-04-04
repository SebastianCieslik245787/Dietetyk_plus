import "../style/NavigationBar.css"

import logo from "../images/logo.webp"
import loginIcon from "../images/login_icon.png"

function NavigationBar() {
    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="item">
                    <p className="item-text">
                        Oferta
                    </p>
                </div>
                <div className="item">
                    <p className="item-text">
                        O nas
                    </p>
                </div>
                <div className="item item-last">
                    <p className="item-text">
                        Kontakt
                    </p>
                </div>
                <div className="login">
                    <p className="login-text item-text">
                        Zaloguj się
                    </p>
                    <img src={loginIcon} alt="login-icon"/>
                </div>
            </div>
        </>
    )
} export default NavigationBar