import "../../../style/DieteticanPatientsPage.css";
import CloseWindowIcon from "../../../images/icons/close_window_icon.png"
import EditIcon from "../../../images/icons/edit_icon.png"
import {useEffect, useState} from "react";
import DietPlan from "../diet/DietPlan.jsx";
import {emptyDiet} from "../../../data/EmptyListsData.js";
import {dietDayNames} from "../../../data/SelectOptionsData.js";
import {getAllIngredients} from "../../../scripts/getData/getIngredientsData.js";
import {useCookies} from "react-cookie";
import {getAllDiets} from "../../../scripts/getData/getDietsData.js";
import {getDataFromLocalStorage} from "../../../scripts/getDataFromLocalStorage.js";
import {getAllMeals} from "../../../scripts/getData/getMealsData.js";
import {changeUserDietPlan} from "../../../scripts/sendData/sendPatientDataChange.js";

const AssignDietWindow = ({onClose, actualKey}) => {
    const [findDietQuery, setFindDietQuery] = useState("");
    const handleChange = (e) => setFindDietQuery(e.target.value.toLowerCase());

    const [cookies] = useCookies(["User-Key"]);
    //TODO Wykorzystać to
    const [dietKeys, setDietKeys] = useState([])
    const [dietData, setDietData] = useState([]);

    const [ingredientsKeys, setIngredientsKeys] = useState([]);
    const [ingredientsData, setIngredientsData] = useState([]);

    const [mealsKeys, setMealsKeys] = useState([]);
    const [mealsData, setMealsData] = useState([]);

    useEffect(() => {
        async function fetchDiets() {
            const [keys, data] = await getAllDiets(cookies);
            setDietKeys(keys);
            setDietData(data);

            const [ingredientsKeys, ingredientsData] = await getAllIngredients(cookies);
            setIngredientsKeys(ingredientsKeys);
            setIngredientsData(ingredientsData);

            const [mealsData, mealsKeys] = await getAllMeals(cookies);
            setMealsData(mealsData);
            setMealsKeys(mealsKeys);
        }
        fetchDiets()

    }, [cookies])


    const [dietPlan, setDietPlan] = useState(emptyDiet);

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
                            dietKey={getDataFromLocalStorage("currentDietId")}
                            //TODO dodac Melas keys
                            mealsKeys={mealsKeys}
                            mealsData={mealsData}
                            //TODO dodac Ingredienst keys
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
                                       placeholder="Wyszukaj istniejącą diete..."/>
                                <div
                                    className={`assign-diet-window-input-drop-down ${filteredDiets.length > 0 && findDietQuery !== '' ? 'active' : ''}`}>
                                    {
                                        filteredDiets.map((diet, index) => (
                                            <div key={index} className={"assign-diet-window-input-drop-down-item"}
                                                 onClick={() => {
                                                     setDietPlan(dietData[index].dietPlan);
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
                            <div className={"assign-diet-window-edit-diet-plan-save-button"} onClick={()=> {
                                changeUserDietPlan(
                                    actualKey,
                                    dietKeys[dietData.findIndex(diet => diet.dietPlan === dietPlan)], //FIXME
                                    cookies)
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