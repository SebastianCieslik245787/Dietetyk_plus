import "../style/Login.css"
import {useNavigate} from "react-router-dom";
import {Login} from "../scripts/login.js"
import {useCookies} from "react-cookie";

function LoginPage() {
    const navigate = useNavigate();
    const [, setCookie, ] = useCookies([]);

    const handleRegisterClick = () => {
        navigate("/register");
    };
    return (
        <>
            <div className="login-container">
                <div className="login-panel">
                    <div className="login-header">
                        <p className="login-header-text">
                            Logowanie
                        </p>
                    </div>
                    <div className="login-fields">
                        <div className="login-field-label">
                            E-mail:
                        </div>
                        <input id="email" className="login-field" type="text" placeholder="Wprowadz e-mail"/>
                        <div className="login-field-label">
                            Hasło:
                        </div>
                        <input id="password" className="login-field login-field-last" type="password"
                               placeholder="Wprowadz hasło"/>
                        <div className="login-error-label">
                            Błędny login lub hasło!
                        </div>
                        <div className="login-register">
                            <p className="login-register-text">
                                Nie masz jeszcze konta? <a href="" onClick={handleRegisterClick} className="register-link">Zajerestruj
                                się</a>
                            </p>
                        </div>
                    </div>
                    <div className="login-button" onClick={() => Login(setCookie, navigate)}>
                        <p className="login-button-text">
                            Zaloguj
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;