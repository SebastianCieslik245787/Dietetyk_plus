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
import DietItem from "../assets/elements/creator/diets/DietItem.jsx";
import AddDietWindow from "../assets/elements/creator/diets/AddDietWindow.jsx";
import DeleteWindow from "../assets/DeleteWindow.jsx";
import {useDeleteFromArray} from "../assets/hooks/useDeleteFromArray.jsx";
import {useCookies} from "react-cookie";
import {getAllMeals} from "../scripts/getData/getMealsData.js";
import {getAllIngredients} from "../scripts/getData/getIngredientsData.js";
import {getAllDiets} from "../scripts/getData/getDietsData.js";
import {sendDeleteMealData, sendMealData, sendUpdateMealData} from "../scripts/sendData/sendMealData.js";
import {sendDeleteDietPlanData} from "../scripts/sendData/sendDietPlanData.js";

function Creator() {

    const [activeCreator, setActiveCreator] = useState(0);
    const [edit, setEdit] = useState(false);

    const [openAddItemWindow, setOpenAddItemWindow] = useState(false);

    const [activeDataIndex, setActiveDataIndex] = useState(null);


    const [openDeleteWindow, setOpenDeleteWindow] = useState(false);

    const [showDietPlan, setShowDietPlan] = useState(false);

    const handleMealToggle = (index) => {
        setActiveDataIndex(prevIndex => (prevIndex === index ? null : index));
        changeDietPlanContainerSize()
    };

    const [cookies] = useCookies(["User-Key"]);


    const [isLoaded, setIsLoaded] = useState(false)

    const [ingredients, setIngredients] = useState([]);
    const [meals, setMeals] = useState([]);
    const [diets, setDiets] = useState([]);

    const [ingredientsKeys, setIngredientsKeys] = useState([]);
    const [mealsKeys, setMealsKeys] = useState([]);
    const [dietsKeys, setDietsKeys] = useState([]);


    const [data, setData, removeDataAtIndex] = useDeleteFromArray([]);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        (async () => {

            const [mealsK, mealsD] = await getAllMeals(cookies);
            if (mealsD && Array.isArray(mealsD) && mealsK && Array.isArray(mealsK)) {
                setMeals(mealsD || []);
                setMealsKeys(mealsK || []);
                setFilteredData(mealsD)
            } else {
                setMeals([]);
            }

            setIsLoaded(true);

            const [ingredientsKeys, ingredientsData] = await getAllIngredients(cookies);
            if (ingredientsData && Array.isArray(ingredientsData)) {
                setIngredients(ingredientsData);
                setIngredientsKeys(ingredientsKeys || []);
            } else {
                setIngredients([]);
            }

            const [dietKeys, dietData] = await getAllDiets(cookies);
            if (dietData && Array.isArray(dietData)) {
                setDiets(dietData);
                setDietsKeys(dietKeys || []);
            } else {
                setDiets([]);
            }

        })();
    }, [cookies]);


    const handleCreatorTypeClick = (index) => {
        setActiveCreator(index);
    }

    useEffect(() => {
        if (activeCreator === 0) {
            setData(meals);
            setFilteredData(meals);
        } else {
            setData(diets);
            setFilteredData(diets);
        }
    }, [activeCreator, meals, diets, setData]);

    useEffect(() => {
        console.log("Aktualne dane:", data);
    }, [data]);

    const createEmptyDiet = () => ({
        name: '',
        description: '',
        dietPlan: [[], [], [], [], [], [], []]
    });

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
            setData(prevData => {
                const updated = [...prevData];
                updated[activeDataIndex] = newMeal;
                return updated;
            });
            sendUpdateMealData(dietsKeys[activeDataIndex], newMeal, cookies);
        } else {
            sendMealData(newMeal, cookies);
            setData(prevData => [...prevData, newMeal]);
        }
        setActiveDataIndex(null);
    };

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (!Array.isArray(data)) { // Dodatkowe zabezpieczenie
            setFilteredData([]);
            return;
        }
        const filtered = data.filter(item => {
            if (item && typeof item.name === 'string') {
                return item.name.toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        });
        setFilteredData(filtered);
    }, [data, searchQuery]);

    return (
        isLoaded ? (
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
                                setActiveDataIndex(null)
                                setOpenAddItemWindow(true)
                            }}
                        />
                        {activeCreator === 0 ? (
                                <>
                                    {
                                        filteredData.map((meal, index) => {
                                            if (meal && typeof meal === 'object' && 'name' in meal && 'ingredients' in meal) {
                                                return (
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
                                                          ingredientsKeys={ingredientsKeys}
                                                          mealKey={mealsKeys[index]}
                                                    />
                                                );
                                            } else {
                                                return null;
                                            }
                                        })
                                    }
                                </>
                            ) :
                            (
                                <>
                                    {
                                        filteredData.map((diet, index) => (
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
                            ingredientsKeys={ingredientsKeys}
                            mealKey={activeDataIndex !== null ? mealsKeys[activeDataIndex] : null}
                            setIngredientsKeys={setIngredientsKeys}
                        />
                        :
                        <AddDietWindow
                            data={
                                activeDataIndex !== null &&
                                data[activeDataIndex] &&
                                typeof data[activeDataIndex] === "object" &&
                                "dietPlan" in data[activeDataIndex]
                                    ? data[activeDataIndex]
                                    : createEmptyDiet()
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
                            actualKey={activeDataIndex !== null ? dietsKeys[activeDataIndex] : null}
                            mealsKeys={mealsKeys}
                            mealsData={meals}
                            ingredientsKeys={ingredientsKeys}
                            setIngredientsKeys={setIngredientsKeys}
                        />)
                    : ''
                }
                {
                    openDeleteWindow ?
                        <DeleteWindow
                            onClose={() => setOpenDeleteWindow(false)}
                            onDelete={() => {
                                activeCreator === 0 ?
                                    sendDeleteMealData(mealsKeys[activeDataIndex], cookies) :
                                    sendDeleteDietPlanData(dietsKeys[activeDataIndex], cookies)
                                removeDataAtIndex(activeDataIndex)
                                setActiveDataIndex(null)
                                setOpenDeleteWindow(false)
                            }}
                            message={activeCreator === 0 ? "Czy napewno chcesz usunąć danie?" : "Czy napewno chcesz usunąć diete?"}
                        /> : ''
                }
            </>
        ) : ""
    );
}

export default Creator;