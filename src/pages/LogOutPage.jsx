import "../style/LogoutPage.css"
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useConnection} from "../assets/ConnectionProvider.jsx";
import Error from "../assets/elements/error_page/Error.jsx";

function LogOutPage() {
    const {isConnected} = useConnection();

    const navigate = useNavigate();

    const [, cookies, removeCookie] = useCookies(["User-Key"]);

    // Kopia, aby móc usunąć przed wysłaniem żądania, tak aby nie musieć czekać na odpowiedź serwera
    const temp = cookies["User-Key"];
    removeCookie("User-Key");
    localStorage.removeItem("User-Data");

    fetch(
        "/api/logout",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": temp
            }
        }
    ).then(r => {
        if (r.status === 200) {
            console.log("Wylogowano pomyślnie");
        } else {
            console.log("Błąd podczas wylogowywania");
        }
    }).catch(() => {
        console.log("Błąd sieciowy podczas wylogowywania");
    })

    return (
        isConnected ? (
            <>
                <div className="logout-coinatiner">
                    <div className="logout-panel">
                        <div className="logout-information">
                            Pomyślnie Wylogowano...
                        </div>
                        <div className="logout-back-to-homepage">
                            <p onClick={() => navigate("/home")}>Powrót do strony głównej</p>
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

export default LogOutPage;