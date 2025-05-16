import "../style/Creator.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import CreatorSelect from "../assets/elements/creator/meals/CreatorSelect.jsx";
import React, {useEffect, useRef, useState} from "react";
import CreatorSearchBar from "../assets/elements/creator/meals/CreatorSearchBar.jsx";
import CreatorAddItem from "../assets/elements/creator/meals/CreatorAddItem.jsx";
import AddMealWindow from "../assets/elements/creator/meals/AddMealWindow.jsx";
import Meal from "../assets/elements/diet/Meal.jsx";
import {mealNames} from "../data/DietPlanData.js";
import MealImg from "../images/icons/jajecznica.webp";
import {changeDietPlanContainerSize} from "../scripts/changeDietPlanContainerSize.js";

function Creator() {
    const [activeCreator, setActiveCreator] = useState(0);
    const [openAddItemWindow, setOpenAddItemWindow] = useState(false);
    const [activeMealIndex, setActiveMealIndex] = useState(null);

    const handleMealToggle = (index) => {
        setActiveMealIndex(prevIndex => (prevIndex === index ? null : index));
        changeDietPlanContainerSize()
    };

    const handleCreatorTypeClick = (index) => {
        setActiveCreator(index);
    }

    const creatorContainer = useRef(null);

    useEffect(() => {
        if (openAddItemWindow) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [openAddItemWindow]);

    return (
        <>
            <NavigationBar/>
            <div className="creator-container" ref={creatorContainer}>
                <div className="creator-menu">
                    <CreatorSelect
                        options={[
                            'Kreator posiłkow',
                            'Kreator diet'
                        ]}
                        setActive={handleCreatorTypeClick}
                        active={activeCreator}
                    />
                    <CreatorSearchBar
                        placeHolder={activeCreator === 0 ? 'Wyszukaj danie...' : 'Wyszukaj diete...'}
                    />
                </div>
                <div className="creator-menu-items">
                    <CreatorAddItem
                        placeHolder={activeCreator === 0 ? 'Dodaj danie' : 'Dodaj diete'}
                        onClick={() => setOpenAddItemWindow(true)}
                    />
                    {activeCreator === 0 && (
                        <>
                            {mealNames.map((meal, index) => (
                                <Meal key={index}
                                      label={meal}
                                      mealImg={MealImg}
                                      isActive={activeMealIndex === index}
                                      onToggle={() => handleMealToggle(index)}
                                      index={index}
                                      isCreator={true}
                                />
                            ))}
                        </>
                    )}
                    <div className="creator-menu-clear"/>
                </div>
            </div>
            {(openAddItemWindow && activeCreator === 0) ?
                <AddMealWindow
                    onClose={() => setOpenAddItemWindow(false)}
                /> : ''
            }
        </>
    );
}

export default Creator;