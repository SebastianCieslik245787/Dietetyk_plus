import RegisterInputText from "./RegisterInputText.jsx";

function FirstStep({ formData, setFormData }) {

    return (
        <>
            <div className="register-step-title">
                Krok 1
            </div>
            <div className="register-step-items-first-step">
                <RegisterInputText
                    value={formData.registerEmail}
                    setFormData={setFormData}
                    type="text"
                    label="Email:"
                    required={true}
                    id="registerEmail"
                    placeHolder="Wprowadź e-mail..."
                />
                <RegisterInputText
                    value={formData.registerName}
                    setFormData={setFormData}
                    type="text"
                    label="Imię:"
                    required={true}
                    id="registerName"
                    placeHolder="Wprowadź imię..."
                />
                <RegisterInputText
                    value={formData.registerPassword}
                    setFormData={setFormData}
                    type="password"
                    label="Hasło:"
                    required={true}
                    id="registerPassword"
                    placeHolder="Wprowadź hasło..."
                />
                <RegisterInputText
                    value={formData.registerSurname}
                    setFormData={setFormData}
                    type="text"
                    label="Nazwisko:"
                    required={true}
                    id="registerSurname"
                    placeHolder="Wprowadź nazwisko..."
                />
                <RegisterInputText
                    value={formData.registerConfirmpassword}
                    setFormData={setFormData}
                    type="password"
                    label="Potwierdź hasło:"
                    required={true}
                    id="registerConfirmpassword"
                    placeHolder="Powtórz hasło:"
                />
                <RegisterInputText
                    value={formData.registerPhoneNumber}
                    setFormData={setFormData}
                    type="text"
                    label="Nr telefonu:"
                    required={true}
                    id="registerPhoneNumber"
                    placeHolder="Wprowadź numer telefonu..."
                />
            </div>
        </>
    )
}

export default FirstStep;