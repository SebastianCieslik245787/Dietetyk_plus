import AddIcon from "../../../../images/icons/add_icon.png"
import CloseWindowIcon from '../../../../images/icons/close_window_icon.png'
import EditIcon from '../../../../images/icons/edit_icon.png'
import {useState} from "react";
import AddMealWindow from "../meals/AddMealWindow.jsx";

const AddMealToDay = ({ data, setData, activeIndex, onClose }) => {
    const [addNewMealWindow, setAddNewMealWindow] = useState(false)

    const [newMeal, setNewMeal] = useState(null);

    const [mealName, setMealName] = useState("");

    const handleAddMeal = () => {
        if (!mealName && !newMeal) return;

        const newMealObj = {
            name: mealName,
            meal: newMeal
        };

        const updatedDays = [...data.days];
        updatedDays[activeIndex].meals.push(newMealObj);

        setData({ ...data, days: updatedDays });
        console.log(data)
        onClose();
    };

    return (
        <>
            <div className={`add-meal-to-date-container ${addNewMealWindow ? 'hidden' : ''}`}>
                <div className="add-meal-to-date-window">
                    <div className={"add-meal-to-date-window-header"}>
                        Dodaj posiłek
                    </div>
                    <div className={"add-meal-to-date-close-window"}>
                        <img src={`${CloseWindowIcon}`} alt=""/>
                    </div>
                    <div className={"add-meal-to-date-window-input"}>
                        <input value={mealName} onChange={(e) => setMealName(e.target.value)} type="text" placeholder={"Wpisz nazwę posiłku..."}/>
                    </div>
                    <div className={"add-meal-to-date-window-input search-meal"}>
                        <input type="text" placeholder={"Wyszukaj danie..."}/>
                        <div className={'add-new-meal-button'} onClick={() => setAddNewMealWindow(true)}>
                            <div className={"add-new-meal-icon"}>
                                <img src={`${newMeal !== null ? EditIcon : AddIcon}`} alt=""/>
                            </div>
                            <div className={"add-new-meal-text"}>
                                {
                                    newMeal !== null ? "Edytuj danie" : "Nowe danie"
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"add-meal-to-date-add-button"} onClick={handleAddMeal}>
                        Dodaj
                    </div>
                </div>
            </div>
            {
                addNewMealWindow ? <AddMealWindow
                    onClose={() => setAddNewMealWindow(false)}
                    isEdit={true}
                    data={newMeal}
                    onSave={setNewMeal}
                /> : ''
            }
        </>
    )
};
export default AddMealToDay