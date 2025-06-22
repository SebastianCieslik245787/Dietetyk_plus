import DefaultPatientIcon from "../../../images/icons/deafult_user_icon.png"
import closeWindowIcon from "../../../images/icons/close_window_icon.png"

import {useRef} from "react";
import {dietPurposes, jobTypes, mealsCount} from "../../../data/RegisterConsts.js";

import {parseDateToYearSince} from "../../../scripts/dateFunctions.js";
import useClickOutside from "../../hooks/OnClickOutsideWindow.jsx";

const PatientInformation = ({patientData, onClose}) => {
    const windowRef = useRef(null);
    const key = Object.keys(patientData)[0];
    const data = patientData[key];

    useClickOutside(windowRef, onClose);
    
    const age = parseDateToYearSince(data.birthdate);
    const latVariant = (age) =>{
        switch (age%10) {
            case 0, 1, 5, 6, 7, 8, 9:
                return "lat";
            case 2, 3, 4:
                return "lata";
        }
    }

    return (
        <>
            <div className="patient-informations-container">
                <div className="patient-informations-window" ref={windowRef}>
                    <div className="patient-informations-window-image">
                        <img src={DefaultPatientIcon} alt=""/>
                    </div>
                    <div className="patient-informations-window-name-and-surname">
                        {data.name} {data.surname}
                    </div>
                    <div className="close-patient-informations-window" onClick={onClose}>
                        <img src={closeWindowIcon} alt=""/>
                    </div>
                    <div className="patient-informations-window-diet-type">
                        Rodzaj diety: {(dietPurposes.find(purpose => purpose.value === data.dietPurpose)?.label || "")}
                    </div>
                    <div className="patient-informations-window-patient-data">
                        Płeć: {data.gender === 0 ? "Mężczyzna" : "Kobieta"}
                        <br/>
                        Nr tel: {data.phone}
                        <br/>
                        E-mail: {data.email}
                        <br/>
                        Wiek: {age} {latVariant(age)}
                        <br/>
                        Data urodzenia: {data.birthdate}
                        <br/>
                        Waga: {data.medicalData.weight}kg
                        <br/>
                        Wzrost: {data.medicalData.height}cm
                        <br/>
                        Cel diety: {dietPurposes.find(purpose => purpose.value === data.dietPurpose)?.label}
                        <br/>
                        Ilość posiłków: {mealsCount.find(purpose => purpose.value === data.mealsCount)?.label}
                        <br/>
                        Typ pracy: {jobTypes.find(purpose => purpose.value === data.jobType)?.label}
                    </div>
                    <div className="patient-informations-window-patient-medical-data">
                        <span className="patient-informations-window-patient-medical-data-header">Choroby:</span>
                        {data.medicalData.diseases.map((item) => (
                            <>
                                <br/>
                                • {item}
                            </>
                        ))}
                        <br/>
                        <br/>
                        <span className="patient-informations-window-patient-medical-data-header">Alergie:</span>
                        {data.medicalData.allergies.map((item) => (
                            <>
                                <br/>
                                • {item}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default PatientInformation;