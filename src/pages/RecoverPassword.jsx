import "../style/RecoverPassword.css"
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

function RecoverPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [activeStep, setActiveStep] = useState(0);

    const navigateToStep = () => {
        navigate("/home")
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const [code, setCode] = useState(new Array(6).fill(""));
    const inputsRef = useRef([]);

    const handleChangeCode = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }

        if (newCode.every(char => char !== "")) {
            handleSubmit(newCode.join(""));
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && code[index] === "" && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (fullCode) => {
        console.log("Wprowadzony kod:", fullCode);
        setActiveStep(2)
    };


    return (
        <div className="recover-password-container">
            <div className="recover-password-panel">
                <div className="recover-password-header">
                    {activeStep !== 3 ? "Odzyskiwanie hasła" : ""}
                </div>
                <div className={`step ${activeStep === 0 ? "visible" : ''}`}>
                    <input value={email} onChange={handleChange} type="text" className={"recover-password-input"}
                           placeholder="Wprowadz e-mail..."/>
                    <div className={`recover-password-next-button ${email !== '' ? "visible" : ""}`}
                         onClick={() => setActiveStep(1)}>
                        Dalej
                    </div>
                </div>
                <div className={`step ${activeStep === 1 ? "visible" : ''}`}>
                    <div className="recover-password-label">
                        Kod weryfikacjyny:
                    </div>
                    <div className={"recover-password-code"}>
                        {code.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                className="recover-password-input-code"
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChangeCode(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => inputsRef.current[index] = el}
                            />
                        ))}
                    </div>
                </div>
                <div className={`step ${activeStep === 2 ? "visible" : ''}`} style={{marginTop: "-10%"}}>
                    <input value={email} onChange={handleChange} type="text" className={"recover-password-input"}
                           placeholder="Wprowadz nowe hasło"/>
                    <input value={email} onChange={handleChange} type="text" className={"recover-password-input"}
                           placeholder="Potwierdz hasło..."/>
                    <div className={`recover-password-next-button visible`} style={{marginTop: "0"}}
                         onClick={() => setActiveStep(3)}>
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