import "../style/LogoutPage.css"
import {useNavigate} from "react-router-dom";

function LogOutPage(){
    const navigate = useNavigate();

    const handleBackToHomePageClick = () => {
        navigate("/home");
    }

    return (
        <>
            <div className="logout-coinatiner">
                <div className="logout-panel">
                    <div className="logout-information">
                        Pomyślnie Wylogowano...
                    </div>
                    <div className="logout-back-to-homepage">
                        <p onClick={handleBackToHomePageClick}>Powrót do strony głównej</p>
                    </div>
                </div>
            </div>
        </>
    );
} export default LogOutPage;