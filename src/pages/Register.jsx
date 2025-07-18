import "../style/Register.css"

import FirstStep from "../assets/elements/register/FirstStep.jsx"
import SecondStep from "../assets/elements/register/SecondStep.jsx"
import ThirdStep from "../assets/elements/register/ThirdStep.jsx"
import FourthStep from "../assets/elements/register/FourthStep.jsx"
import FifthStep from "../assets/elements/register/FifthStep.jsx"

import arrows from '../images/icons/arrows_right.png'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    validateFifthStep,
    validateFirstStep,
    validateSecondStep,
    validateThirdStep
} from "../scripts/validateData/validateRegisterUtils.js";
import {sendRegisterData} from "../scripts/sendData/sendRegisterData.js";
import {emptyRegister} from "../data/EmptyListsData.js";

function Register() {

    const navigate = useNavigate();

    const [step, setStep] = useState(1);

    const [animationClass, setAnimationClass] = useState('fade-in');

    const [formData, setFormData] = useState(emptyRegister);

    const handleAccountCreatedClick = () => {
        sendRegisterData(formData);
        navigate("/account-created");
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return <FirstStep formData={formData} setFormData={setFormData}/>;
            case 2:
                return <SecondStep formData={formData} setFormData={setFormData}/>;
            case 3:
                return <ThirdStep formData={formData} setFormData={setFormData}/>;
            case 4:
                return <FourthStep formData={formData} setFormData={setFormData}/>;
            case 5:
                return <FifthStep formData={formData} setFormData={setFormData}/>;
        }
    }

    const handleNext = () => {
        switch (step) {
            case 1:
                if (!validateFirstStep(formData)) return;
                break
            case 2:
                if (!validateSecondStep(formData)) return;
                break;
            case 3:
                if (!validateThirdStep(formData)) return;
                break;
            case 5:
                if (!validateFifthStep(formData)) return;
                handleAccountCreatedClick();
                break;
        }

        setAnimationClass('fade-out');
        setTimeout(() => {
            setStep(prev => prev + 1);
            setAnimationClass('fade-in');
        }, 400);
    }

    const handleBack = () => {
        setAnimationClass('fade-out');
        setTimeout(() => {
            setStep(prev => (prev > 1 ? prev - 1 : 1));
            setAnimationClass('fade-in');
        }, 400);
    }

    return (
        <>
            <div className="register-container">
                <div className="register-content">
                    <div className="register-header">
                        <p className="register-header-text">
                            Rejestracja
                        </p>
                    </div>
                    <div className="register-requirement">
                        <p className="register-requirement-text">
                            * - Pole wymagane
                        </p>
                    </div>
                    <div className={`register-step ${animationClass}`}>
                        {renderStepContent()}
                    </div>
                    <div className="register-navigation">
                        <div className="register-navigation-undo">
                            <div
                                className={`register-navigation-button button-undo ${step === 1 ? "disable-button" : ""}`}
                                onClick={handleBack}>
                                <img src={`${arrows}`} alt=""/>
                                <p className="register-navigation-button-text">Powrót</p>
                            </div>
                        </div>
                        <div className="register-navigation-steps">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className={`register-navigation-steps-item ${step === i ? "register-navigation-steps-item-active" : ""}`}
                                />
                            ))}
                        </div>
                        <div className="register-navigation-next">
                            <div className="register-navigation-button button-next" onClick={handleNext}>
                                <p className="register-navigation-button-text button-next-text">Dalej</p>
                                <img src={`${arrows}`} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register