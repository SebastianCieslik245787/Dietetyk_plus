import "../style/AccountCreated.css"

import accountCreatedIcon from "../images/icons/sucessfull_register_icon.png"
import {useNavigate} from "react-router-dom";

function AccountCreated(){
    const navigate = useNavigate();

    const handleBackToHomeClick = () => {
        navigate("/home");
    };

    return (
        <>
            <div className="account-created-container">
                <div className="account-created-content">
                    <div className="account-created-icon">
                        <img src={accountCreatedIcon} alt=""/>
                    </div>
                    <div className="account-created-text">
                        Rejestracja pomyślna!
                    </div>
                    <div className="account-created-bottom">
                        <span className="account-created-link" onClick={handleBackToHomeClick}>Powrót do strony głównej</span>
                    </div>
                </div>
            </div>
        </>
    )
} export default AccountCreated;