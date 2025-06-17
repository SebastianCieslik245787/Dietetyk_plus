import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietPlan from "../assets/elements/diet/DietPlan.jsx";

import "../style/DietPlan.css";
import {dietDayNames} from "../data/SelectOptionsData.js";
import {generateDietPDF} from "../scripts/generatePDF.js";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import {getDietPlanData} from "../scripts/getData/getDietsData.js";
import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";
import {getAllIngredients} from "../scripts/getData/getIngredientsData.js";
import {emptyDiet} from "../data/EmptyListsData.js";
import TransparentLogo from "../images/transparent_logo.png";

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
    const [dietData, setDietData] = useState(emptyDiet);
    const [ingredientsData, setIngredientsData] = useState([]);
    const [ingredientsKeys, setIngredientsKeys] = useState([]);

    useEffect(() => {
        async function loadDietData() {
            const data = await getDietPlanData(getDataFromLocalStorage("currentDietId"), cookies)
            if (data) {
                setDietData(data);
            } else {
                console.error("Nie udało się załadować planu diety.");
            }
            const [inkeys, indata] = await getAllIngredients(cookies);
            if (indata) {
                setIngredientsData(indata);
                setIngredientsKeys(inkeys);
            } else {
                console.error("Nie udało się załadować składników diety.");
            }
        }
        loadDietData();
    }, [cookies, ingredientsData]);

    const handleDownloadPDF = async () => {
    const name = getDataFromLocalStorage("name") || "Pacjent";
    const surname = getDataFromLocalStorage("surname") || "";
    const logoBase64 = await getBase64FromUrl(TransparentLogo);
    generateDietPDF(dietData, name, surname, logoBase64);
    };
    return (
        <div className="diet-plan-container">
            <NavigationBar/>
            <DietPlan
                isEdit={true}
                options={dietDayNames}
                data={dietData}
                setData={setDietData}
                onClick={handleDownloadPDF}
                ingredientsData={ingredientsData}
                ingredientsKeys={ingredientsKeys}
                isUser={true}
            />
        </div>
    );
}

export default DietPlanPage;