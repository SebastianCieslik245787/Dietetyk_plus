import "../../../../style/AddMealWindow.css"
import {useRef, useState} from "react";
import AddMealWindowDescription from "./AddMealWindowDescription.jsx";
import AddMealWindowIngredients from "./AddMealWindowIngredients.jsx";
import CloseWindowIcon from '../../../../images/icons/close_window_icon.png'
import UnsavedChangesWindow from "./UnsavedChangesWindow.jsx";
import useClickOutside from "../../../hooks/OnClickOutsideWindow.jsx";

const AddMealWindow = ({onClose}) => {
    const [activeOption, setActiveOption] = useState(0);
    const [isSaved, setIsSaved] = useState(true);
    const [isEdited, setIsEdited] = useState(true);
    const windowRef = useRef(null);
    useClickOutside(windowRef, onClose);

    return(
        <>
            <div className="add-meal-window-container">
                <div className="add-meal-window" ref={windowRef}>
                    <div className="add-meal-window-header">
                        Dodaj posiłek
                    </div>
                    <div className="add-meal-window-cancel">
                        <img src={`${CloseWindowIcon}`} onClick={isEdited ? () => setIsSaved(false) : onClose} alt=""/>
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
                    <div className="add-meal-window-add-button" onClick={() => setIsEdited(false)}>
                        Zapisz
                    </div>
                </div>
            </div>
            {
                !isSaved && (
                    <UnsavedChangesWindow
                        onClose={() => {setIsSaved(!isSaved)}}
                        onSave={onClose}
                    />
                )
            }
        </>
    );
}; export default AddMealWindow;