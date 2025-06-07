import "../style/DieteticanPatientsPage.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import SearchBar from "../assets/elements/dietitian_patients/SearchBar.jsx";
import {getPatientsData} from "../scripts/getData/getUsersData.js"
import {useEffect, useState} from "react";
import PatientInformations from "../assets/elements/dietitian_patients/PatientInformations.jsx";
import {useCookies} from "react-cookie";
import Patient from "../assets/elements/dietitian_patients/Patient.jsx";
import DeleteWindow from "../assets/DeleteWindow.jsx";
import {changeUserDietetic} from "../scripts/sendData/sendUserDieteticChange.js";
import AssignDietWindow from "../assets/elements/dietitian_patients/AssignDietWindow.jsx";


function DietitianPatientsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedPatientIndex, setExpandedPatientIndex] = useState(null);
    const [isPatientClicked, setIsPatientClicked] = useState(false);
    const [isDeleteWindowOpen, setIsDeleteWindowOpen] = useState(false);

    const [cookies] = useCookies(["User-Key"]);
    const [patients, setPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([]);

    const [actualKey, setActualKey] = useState(null);

    const [editDietWindow, setEditDietWindow] = useState(false);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const handleDelete = (key) => {
        changeUserDietetic("remove", key, cookies)
        setIsDeleteWindowOpen(false);
        console.log("usunieto pacjeta");
    }


    useEffect(() => {
        (async () => {
            const data = await getPatientsData(cookies);
            setPatients(data || []);
        })();
    }, [cookies]);

    useEffect(() => {
        setFilteredPatients(
            patients.filter((patient) =>{
                const key = Object.keys(patient)[0];
                return `${patient[key].name || ''} ${patient[key].surname || ''}`.toLowerCase().includes(searchTerm.toLowerCase()
            )}
            )
        );
    }, [patients, searchTerm]);

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
                                cookies={cookies}
                                onMoreInfo={() => {
                                    setExpandedPatientIndex(index)
                                    setIsPatientClicked(true);
                                }}
                                onDelete={(key) => {
                                    setIsDeleteWindowOpen(true)
                                    setActualKey(key)
                                }}
                                onEdit={(key) => {
                                    setEditDietWindow(true)
                                    setActualKey(key)
                                }}
                            />
                        </>
                    ))}
                    <div className="dietitian-patients-footer"/>
                </div>
            </div>
            {isPatientClicked && (
                <PatientInformations
                    patientData={filteredPatients[expandedPatientIndex]}
                    onClose={() => setIsPatientClicked(false)}
                />
            )}
            {
                editDietWindow && (
                    <AssignDietWindow
                        onClose={() => setEditDietWindow(false)}
                        actualKey={actualKey}
                    />
                )
            }
            {
                isDeleteWindowOpen && (
                    <DeleteWindow
                        message={"Czy napewno chcesz usunąć pacjenta?"}
                        onClose={() => setIsDeleteWindowOpen(false)}
                        onDelete={() => handleDelete(actualKey)}
                    />
                )
            }
        </>
    )
}

export default DietitianPatientsPage;