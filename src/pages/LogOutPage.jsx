import "../style/LogoutPage.css"
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

function LogOutPage(){
    const navigate = useNavigate();
    const [, cookies, removeCookie] = useCookies(["User-Key", "User-Data"]);
    const handleBackToHomePageClick = () => {
        navigate("/home");
    }
    removeCookie("User-Data");
    fetch(
        "/api/logout",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["User-Key"]
            }
        }
    ).then(r => {
        if (r.status === 200) {
            console.log("Wylogowano pomyślnie");
        } else {
            console.log("Błąd podczas wylogowywania");
        }
    })
    /*Nie ma znaczenia czy wylogowanie się faktycznie powiodło bo użytkownik i tak nie ma dostępu do aplikacji*/
    removeCookie("User-Key");

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