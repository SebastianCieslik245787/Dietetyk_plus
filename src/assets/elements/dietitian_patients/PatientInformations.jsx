import DefaultPatientIcon from "../../../images/icons/deafult_user_icon.png"
import closeWindowIcon from "../../../images/icons/close_window_icon.png"

import {useEffect, useRef} from "react";

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
                        Rodzaj diety: {data.dietType}
                    </div>
                    <div className="patient-informations-window-patient-data">
                        Nr tel: {data.nrTel}
                        <br/>
                        E-mail: {data.email}
                        <br/>
                        Wiek: {data.age}
                        <br/>
                        Waga: {data.weight}kg
                        <br/>
                        Wzrost: {data.height}cm
                    </div>
                    <div className="patient-informations-window-patient-medical-data">
                        <span className="patient-informations-window-patient-medical-data-header">Choroby:</span>
                        {data.diseases.map((item) => (
                            <>
                                <br/>
                                • {item}
                            </>
                        ))}
                        <br/>
                        <br/>
                        <span className="patient-informations-window-patient-medical-data-header">Alergie:</span>
                        {data.alergies.map((item) => (
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