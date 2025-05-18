import "../../../../style/AddMealWindow.css"
import {useState} from "react";
import AddMealWindowDescription from "./AddMealWindowDescription.jsx";
import AddMealWindowIngredients from "./AddMealWindowIngredients.jsx";
import CloseWindowIcon from '../../../../images/icons/close_window_icon.png'
import UnsavedChangesWindow from "./UnsavedChangesWindow.jsx";
import {isEditedMeal, validateAddMeal} from "../../../../scripts/validateData/validateAddMealUtils.js";

const AddMealWindow = ({onClose}) => {
    const [activeOption, setActiveOption] = useState(0);
    const [isEdited, setIsEdited] = useState(false);

    const [mealData, setMealData] = useState({
        name: '',
        image: null,
        recipe: '',
        ingredients: []
    });

    const [errors, setErrors] = useState({
        name: '',
        recipe: '',
        ingredients: ''
    });

    const handleSave = () => {
        if (!validateAddMeal(mealData, setErrors)) return
        onClose()
    }

    return (
        <>
            <div className="add-meal-window-container">
                <div className="add-meal-window">
                    <div className="add-meal-window-header">
                        Dodaj posiłek
                    </div>
                    <div className="add-meal-window-cancel">
                        <img src={`${CloseWindowIcon}`} onClick={() => {
                            if (isEditedMeal(mealData)) {
                                setIsEdited(true);
                            } else {
                                onClose();
                            }
                        }} alt=""/>
                    </div>
                    <div className="add-meal-window-menu">
                        <div className="add-meal-window-menu-item" onClick={() => setActiveOption(0)}>
                            <div
                                className={`add-meal-window-menu-item-text ${activeOption === 0 ? 'active' : ''}`}>Opis
                            </div>
                            <div className={`add-meal-window-menu-bar ${activeOption === 0 ? 'active' : ''}`}></div>
                        </div>
                        <div className="add-meal-window-menu-item" onClick={() => setActiveOption(1)}>
                            <div
                                className={`add-meal-window-menu-item-text ${activeOption === 1 ? 'active' : ''}`}>Składniki
                            </div>
                            <div className={`add-meal-window-menu-bar ${activeOption === 1 ? 'active' : ''}`}></div>
                        </div>
                    </div>
                    {
                        activeOption === 0 ?
                            <AddMealWindowDescription
                                data={mealData}
                                setData={setMealData}
                                errors={errors}
                            /> :
                            <AddMealWindowIngredients
                                data={mealData}
                                setData={setMealData}
                                errors={errors}
                            />
                    }
                    <div className="add-meal-window-add-button" onClick={handleSave}>
                        Zapisz
                    </div>
                </div>
            </div>
            {
                isEdited && (
                    <UnsavedChangesWindow
                        onCancel={() => {
                            setIsEdited(false)
                        }}
                        onClose={onClose}
                    />
                )
            }
        </>
    );
};
export default AddMealWindow;