import "../style/AccountCreated.css"

import accountCreatedIcon from "../images/icons/sucessfull_register_icon.png"
import {useNavigate} from "react-router-dom";

/**
 * Strona informująca o pomyślej rejestraci, po pomyślnym przejściu wszystkich kroków rejestracji {@link Register}.
 *
 * @see Register
 *
 * @returns {JSX.Element} - Strona informująca o pomyślej rejestraci.
 */
function AccountCreated(){
    /**
     * Hook do nawigacji między stronami aplikacji. W tym wypadku do strony głównej serwisu.
     */
    const navigate = useNavigate();

    return (
        <>
            <div className="account-created-container">
                <div className="account-created-content">
                    <div className="account-created-icon">
                        <img src={`${accountCreatedIcon}`} alt=""/>
                    </div>
                    <div className="account-created-text">
                        Rejestracja pomyślna!
                    </div>
                    <div className="account-created-bottom">
                        <span className="account-created-link" onClick={() => navigate("/home")}>Powrót do strony głównej</span>
                    </div>
                </div>
            </div>
        </>
    )
} export default AccountCreated;