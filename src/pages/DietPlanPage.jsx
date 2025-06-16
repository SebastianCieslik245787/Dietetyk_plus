import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietPlan from "../assets/elements/diet/DietPlan.jsx";

import "../style/DietPlan.css";
import {dietPlanData} from "../data/dietPlanDataUser.js";
import {dietDayNames} from "../data/SelectOptionsData.js";
import {generateDietPDF} from "../scripts/generatePDF.js";
import {useCookies} from "react-cookie";
import {useState} from "react";

function getBase64FromUrl(url) {
    return fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }));
}

function DietPlanPage() {
    const [cookies] = useCookies(["name", "surname"]);
    const [dietData, setDietData] = useState(dietPlanData);

    const handleDownloadPDF = async () => {
        const name = cookies.name || "Pacjent";
        const surname = cookies.surname || "";
        const logoBase64 = await getBase64FromUrl("src/images/transparent_logo.png");
        generateDietPDF(dietData, name, surname, logoBase64);
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