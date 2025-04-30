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
                    value={formData.registerBirthDate}
                    setFormData={setFormData}
                    type="date"
                    label="Data urodzenia:"
                    required={true}
                    id="registerBirthDate"
                />
                <RegisterInputText
                    value={formData.registerHeight}
                    setFormData={setFormData}
                    type="text"
                    label="Wzrost (cm):"
                    required={true}
                    id="registerHeight"
                    placeHolder="Wprowadź swój wzrost.."
                />
                <RegisterSelect
                    id="registerGender"
                    setFormData={setFormData}
                    options={genders}
                    placeHolder="Wybierz płeć"
                    value={formData.registerGender}
                    required={true}
                    label="Płeć:"
                />
                <RegisterInputText
                    value={formData.registerWeight}
                    setFormData={setFormData}
                    type="text"
                    label="Waga (kg):"
                    required={true}
                    id="registerWeight"
                    placeHolder="Wprowadź swoją wage..."
                />
            </div>
        </>
    )
}

export default SecondStep;
