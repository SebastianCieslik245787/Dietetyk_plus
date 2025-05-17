import DefaultPatientIcon from "../../../images/icons/deafult_user_icon.png"
import closeWindowIcon from "../../../images/icons/close_window_icon.png"

import {useEffect, useRef} from "react";
import {dietPurposes} from "../../../data/RegisterConsts.js";

const PatientInformation = ({data, onClose}) => {
    const windowRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (windowRef.current && !windowRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

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
                        Nr tel: {data.phone}
                        <br/>
                        E-mail: {data.email}
                        <br/>
                        {/*TODO: Zmienić birthdate na wiek*/}
                        Wiek: {data.birthdate}
                        <br/>
                        Waga: {data.medicalData.weight}kg
                        <br/>
                        Wzrost: {data.medicalData.height}cm
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