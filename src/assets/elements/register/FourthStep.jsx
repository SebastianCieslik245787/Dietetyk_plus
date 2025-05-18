import RegisterChoiceElements from "./RegisterChoiceElements.jsx";
import {allergiesList, diseasesList} from "../../../data/RegisterConsts.js";
import RegisterTextArea from "./RegisterTextArea.jsx";

function FourthStep({ formData, setFormData }) {
    return (
        <>
            <div className="register-step-title">Krok 4</div>
            <div className="register-step-fourth-step">
                <div className="register-step-fourth-step-item register-step-fourth-step-item-left">
                    <RegisterChoiceElements
                        id="diseases"
                        label="Czy chorujesz na?"
                        options={diseasesList}
                        setFormData={setFormData}
                        value={formData.diseases}
                    />
                    <RegisterTextArea
                        id="otherDiseases"
                        setFormData={setFormData}
                        value={formData.otherDiseases}
                    />
                </div>
                <div className="register-step-fourth-step-item">
                    <RegisterChoiceElements
                        id="allergies"
                        label="Czy masz alergię na?"
                        options={allergiesList}
                        setFormData={setFormData}
                        value={formData.allergies}
                    />
                    <RegisterTextArea
                        id="otherAllergies"
                        setFormData={setFormData}
                        value={formData.otherAllergies}
                    />
                </div>
            </div>
        </>
    );
}

export default FourthStep;