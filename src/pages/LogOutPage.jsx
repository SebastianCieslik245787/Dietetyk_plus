import "../style/LogoutPage.css"
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

function LogOutPage(){
    const navigate = useNavigate();
    const [, , removeCookie] = useCookies(["User-Key"]);
    const handleBackToHomePageClick = () => {
        removeCookie("User-Key");
        removeCookie("User-Data");
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