import "../style/Login.css"

function LoginPage(){
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
                        <form action="">
                            <div className="login-field-label">
                                E-mail:
                            </div>
                            <input id="email" className="login-field" type="text" placeholder="Wprowadz e-mail" />
                            <div className="login-field-label">
                                Hasło:
                            </div>
                            <input id="password" className="login-field login-field-last" type="text" placeholder="Wprowadz hasło" />
                        </form>
                    </div>
                    <div className="login-register">
                        <p className="login-register-text">
                            Nie masz jeszcze konta? <a href="" className="register-link">Zajerestruj się</a>
                        </p>
                    </div>
                    <div className="login-button">
                        <p className="login-button-text">
                            Zaloguj
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
} export default LoginPage;