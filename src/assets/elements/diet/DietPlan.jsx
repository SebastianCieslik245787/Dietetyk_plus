import React, {useEffect, useRef, useState} from "react";
import DownloadIcon from "../../../images/icons/download_icon.png";
import SaveIcon from "../../../images/icons/save_icon.png";
import Meal from "./Meal.jsx";
import AddMealToDay from "../creator/diets/AddMealToDay.jsx";
import CreatorAddItem from "../creator/CreatorAddItem.jsx";
import {changeDietPlanContainerSize} from "../../../scripts/changeDietPlanContainerSize.js";
import DeleteWindow from "../../DeleteWindow.jsx";

const today = new Date();
const dayOfWeek = today.getDay() === 0 ? 6 : today.getDay() - 1;

const DietPlan = ({options, data, setData, isEdit = false, onClick, ingredientsData, setIngredientsData}) => {
    const [activeIndex, setActiveIndex] = useState(dayOfWeek);
    const [activeMealIndex, setActiveMealIndex] = useState(null);
    const [addMealToDay, setAddMealToDay] = useState(false);
    const mealsRef = useRef(null);
    const [editMealIndex, setEditMealIndex] = useState(null);
    const [deleteWindow, setDeleteWindow] = useState(false);

    useEffect(() => {
        if (mealsRef.current) {
            const timer = setTimeout(() => {
                changeDietPlanContainerSize();
            }, 0);

            return () => clearTimeout(timer);
        }
    }, [activeMealIndex]);

    const meals = isEdit ? Array.isArray(data?.dietPlan) &&
        Array.isArray(data.dietPlan[activeIndex])
            ? data.dietPlan[activeIndex]
            : [] :

        Array.isArray(data) &&
        data[activeIndex] &&
        Array.isArray(data[activeIndex])
            ? data[activeIndex]
            : [];

    useEffect(() => {
        if (isEdit) {
            setActiveIndex(0);
        }
    }, [isEdit]);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setActiveMealIndex(null);
    };

    const handleMealToggle = (index) =>
        setActiveMealIndex((prevIndex) => (prevIndex === index ? null : index));

    //TODO Usuwanie meala z aktualnej diety
    const handleDeleteMeal = (mealIndex) => {
        const updatedDietPlan = [...data.dietPlan];

        if (!Array.isArray(updatedDietPlan[activeIndex])) return;

        updatedDietPlan[activeIndex] = updatedDietPlan[activeIndex].filter(
            (_, index) => index !== mealIndex
        );

        setData({
            ...data,
            dietPlan: updatedDietPlan
        });
    };

    return (
        <div className="diet-plan-content" id="diet-plan-content">
            <div className="diet-plan-menu">
                <div className="diet-plan-menu-header">Plan żywienia</div>
                <div className="diet-plan-menu-items">
                    {options.map((item, index) => (
                        <div
                            className={`diet-plan-menu-item ${
                                activeIndex === index
                                    ? "diet-plan-menu-item-text-active"
                                    : ""
                            }`}
                            key={index}
                            onClick={() => handleItemClick(index)}
                        >
                            <div
                                className="diet-plan-menu-item-active"
                                style={{
                                    visibility:
                                        activeIndex === index
                                            ? "visible"
                                            : "hidden",
                                }}
                            />
                            <div className="diet-plan-menu-item-text">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="diet-plan-menu-button" onClick={onClick}>
                    <img
                        src={isEdit ? `${SaveIcon}` : `${DownloadIcon}`}
                        alt=""
                    />
                    <p className="diet-plan-menu-button-text">
                        {isEdit ? "Zapisz" : "Pobierz"}
                    </p>
                </div>
            </div>
            <div
                className="diet-plan-separator"
                id="diet-plan-separator"
            />
            <div
                className="diet-plan-meals"
                id="diet-plan-meals"
                ref={mealsRef}
            >
                {meals.length > 0 ? (
                    meals.map((meal, index) => (
                        <Meal
                            key={`day-${activeIndex}-meal-${index}`}
                            data={meal}
                            isActive={activeMealIndex === index}
                            onToggle={() => handleMealToggle(index)}
                            index={index}
                            isEdit={isEdit}
                            ingredientsData={ingredientsData}
                            onEdit={() => {
                                setEditMealIndex(index);
                                setAddMealToDay(true);
                            }}
                            onClick={() => setDeleteWindow(true)}
                        />
                    ))
                ) : (
                    <p style={{padding: 16, color: "#888"}}>
                        Brak posiłków do wyświetlenia.
                    </p>
                )}
                {isEdit && (
                    <CreatorAddItem
                        placeHolder={"Dodaj posiłek"}
                        onClick={() => setAddMealToDay(true)}
                    />
                )}
            </div>
            {addMealToDay && (
                <AddMealToDay
                    data={data}
                    setData={setData}
                    activeIndex={activeIndex}
                    onClose={() => setAddMealToDay(false)}
                    ingredientsData={ingredientsData}
                    setIngredientsData={setIngredientsData}
                    editMealIndex={editMealIndex}
                />
            )}
            {
                deleteWindow && (
                    <DeleteWindow
                        onDelete={() => {
                            handleDeleteMeal(activeMealIndex)
                            setDeleteWindow(false)
                        }}
                        onClose={() => setDeleteWindow(false)}
                        message={"Czy napewno chcesz usunąć posiłek z diety?"}
                    />
                )
            }
        </div>
    );
};

export default DietPlan;
