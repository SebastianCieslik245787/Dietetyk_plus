import RegisterInputText from "./RegisterInputText.jsx";
import RegisterSelect from "./RegisterSelect.jsx";
import {genders} from "../../../data/RegisterConsts.js";

function SecondStep({formData, setFormData}) {
    return (
        <>
            <div className="register-step-title">
                Krok 2
            </div>
            <div className="register-step-items-second-step">
                <RegisterInputText
                    value={formData.birthdate}
                    setFormData={setFormData}
                    type="date"
                    label="Data urodzenia:"
                    required={true}
                    id="birthdate"
                    error="birthDateError"
                />
                <RegisterInputText
                    value={formData.height}
                    setFormData={setFormData}
                    type="text"
                    label="Wzrost (cm):"
                    required={true}
                    id="height"
                    placeHolder="Wprowadź swój wzrost.."
                    error="heightError"
                />
                <RegisterSelect
                    id="gender"
                    setFormData={setFormData}
                    options={genders}
                    placeHolder="Wybierz płeć"
                    value={formData.gender}
                    required={true}
                    label="Płeć:"
                    error="genderError"
                    labelTextType={"normal"}
                />
                <RegisterInputText
                    value={formData.weight}
                    setFormData={setFormData}
                    type="text"
                    label="Waga (kg):"
                    required={true}
                    id="weight"
                    placeHolder="Wprowadź swoją wage..."
                    error="weightError"
                />
            </div>
        </>
    )
}

export default SecondStep;
