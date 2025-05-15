import "../../../../style/AddMealWindow.css"
import {useState} from "react";
import AddMealWindowDescription from "./AddMealWindowDescription.jsx";
import AddMealWindowIngredients from "./AddMealWindowIngredients.jsx";
import CloseWindowIcon from '../../../../images/icons/close_window_icon.png'

const AddMealWindow = () => {
    const [activeOption, setActiveOption] = useState(0);

    return(
        <>
            <div className="add-meal-window-container">
                <div className="add-meal-window">
                    <div className="add-meal-window-header">
                        Dodaj posiłek
                    </div>
                    <div className="add-meal-window-cancel">
                        <img src={`${CloseWindowIcon}`} alt=""/>
                    </div>
                    <div className="add-meal-window-menu">
                        <div className="add-meal-window-menu-item" onClick={()=>setActiveOption(0)}>
                            <div className={`add-meal-window-menu-item-text ${activeOption === 0 ? 'active' : ''}`}>Opis</div>
                            <div className={`add-meal-window-menu-bar ${activeOption === 0 ? 'active' : ''}`}></div>
                        </div>
                        <div className="add-meal-window-menu-item" onClick={()=>setActiveOption(1)}>
                            <div className={`add-meal-window-menu-item-text ${activeOption === 1 ? 'active' : ''}`}>Składniki</div>
                            <div className={`add-meal-window-menu-bar ${activeOption === 1 ? 'active' : ''}`}></div>
                        </div>
                    </div>
                    {
                        activeOption === 0 ? <AddMealWindowDescription/> : <AddMealWindowIngredients/>
                    }
                    <div className="add-meal-window-add-button">
                        Zapisz
                    </div>
                </div>

            </div>
        </>
    );
}; export default AddMealWindow;