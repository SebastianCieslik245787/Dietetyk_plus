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
import {mealsData2} from "../data/MealsData.js";
import DietItem from "../assets/elements/creator/diets/DietItem.jsx";
import AddDietWindow from "../assets/elements/creator/diets/AddDietWindow.jsx";
import DeleteWindow from "../assets/DeleteWindow.jsx";
import {useDeleteFromArray} from "../assets/hooks/useDeleteFromArray.jsx";
import {emptyDiet} from "../data/EmptyListsData.js";
import {getAllIngredients} from "../scripts/getData/getIngredientsData.js";
import {useCookies} from "react-cookie";
import {sendIngredientData} from "../scripts/sendData/sendIngredientData.js";
import {getAllMeals} from "../scripts/getData/getMealsData.js";
import {getAllDiets} from "../scripts/getData/getAllDiets.js";

function Creator() {
    const [activeCreator, setActiveCreator] = useState(0);
    const [edit,setEdit] = useState(false);

    const [openAddItemWindow, setOpenAddItemWindow] = useState(false);

    const [activeDataIndex, setActiveDataIndex] = useState(null);

    const [data, setData, removeDataAtIndex] = useDeleteFromArray(mealsData2);

    const [openDeleteWindow, setOpenDeleteWindow] = useState(false);

    const [showDietPlan, setShowDietPlan] = useState(false);

    const handleMealToggle = (index) => {
        setActiveDataIndex(prevIndex => (prevIndex === index ? null : index));
        changeDietPlanContainerSize()
    };

    const [cookies] = useCookies(["User-Key"]);


    const ingredientsData = getAllIngredients(cookies);
    const [ingredients, setIngredients] = useState(ingredientsData);

    const mealsData = getAllMeals(cookies);
    const [meals, setMeals] = useState(mealsData);

    // TODO nie wiem czy to jest potrzebne, ale zostawiam na wszelki wypadek
    const dietData = getAllDiets(cookies);
    const [diets, setDiets] = useState(dietData);

    const handleCreatorTypeClick = (index) => {
        setActiveCreator(index);
        if (index === 0) {
            setData(meals);
        } else {
            setData(dietData);
        }
    }

    const creatorContainer = useRef(null);

    useEffect(() => {
        if (openAddItemWindow || openDeleteWindow) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [openAddItemWindow, openDeleteWindow]);

    const handleSaveMeal = (newMeal) => {
        if (activeDataIndex !== null) {
            //TODO update meal
            //FIXME baza czy nie baza?
            setData(prevData => {
                const updated = [...prevData];
                updated[activeDataIndex] = newMeal;
                return updated;
            });
        } else {
            //TODO zapisać jego dane
            sendIngredientData(newMeal, cookies);
            setData(prevData => [...prevData, newMeal]);
        }
        setActiveDataIndex(null);
    };

    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <NavigationBar/>
            <div className="creator-container" ref={creatorContainer}>
                <div className="creator-menu">
                    <CreatorSelect
                        options={[
                            'Kreator dań',
                            'Kreator diet'
                        ]}
                        setActive={handleCreatorTypeClick}
                        active={activeCreator}
                    />
                    <CreatorSearchBar
                        placeHolder={activeCreator === 0 ? 'Wyszukaj danie...' : 'Wyszukaj diete...'}
                        onChange={(e) => setSearchQuery(e.target.value)}
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
                                    filteredData.map((meal, index) => (
                                        <Meal key={index}
                                              data={meal}
                                              mealImg={MealImg}
                                              isActive={activeDataIndex === index}
                                              onToggle={() => handleMealToggle(index)}
                                              index={index}
                                              onEdit={() => {
                                                  setOpenAddItemWindow(true)
                                                  setEdit(true)
                                              }}
                                              isCreator={true}
                                              onClick={() => {
                                                  setActiveDataIndex(index)
                                                  setOpenDeleteWindow(true)
                                              }}
                                              ingredientsData={ingredients}
                                        />
                                    ))}
                            </>
                        ) :
                        (
                            <>
                                {
                                    filteredData .map((diet, index) => (
                                        <DietItem
                                            key={index}
                                            data={diet}
                                            onDelete={() => {
                                                setActiveDataIndex(index)
                                                setOpenDeleteWindow(true)
                                            }}
                                            onEdit={() => {
                                                setActiveDataIndex(index)
                                                setOpenAddItemWindow(true)
                                                setEdit(true)
                                            }}
                                            onShowDiet={() => {
                                                setActiveDataIndex(index)
                                                setShowDietPlan(true)
                                                setOpenAddItemWindow(true)
                                                setEdit(true)
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
                        data={activeDataIndex !== null ? data[activeDataIndex] : null}
                        ingredientsData={ingredients}
                        setIngredientsData={setIngredients}
                        onSave={handleSaveMeal}
                    />
                    :
                    <AddDietWindow
                        data={
                            activeDataIndex !== null &&
                            data[activeDataIndex] &&
                            typeof data[activeDataIndex] === "object" &&
                            "dietPlan" in data[activeDataIndex]
                                ? data[activeDataIndex]
                                : emptyDiet
                        }
                        showDietPlan={showDietPlan}
                        onClose={() => {
                            setOpenAddItemWindow(false)
                            setShowDietPlan(false)
                            setEdit(false)
                        }}
                        ingredientsData={ingredients}
                        setIngredientsData={setIngredients}
                        setDiets={setData}
                        diets={data}
                        isEdit={edit}
                    />)
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
                        message={activeCreator === 0 ? "Czy napewno chcesz usunąć danie?" : "Czy napewno chcesz usunąć diete?"}
                    /> : ''
            }
        </>
    );
}

export default Creator;