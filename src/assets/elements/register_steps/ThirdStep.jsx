import React from "react";
import RegisterSelect from "./RegisterSelect.jsx";
import {jobTypes, mealsCount, purpose} from "../../../data/RegisterConsts.js";
import RegisterChoiceLevel from "./RegisterChoiceLevel.jsx";

function ThirdStep({formData, setFormData}) {
    return (
        <>
            <div className="register-step-title">
                Krok 3
            </div>
            <div className="register-step-items-third-step-left-side level-choice">
                <RegisterChoiceLevel
                    label="Jak często uprawiasz aktywność fizyczną?"
                    value={formData.activityLevel}
                    type="activityLevel"
                    setFormData={setFormData}
                    leftLabel="Rzadko"
                    rightLabel="Często"
                />
                <RegisterChoiceLevel
                    label="Jak oceniasz swoją dotychczasową dietę?"
                    value={formData.dietRating}
                    type="dietRating"
                    setFormData={setFormData}
                    leftLabel="Niezdrowa"
                    rightLabel="Zdrowa"
                />
            </div>
            <div className="register-step-items-third-step-right-side">
                <RegisterSelect
                    id="mealsCount"
                    setFormData={setFormData}
                    options={mealsCount}
                    value={formData.mealsCount}
                    placeHolder="Wybierz opcję"
                    label="Jak często spożywasz posiłki w ciagu dnia?"
                    labelTextType={"small"}
                />
                <RegisterSelect
                    id="jobType"
                    setFormData={setFormData}
                    options={jobTypes}
                    value={formData.jobType}
                    placeHolder="Wybierz opcję"
                    label="Jaką prace wykonujesz?"
                    required={true}
                    labelTextType={"small"}
                    error="jobError"
                />
                <RegisterSelect
                    id="dietPurpose"
                    setFormData={setFormData}
                    options={purpose}
                    value={formData.dietPurpose}
                    placeHolder="Wybierz opcję"
                    required={true}
                    label="Jaki jest twój cel nowej diety?"
                    labelTextType={"small"}
                    error="dietPurposeError"
                />
            </div>
        </>
    );
}

export default ThirdStep;