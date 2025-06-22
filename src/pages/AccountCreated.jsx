import "../style/AccountCreated.css"

import accountCreatedIcon from "../images/icons/sucessfull_register_icon.png"
import {useNavigate} from "react-router-dom";
import {useConnection} from "../assets/ConnectionProvider.jsx";
import Error from "../assets/elements/error_page/Error.jsx";

/**
 * Strona informująca o pomyślej rejestraci, po pomyślnym przejściu wszystkich kroków rejestracji {@link Register}.
 *
 * @see Register
 *
 * @returns {JSX.Element} - Strona informująca o pomyślej rejestraci.
 */
function AccountCreated() {
    /**
     * Hook do nawigacji między stronami aplikacji. W tym wypadku do strony głównej serwisu.
     */
    const navigate = useNavigate();

    const {isConnected} = useConnection();

    return (
        isConnected ? (
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
            </>) : (
            <Error
                errorCode={"Error 404"}
                errorMessage={"Nie znaleziono strony lub zasobu, którego szukasz."}
            />
        )
    )
}

export default AccountCreated;