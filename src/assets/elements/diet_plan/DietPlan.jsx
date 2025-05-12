import React, {useState} from "react";
import DownloadIcon from "../../../images/icons/download_icon.png"
import Meal from "./Meal.jsx";
import {mealNames} from "../../../data/DietPlanData.js";

import MealImg from "../../../images/icons/jajecznica.webp";

const today = new Date();
const dayOfWeek = today.getDay() === 0 ? 6 : today.getDay() - 1;

const DietPlan = ({options}) => {
    const [activeIndex, setActiveIndex] = useState(dayOfWeek);
    const [activeMealIndex, setActiveMealIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const handleMealToggle = (index) => {
        setActiveMealIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="diet-plan-content" id={"diet-plan-content"}>
            <div className="diet-plan-menu">
                <div className="diet-plan-menu-header">
                    Plan żywienia
                </div>
                <div className="diet-plan-menu-items">
                    {options.map((item, index) => (
                        <div
                            className={`diet-plan-menu-item ${activeIndex === index ? 'diet-plan-menu-item-text-active' : ''}`}
                            key={index}
                            onClick={() => handleItemClick(index)}
                        >
                            <div className="diet-plan-menu-item-active"
                                 style={{
                                     visibility: activeIndex === index ? 'visible' : 'hidden'
                                 }}
                            />
                            <div className="diet-plan-menu-item-text">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="diet-plan-menu-button">
                    <img src={DownloadIcon} alt=""/>
                    <p className="diet-plan-menu-button-text">
                      Pobierz
                    </p>
                </div>
            </div>
            <div className="diet-plan-separator" id={"diet-plan-separator"}/>
            <div className="diet-plan-meals" id={"diet-plan-meals"}>
                {mealNames.map((meal, index) => (
                    <Meal key={index}
                          label={meal}
                          mealImg={MealImg}
                          isActive={activeMealIndex === index}
                          onToggle={() => handleMealToggle(index)}
                          index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default DietPlan;