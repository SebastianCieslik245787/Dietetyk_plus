import React, {useEffect, useState} from "react";
import DownloadIcon from "../../../images/icons/download_icon.png"
import Meal from "./Meal.jsx";
import MealImg from "../../../images/icons/jajecznica.webp";
import AddMealToDay from "../creator/diets/AddMealToDay.jsx";
import CreatorAddItem from "../creator/CreatorAddItem.jsx";

const today = new Date();
const dayOfWeek = today.getDay() === 0 ? 6 : today.getDay() - 1;

const DietPlan = ({options, data, setData, isEdit = false, onClick}) => {
    const [activeIndex, setActiveIndex] = useState(dayOfWeek)
    const [activeMealIndex, setActiveMealIndex] = useState(null)
    const [addMealToDay, setAddMealToDay] = useState(false)

    useEffect(() => {
        if(isEdit){
            setActiveIndex(0)
        }
    }, [isEdit])
    
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
                <div className="diet-plan-menu-button" onClick={onClick}>
                    {
                        isEdit ? '' :
                            <img src={`${DownloadIcon}`} alt=""/>
                    }
                    <p className="diet-plan-menu-button-text">
                        {isEdit ? 'Zapisz' : 'Pobierz'}
                    </p>
                </div>
            </div>
            <div className="diet-plan-separator" id={"diet-plan-separator"}/>
            <div className="diet-plan-meals" id={"diet-plan-meals"}>
                {
                    data.days[activeIndex].meals.map((meal, index) => (
                            <Meal key={index + 1 * activeIndex}
                                  data={meal}
                                  mealImg={MealImg}
                                  isActive={activeMealIndex === index}
                                  onToggle={() => handleMealToggle(index)}
                                  index={index}
                            />
                    ))
                }
                {
                    isEdit ? <CreatorAddItem
                        placeHolder={"Dodaj posiłek"}
                        onClick={() => setAddMealToDay(true)}
                    /> : ''
                }
            </div>
            {
                addMealToDay ? <AddMealToDay
                    data={data}
                    setData={setData}
                    activeIndex={activeIndex}
                    onClose={() => setAddMealToDay(false)}
                /> : ''
            }
        </div>
    );
};

export default DietPlan;