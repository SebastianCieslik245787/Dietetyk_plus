import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietPlan from "../assets/elements/diet/DietPlan.jsx";

import "../style/DietPlan.css";
import {dietPlanData} from "../data/DietPlanData.js";
import {dietDayNames} from "../data/SelectOptionsData.js";
import {generateDietPDF} from "../scripts/generatePDF.js";
import {useCookies} from "react-cookie";
import {useState} from "react";


function DietPlanPage() {
    const [cookies] = useCookies(["name", "surname"]);
    const [dietData, setDietData] = useState(dietPlanData);

    const handleDownloadPDF = () => {
        const name = cookies.name || "Pacjent";
        const surname = cookies.surname || "";
        generateDietPDF(dietData.days, name, surname);
    };

    return (
        <div className="diet-plan-container">
            <NavigationBar/>
            <DietPlan
                options={dietDayNames}
                data={dietData}
                setData={setDietData}
                onClick={handleDownloadPDF}
            />
        </div>
    );
}

export default DietPlanPage;