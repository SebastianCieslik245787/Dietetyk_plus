function secondStep() {
    return (
        <>
            <div className="register-step-title">
                Krok 2
            </div>
            <div className="register-step-items-second-step">
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Data urodzenia:
                    </div>
                    <input id="registerBirthDate" className="register-step-item-text-field" type="date"/>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Wzrost (cm):
                    </div>
                    <input id="registerEmail" className="register-step-item-text-field" type="text"
                           placeholder="Wprowadź swój wzrost.."/>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Płeć:
                    </div>
                    <select id="registerGender" className="register-step-item-text-field">
                        <option value="" disabled selected>Wybierz płeć</option>
                        <option value="Male">Mężczyzna</option>
                        <option value="Female">Kobieta</option>
                    </select>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label">
                        <span className="register-step-item-requirement">*</span>Waga (kg):
                    </div>
                    <input id="registerWeight" className="register-step-item-text-field" type="text"
                           placeholder="Wprowadź swoją wage..."/>
                </div>
            </div>
        </>
    )
}

export default secondStep;
