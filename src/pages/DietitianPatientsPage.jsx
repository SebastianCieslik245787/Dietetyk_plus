import "../style/DieteticanPatientsPage.css"
import NavigationBar from "../assets/elements/NavigationBar.jsx";
import SearchBar from "../assets/elements/dietitian_patients/SearchBar.jsx";
import Patient from "../assets/elements/dietitian_patients/Patient.jsx";
import {patientsData} from "../data/PatientData.js";
import {useEffect, useState} from "react";
import PatientInformations from "../assets/elements/dietitian_patients/PatientInformations.jsx";

function DietitianPatientsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [patients] = useState(patientsData);
    const [expandedPatientIndex, setExpandedPatientIndex] = useState(null);
    const [isPatientClicked, setIsPatientClicked] = useState(false);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPatients = patients.filter((patient) =>
        `${patient.name} ${patient.surname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (isPatientClicked) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [isPatientClicked]);


    return (
        <>
            <NavigationBar/>
            <div className="dietitian-patients-container">
                <SearchBar
                    placeHolder={"Wpisz..."}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div className={"patient-items"}>
                    {filteredPatients.map((item, index) => (
                        <>
                            <Patient
                                data={item}
                                key={index}
                                onMoreInfo={() => {
                                    setExpandedPatientIndex(index)
                                    setIsPatientClicked(true);
                                }}/>
                        </>
                    ))}
                </div>
            </div>
            {isPatientClicked && (
                <PatientInformations
                    data = {filteredPatients[expandedPatientIndex]}
                    onClose={() => setIsPatientClicked(false)}
                />
            )}
        </>
    )
}

export default DietitianPatientsPage;