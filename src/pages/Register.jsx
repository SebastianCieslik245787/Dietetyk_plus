import "../style/Register.css"

import firstStep from "../scripts/register_steps/firstStep.jsx"
import secondStep from "../scripts/register_steps/secondStep.jsx"
import thirdStep from "../scripts/register_steps/thirdStep.jsx"
import fourthStep from "../scripts/register_steps/fourthStep.jsx"
import fifthStep from "../scripts/register_steps/fifthStep.jsx"

import arrows from '../images/icons/arrows_right.png'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [animationClass, setAnimationClass] = useState('fade-in');

    const handleAccountCreatedClick = () => {
        navigate("/account-created");
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return firstStep();
            case 2:
                return secondStep();
            case 3:
                return thirdStep();
            case 4:
                return fourthStep();
            case 5:
                return fifthStep();
        }
    }

    const handleNext = () => {
        if (step === 5) {
            handleAccountCreatedClick();
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
                                <img src={arrows} alt=""/>
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
                                <img src={arrows} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register