import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietPlan from "../assets/elements/diet/DietPlan.jsx";

import "../style/DietPlan.css";
import {dietPlanData} from "../data/dietPlanDataUser.js";
import {dietDayNames} from "../data/SelectOptionsData.js";
import {generateDietPDF} from "../scripts/generatePDF.js";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import {getDietPlanData} from "../scripts/getData/getDietsData.js";
import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";
import {getAllIngredients} from "../scripts/getData/getIngredientsData.js";

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
    const [cookies] = useCookies(["User-Key"]);
    const [dietData, setDietData] = useState(dietPlanData);
    const [ingredientsData, setIngredientsData] = useState([]);

    useEffect(() => {
        async function loadDietData() {
            const data = await getDietPlanData(getDataFromLocalStorage("currentDietId"), cookies)
            if (data) {
                setDietData(data.dietPlan);
            } else {
                console.error("Nie udało się załadować planu diety.");
            }

            const ingredients = await getAllIngredients(cookies);
            if (ingredients) {
                setIngredientsData(ingredients);
            } else {
                console.error("Nie udało się załadować składników diety.");
            }
        }
        loadDietData();
    }, [cookies]);

    const handleDownloadPDF = async () => {
    const name = getDataFromLocalStorage("name")
    const surname = getDataFromLocalStorage("surname")
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
                ingredientsData={ingredientsData}
            />
        </div>
    );
}

export default DietPlanPage;