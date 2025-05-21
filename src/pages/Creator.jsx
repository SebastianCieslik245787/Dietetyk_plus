import "../style/Creator.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import CreatorSelect from "../assets/elements/creator/CreatorSelect.jsx";
import React, {useEffect, useRef, useState} from "react";
import CreatorSearchBar from "../assets/elements/creator/CreatorSearchBar.jsx";
import CreatorAddItem from "../assets/elements/creator/CreatorAddItem.jsx";
import AddMealWindow from "../assets/elements/creator/meals/AddMealWindow.jsx";
import Meal from "../assets/elements/diet/Meal.jsx";
import MealImg from "../images/icons/jajecznica.webp";
import {changeDietPlanContainerSize} from "../scripts/changeDietPlanContainerSize.js";
import {mealsData} from "../data/MealsData.js";
import DietItem from "../assets/elements/creator/diets/DietItem.jsx";
import {dietData} from "../data/DIetData.js";
import AddDietWindow from "../assets/elements/creator/diets/AddDietWindow.jsx";
import DeleteWindow from "../assets/DeleteWindow.jsx";
import {useDeleteFromArray} from "../assets/hooks/useDeleteFromArray.jsx";

function Creator() {
    const [activeCreator, setActiveCreator] = useState(0);

    const [openAddItemWindow, setOpenAddItemWindow] = useState(false);

    const [activeDataIndex, setActiveDataIndex] = useState(null);

    const [data, setData, removeDataAtIndex] = useDeleteFromArray(mealsData);

    const [openDeleteWindow, setOpenDeleteWindow] = useState(false);

    const handleMealToggle = (index) => {
        setActiveDataIndex(prevIndex => (prevIndex === index ? null : index));
        changeDietPlanContainerSize()
    };

    const handleCreatorTypeClick = (index) => {
        setActiveCreator(index);
        if (index === 0) {
            setData(mealsData);
        } else {
            setData(dietData);
        }
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
                        onClick={() => {
                            setOpenAddItemWindow(true)
                            setActiveDataIndex(null)
                        }}
                    />
                    {activeCreator === 0 ? (
                            <>
                                {
                                    data.map((meal, index) => (
                                        <Meal key={index}
                                              data={data[0]}
                                              mealImg={MealImg}
                                              isActive={activeDataIndex === index}
                                              onToggle={() => handleMealToggle(index)}
                                              index={index}
                                              onEdit={() => setOpenAddItemWindow(true)}
                                              isCreator={true}
                                              onClick={() => {
                                                  setActiveDataIndex(index)
                                                  setOpenDeleteWindow(true)
                                              }}
                                        />
                                    ))}
                            </>
                        ) :
                        (
                            <>
                                {
                                    data.map((diet, index) => (
                                        <DietItem
                                            key={index}
                                            data={diet}
                                            onDelete={() => {
                                                setActiveDataIndex(index)
                                                setOpenDeleteWindow(true)
                                            }}
                                        />
                                    ))
                                }
                            </>
                        )
                    }
                    <div className="creator-menu-clear"/>
                </div>
            </div>
            {openAddItemWindow ? (activeCreator === 0 ?
                    <AddMealWindow
                        onClose={() => setOpenAddItemWindow(false)}
                        data={activeDataIndex !== null ? data[activeDataIndex].meal : null}
                    />
                    :
                    <AddDietWindow/>)
                : ''
            }
            {
                openDeleteWindow ?
                    <DeleteWindow
                        onClose={() => setOpenDeleteWindow(false)}
                        onDelete={() => {
                            removeDataAtIndex(activeDataIndex)
                            setActiveDataIndex(null)
                            setOpenDeleteWindow(false)
                        }}
                        error={activeCreator === 0 ? "Czy napewno chcesz usunąć danie?" : "Czy napewno chcesz usunąć diete?"}
                    /> : ''
            }
        </>
    );
}

export default Creator;