import "../../../style/DieteticanPatientsPage.css";
import CloseWindowIcon from "../../../images/icons/close_window_icon.png"
import EditIcon from "../../../images/icons/edit_icon.png"
import {useEffect, useState} from "react";
import DietPlan from "../diet/DietPlan.jsx";
import {emptyDiet} from "../../../data/EmptyListsData.js";
import {dietDayNames} from "../../../data/SelectOptionsData.js";
import {getAllIngredients} from "../../../scripts/getData/getIngredientsData.js";
import {useCookies} from "react-cookie";
import {getAllDiets, getDietPlanData} from "../../../scripts/getData/getDietsData.js";
import {getDataFromLocalStorage} from "../../../scripts/getDataFromLocalStorage.js";
import {getAllMeals} from "../../../scripts/getData/getMealsData.js";
import {changeUserDietPlan} from "../../../scripts/sendData/sendPatientDataChange.js";


const AssignDietWindow = ({onClose, actualKey, dietId = ""}) => {
    const [findDietQuery, setFindDietQuery] = useState("");
    const handleChange = (e) => setFindDietQuery(e.target.value.toLowerCase());

    const [cookies] = useCookies(["User-Key"]);

    const [dietKeys, setDietKeys] = useState([])
    const [dietData, setDietData] = useState([]);

    const [ingredientsKeys, setIngredientsKeys] = useState([]);
    const [ingredientsData, setIngredientsData] = useState([]);

    const [mealsKeys, setMealsKeys] = useState([]);
    const [mealsData, setMealsData] = useState([]);

    const [dietPlan, setDietPlan] = useState(emptyDiet);

    useEffect(() => {
        async function fetchDiets() {
            const [keys, data] = await getAllDiets(cookies);
            setDietKeys(keys);
            setDietData(data);

            if (dietId !== "") {
                if (dietId === actualKey) {
                    const privateDiet = await getDietPlanData(dietId, cookies)
                    if (privateDiet && privateDiet !== emptyDiet) {
                        setDietPlan(privateDiet)
                    }
                }
                if (keys.indexOf(dietId) !== -1) {
                    setDietPlan(data[keys.indexOf(dietId)])
                }
            }

            const [ingredientsKeys, ingredientsData] = await getAllIngredients(cookies);
            setIngredientsKeys(ingredientsKeys);
            setIngredientsData(ingredientsData);

            const [mealsKeys, mealsData] = await getAllMeals(cookies);
            setMealsData(mealsData);
            setMealsKeys(mealsKeys);
        }

        fetchDiets()
    }, [actualKey, cookies, dietId])


    const filteredDiets = dietData.filter(diet =>
        diet.name.toLowerCase().includes(findDietQuery)
    );

    const [editDietPlan, setEditDietPlan] = useState(false);

    return (
        <>
            <div className="assign-diet-window-container">
                {
                    editDietPlan ?
                        <DietPlan
                            options={dietDayNames}
                            ingredientsData={ingredientsData}
                            setIngredientsData={setIngredientsData}
                            data={dietPlan}
                            isEdit={true}
                            setData={setDietPlan}
                            onClick={() => setEditDietPlan(false)}
                            onClose={() => setEditDietPlan(false)}
                            dietKey={dietId || getDataFromLocalStorage("currentDietId")}
                            mealsKeys={mealsKeys}
                            mealsData={mealsData}
                            ingredientsKeys={ingredientsKeys}
                        />
                        :
                        <div className="assign-diet-window">
                            <div className={"assign-diet-window-header"}>
                                Edytuj Diete Pacjenta
                            </div>
                            <div className={"assign-diet-window-close"}>
                                <img src={`${CloseWindowIcon}`} alt="" onClick={onClose}/>
                            </div>
                            <div className={"assign-diet-window-input"}>
                                <input type="text" value={findDietQuery} onChange={handleChange}
                                       placeholder={dietPlan === emptyDiet ? "Wyszukaj istniejącą diete..." : dietPlan.name}/>
                                <div
                                    className={`assign-diet-window-input-drop-down ${filteredDiets.length > 0 && findDietQuery !== '' ? 'active' : ''}`}>
                                    {
                                        filteredDiets.map((diet, index) => (
                                            <div key={index} className={"assign-diet-window-input-drop-down-item"}
                                                 onClick={() => {
                                                     setDietPlan(dietData[index]);
                                                     setFindDietQuery(dietData[index].name);
                                                 }}>
                                                {diet.name}
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className={"assign-diet-window-edit-diet-plan-button"}
                                 onClick={() => setEditDietPlan(true)}>
                                <img className={"assign-diet-window-edit-diet-plan-button-icon"} src={`${EditIcon}`}
                                     alt=""/>
                                <p className={"assign-diet-window-edit-diet-plan-button-text"}>
                                    Edytuj plan
                                </p>
                            </div>
                            <div className={"assign-diet-window-edit-diet-plan-save-button"} onClick={() => {
                                const dietId = dietKeys[dietData.findIndex(diet => diet === dietPlan)] || actualKey
                                dietPlan.isPrivate = 1
                                dietPlan.name = "Personalna dieta"
                                changeUserDietPlan(
                                    actualKey,
                                    dietId,
                                    cookies,
                                    dietId===actualKey ? dietPlan : null,
                                    )
                                onClose()
                            }}>
                                Zapisz
                            </div>
                        </div>
                }
            </div>
        </>
    )
};
export default AssignDietWindow;