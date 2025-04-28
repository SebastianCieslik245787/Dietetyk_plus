function firstStep() {
    return (
        <>
            <div className="register-step-title">
                Krok 1
            </div>
            <div className="register-step-items-first-step">
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>E-mail:
                    </div>
                    <input id="registerEmail" className="register-step-item-text-field" type="text"
                           placeholder="Wprowadź e-mail..."/>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Imię:
                    </div>
                    <input id="registerName" className="register-step-item-text-field" type="text"
                           placeholder="Wprowadź imię..."/>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Hasło:
                    </div>
                    <input id="registerPassword" className="register-step-item-text-field" type="password"
                           placeholder="Wprowadź hasło..."/>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Nazwisko:
                    </div>
                    <input id="registerSurname" className="register-step-item-text-field" type="text"
                           placeholder="Wprowadź nazwisko..."/>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Potwierdź hasło:
                    </div>
                    <input id="registerConfirmpassword" className="register-step-item-text-field" type="password"
                           placeholder="Powtórz hasło..."/>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Nr telefonu:
                    </div>
                    <input id="registerPhoneNumber" className="register-step-item-text-field" type="text"
                           placeholder="Wprowadź numer telefonu..."/>
                </div>
            </div>
        </>
    )
}

export default firstStep;