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
                    setFormData={setFormData}
                    leftLabel="Żadko"
                    rightLabel="Często"
                />
                <RegisterChoiceLevel
                    label="Jak oceniasz swoją dotychczasową dietę?"
                    value={formData.dietRating}
                    setFormData={setFormData}
                    leftLabel="Niezdrowa"
                    rightLabel="Zdrowa"
                />
            </div>
            <div className="register-step-items-third-step-right-side">
                <RegisterSelect
                    id="registerMealsCount"
                    setFormData={setFormData}
                    options={mealsCount}
                    value={formData.registerMealsCount}
                    placeHolder="Wybierz opcję"
                    label="Jak często spożywasz posiłki w ciagu dnia?"
                    labelTextType={"small"}
                />
                <RegisterSelect
                    id="registerJobType"
                    setFormData={setFormData}
                    options={jobTypes}
                    value={formData.registerJobType}
                    placeHolder="Wybierz opcję"
                    label="Jaką prace wykonujesz?"
                    required={true}
                    labelTextType={"small"}
                />
                <RegisterSelect
                    id="registerPurpose"
                    setFormData={setFormData}
                    options={purpose}
                    value={formData.registerPurpose}
                    placeHolder="Wybierz opcję"
                    required={true}
                    label="Jaki jest twój cel nowej diety?"
                    labelTextType={"small"}
                />
            </div>
        </>
    );
}

export default ThirdStep;