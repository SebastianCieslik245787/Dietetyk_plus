import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietPlan from "../assets/elements/diet/DietPlan.jsx";

import "../style/DietPlan.css";
import { dietDayNames } from "../data/DietPlanData.js";
import { generateDietPDF } from "../scripts/generatePDF.js";
import { useCookies } from "react-cookie";
import { useState } from "react";


function DietPlanPage() {
    const [cookies] = useCookies(["name", "surname"]);
    // Domyślnie dietPlanData to obiekt z days, by nie było błędu przy pierwszym renderze
    const [dietPlanData, setDietPlanData] = useState({ days: [] });

    // Funkcja do pobrania PDF
    const handleDownloadPDF = () => {
    const name = cookies.name || "Pacjent";
    const surname = cookies.surname || "";
    // Pass only the array of days!
    generateDietPDF(dietPlanData.days, name, surname);
    };

    return (
        <div className="diet-plan-container">
            <NavigationBar />
            <DietPlan
                options={dietDayNames}
                data={dietPlanData}

                setData={setDietPlanData}
                onClick={handleDownloadPDF}

            />
        </div>
    );
}

export default DietPlanPage;