import "../../../style/DieteticanPatientsPage.css";
import CloseWindowIcon from "../../../images/icons/close_window_icon.png"
import EditIcon from "../../../images/icons/edit_icon.png"
import {useState} from "react";
import {dietData} from "../../../data/DIetData.js";
import DietPlan from "../diet/DietPlan.jsx";
import {ingredientsData} from "../../../data/ingredients.js";
import {emptyDiet} from "../../../data/EmptyListsData.js";
import {dietDayNames} from "../../../data/SelectOptionsData.js";

const AssignDietWindow = ({onClose}) => {
    const [findDietQuery, setFindDietQuery] = useState("");
    const handleChange = (e) => setFindDietQuery(e.target.value.toLowerCase());

    const [diets, setDiets] = useState(dietData);

    const [dietPlan, setDietPlan] = useState(emptyDiet);

    const filteredDiets = diets.filter(diet =>
        diet.name.toLowerCase().includes(findDietQuery)
    );

    const [ingredients, setIngredients] = useState(ingredientsData);

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