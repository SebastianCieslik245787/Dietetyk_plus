import "../style/Login.css"
import {useNavigate} from "react-router-dom";
import {Login} from "../scripts/login.js"
import {useCookies} from "react-cookie";

function LoginPage() {
    const navigate = useNavigate();
    const [, setCookie,] = useCookies([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        Login(setCookie, navigate);
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
                    <form onSubmit={handleSubmit}>
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
                                    Nie masz jeszcze konta? <a href="" onClick={() => navigate("/register")}
                                                               className="register-link">Zajerestruj
                                    się</a>
                                    <br/>
                                    <br/>
                                    Nie pamiętasz hasła? <a href="" onClick={() => navigate("/recover-password")}
                                                            className="register-link">Odzyskaj hasło</a>
                                </p>
                            </div>
                        </div>
                        <button type="submit" className="login-button">
                            <p className="login-button-text">
                                Zaloguj
                            </p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;