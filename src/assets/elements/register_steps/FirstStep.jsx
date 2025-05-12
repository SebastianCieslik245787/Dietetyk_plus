import RegisterInputText from "./RegisterInputText.jsx";

function FirstStep({ formData, setFormData }) {

    return (
        <>
            <div className="register-step-title">
                Krok 1
            </div>
            <div className="register-step-items-first-step">
                <RegisterInputText
                    value={formData.email}
                    setFormData={setFormData}
                    type="text"
                    label="Email:"
                    required={true}
                    id="email"
                    placeHolder="Wprowadź e-mail..."
                />
                <RegisterInputText
                    value={formData.name}
                    setFormData={setFormData}
                    type="text"
                    label="Imię:"
                    required={true}
                    id="name"
                    placeHolder="Wprowadź imię..."
                />
                <RegisterInputText
                    value={formData.password}
                    setFormData={setFormData}
                    type="password"
                    label="Hasło:"
                    required={true}
                    id="password"
                    placeHolder="Wprowadź hasło..."
                />
                <RegisterInputText
                    value={formData.surname}
                    setFormData={setFormData}
                    type="text"
                    label="Nazwisko:"
                    required={true}
                    id="surname"
                    placeHolder="Wprowadź nazwisko..."
                />
                <RegisterInputText
                    value={formData.confirmPassword}
                    setFormData={setFormData}
                    type="password"
                    label="Potwierdź hasło:"
                    required={true}
                    id="confirmPassword"
                    placeHolder="Powtórz hasło:"
                />
                <RegisterInputText
                    value={formData.phone}
                    setFormData={setFormData}
                    type="text"
                    label="Nr telefonu:"
                    required={true}
                    id="phone"
                    placeHolder="Wprowadź numer telefonu..."
                />
            </div>
        </>
    )
}

export default FirstStep;