import checkIcon from "../../../images/icons/check_icon.png"

function FifthStep({formData, setFormData}) {
    const handleCheckboxChange = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <>
            <div className="register-step-title">
                Krok 5
            </div>
            <div className="register-step-items-fifth-step">
                <div className="register-step-fifth-items">
                    <div className="register-step-fifth-item" onClick={() => handleCheckboxChange('dataProcessingConsent')}>
                        <div className="register-step-fifth-item-check-box">
                            {formData.dataProcessingConsent && <img src={checkIcon} alt="" style={{ visibility: formData.dataProcessingConsent ? "visible" : "hidden" }}/>}
                        </div>
                        <div className="register-step-fifth-item-required">
                            *
                        </div>
                        <div className="register-step-fifth-item-text">
                            Wyrażam zgode na przetwarzanie moich danych osobowych, w celu rejestracji  oraz świadczenia usług związanych z korzystaniem z naszej platformy.
                        </div>
                    </div>
                    <div className="register-step-fifth-item" onClick={() => handleCheckboxChange('termsConsent')}>
                        <div className="register-step-fifth-item-check-box">
                            {formData.termsConsent && <img src={checkIcon} alt="" style={{ visibility: formData.termsConsent ? "visible" : "hidden" }}/>}
                        </div>
                        <div className="register-step-fifth-item-required">
                            *
                        </div>
                        <div className="register-step-fifth-item-text">
                            Oświadczam że zapoznałem się z treścią <span className="statute-link">regulaminu</span> naszej platformy.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} export default FifthStep;