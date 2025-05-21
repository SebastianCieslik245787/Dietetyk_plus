import "../style/RecoverPassword.css"
import {useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import RecoverPasswordInput from "../assets/elements/recover_password/RecoverPasswordInput.jsx";
import VerificationCode from "../assets/elements/recover_password/VerificationCode.jsx";
import {
    sendPasswordNewPassword,
    sendPasswordRecoveryEmail,
    sendVerificationCode
} from "../scripts/sendData/sendPasswordRecoveryData.js";

function RecoverPassword() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['User-Key']);
    const [data, setData] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const [activeStep, setActiveStep] = useState(0);

    const navigateToStep = () => {
        navigate("/home")
    };

    const [code, setCode] = useState(new Array(6).fill(""));
    const handleSubmit = (fullCode) => {
        console.log("Wprowadzony kod:", fullCode);
        sendVerificationCode(fullCode, data.email).then(
            resp => {
                switch(resp.status) {
                    case 200:
                        setCookie('User-Key', resp.headers.get("Authorization"), { path: '/' });
                        setActiveStep(2);
                        break;
                    case 400:
                        setErrors({
                            ...errors,
                            email: "Niepoprawny kod weryfikacyjny"
                        });
                        break;
                    case 404:
                        setErrors({
                            ...errors,
                            email: "Nie znaleziono użytkownika"
                        });
                        break;
                    default:
                        setErrors({
                            ...errors,
                            email: "Wystąpił nieznany błąd"
                        });
                }
            }
        )
    };

    return (
        <div className="recover-password-container">
            <div className="recover-password-panel">
                <div className="recover-password-header">
                    {activeStep !== 3 ? "Odzyskiwanie hasła" : ""}
                </div>
                <div className={`step ${activeStep === 0 ? "visible" : ''}`}>
                    <RecoverPasswordInput
                        data={data.email}
                        setData={setData}
                        placeHolder={"Wpisz e-mail..."}
                        name={'email'}
                        error={errors.email}
                    />
                    <div className={`recover-password-next-button ${data.email !== '' ? "visible" : ""}`}
                         onClick={() => {
                             sendPasswordRecoveryEmail(data.email)
                                 .then(resp => {
                                     switch(resp.status) {
                                            case 200:
                                                setActiveStep(1);
                                                break;
                                            case 400:
                                                setErrors({
                                                    ...errors,
                                                    email: "Niepoprawny adres e-mail"
                                                });
                                                break;
                                            case 404:
                                                setErrors({
                                                    ...errors,
                                                    email: "Nie znaleziono użytkownika"
                                                });
                                                break;
                                            default:
                                                setErrors({
                                                    ...errors,
                                                    email: "Wystąpił nieznany błąd"
                                                });
                                     }
                                 })
                         }}>
                        Dalej
                    </div>
                </div>
                <div className={`step ${activeStep === 1 ? "visible" : ''}`}>
                    <div className="recover-password-label">
                        Kod weryfikacjyny:
                    </div>
                    <VerificationCode
                        data={code}
                        setData={setCode}
                        handleSubmit={handleSubmit}
                    />
                </div>
                <div className={`step ${activeStep === 2 ? "visible" : ''}`} style={{marginTop: "-10%"}}>
                    <RecoverPasswordInput
                        data={data.password}
                        setData={setData}
                        placeHolder={"Wpisz nowe hasło..."}
                        name={'password'}
                        error={errors.password}
                    />
                    <RecoverPasswordInput
                        data={data.passwordConfirmation}
                        setData={setData}
                        placeHolder={"Potwierdz hasło..."}
                        name={'passwordConfirmation'}
                        error={errors.passwordConfirmation}
                    />
                    <div className={`recover-password-next-button visible`} style={{marginTop: "1%"}}
                         onClick={() => {
                                if (data.password !== data.passwordConfirmation) {
                                    setErrors({
                                        ...errors,
                                        passwordConfirmation: "Hasła nie są takie same"
                                    });
                                } else {
                                    setErrors({
                                        ...errors,
                                        passwordConfirmation: ""
                                    });
                                }
                                sendPasswordNewPassword(cookies['User-Key'], data.password)
                                    .then(resp => {
                                        switch(resp.status) {
                                            case 200:
                                                setActiveStep(3);
                                                resp.json().then(data => {
                                                    console.log(data);
                                                    localStorage.setItem("User-Data", JSON.stringify(data));
                                                })
                                                break;
                                            case 400:
                                                setErrors({
                                                    ...errors,
                                                    password: "Niepoprawne hasło"
                                                });
                                                break;
                                            case 404:
                                                setErrors({
                                                    ...errors,
                                                    password: "Nie znaleziono użytkownika"
                                                });
                                                break;
                                            default:
                                                setErrors({
                                                    ...errors,
                                                    password: "Wystąpił nieznany błąd"
                                                });
                                        }
                                    })
                            }
                         }>
                        Dalej
                    </div>
                </div>
                <div className={`step ${activeStep === 3 ? "visible" : ''}`} style={{marginTop: "-5%"}}>
                    <div className="recover-password-message">
                        Pomyślnie zmieniono hasło
                    </div>
                    <div className={'recover-password-home-page'} onClick={navigateToStep}>
                        Powrót do strony głównej
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecoverPassword