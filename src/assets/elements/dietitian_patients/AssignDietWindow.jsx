import "../../../style/DieteticanPatientsPage.css";
import CloseWindowIcon from "../../../images/icons/close_window_icon.png"
import EditIcon from "../../../images/icons/edit_icon.png"
import {useState} from "react";
import DietPlan from "../diet/DietPlan.jsx";
import {emptyDiet} from "../../../data/EmptyListsData.js";
import {dietDayNames} from "../../../data/SelectOptionsData.js";
import {getAllIngredients} from "../../../scripts/getData/getIngredientsData.js";
import {useCookies} from "react-cookie";
import {getAllDiets} from "../../../scripts/getData/getDietsData.js";

const AssignDietWindow = ({onClose, actualKey}) => {
    const [findDietQuery, setFindDietQuery] = useState("");
    const handleChange = (e) => setFindDietQuery(e.target.value.toLowerCase());

    const [cookies] = useCookies(["User-Key"]);
    //TODO Wykorzystać to
    const [dietKeys, dietData] = getAllDiets(cookies);
    const [diets, setDiets] = useState(dietData);

    const [dietPlan, setDietPlan] = useState(emptyDiet);

    const filteredDiets = diets.filter(diet =>
        diet.name.toLowerCase().includes(findDietQuery)
    );

    //TODO wczytaj ingredients z bazy
    //FIXME śmierdzi jak powtórka kodu z Creator.jsx
    const [cookie] = useCookies(["User-Key"]);
    const ingredientData = getAllIngredients(cookie);
    const [ingredients, setIngredients] = useState(ingredientData);

    const [editDietPlan, setEditDietPlan] = useState(false);

    return (
        <>
            <div className="assign-diet-window-container">
                {
                    editDietPlan ?
                        <DietPlan
                            options={dietDayNames}
                            ingredientsData={ingredients}
                            setIngredientsData={setIngredients}
                            data={dietPlan}
                            isEdit={true}
                            setData={setDietPlan}
                            onClick={() => setEditDietPlan(false)}
                            onClose={() => setEditDietPlan(false)}
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
                                                     setDietPlan(diets[index].dietPlan);
                                                     setFindDietQuery(diets[index].name);
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
                            {
                                //TODO jak bedzie funckja do zapisywania dla ludzika to podmien onClose na własną
                                //FIXME User się zapisuje czy robi to dietetyk? Jak dietetyk to chcę tutaj id usera
                            }
                            <div className={"assign-diet-window-edit-diet-plan-save-button"} onClick={onClose}>
                                Zapisz
                            </div>
                        </div>
                }
            </div>
        </>
    )
};
export default AssignDietWindow;