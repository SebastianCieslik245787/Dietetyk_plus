import React, {useEffect, useRef} from "react";
import DropDownArrowIcon from "../../../images/icons/arrow_down.png";
import DeleteIcon from "../../../images/icons/delete_icon.png";
import EditIcon from "../../../images/icons/edit_icon.png";
import {changeDietPlanContainerSize} from "../../../scripts/changeDietPlanContainerSize.js";
import MacrosTable from "./MacrosTable.jsx";
import {countMacros, countMacrosCreator} from "../../../scripts/countMacros.js";
import DefaultMealIcon from "../../../images/icons/default_meal_icon.jpg";

const Meal = ({data, isActive, onToggle, isCreator = false, onEdit, onClick, ingredientsData, isEdit=false}) => {
    const separatorRef = useRef(null);
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);

    useEffect(() => {
        changeDietPlanContainerSize()
        setTimeout(() => {
            if (isActive && leftSideRef.current && rightSideRef.current && separatorRef.current) {
                const leftHeight = leftSideRef.current.offsetHeight;
                const rightHeight = rightSideRef.current.offsetHeight;
                separatorRef.current.style.height = Math.max(leftHeight, rightHeight) + "px";
            }
        }, 0);
    }, [isActive]);

    return (
        <div className={`meal ${isCreator ? 'creator' : ''} ${isActive ? "meal-active" : ""}`}>
            <div className={`meal-header ${isCreator ? "creator" : ""}`}>
                <p className={`meal-title ${isCreator ? "creator" : ""}`}>
                    {
                        isCreator ? (!isActive ? data.name : '') : data.name
                    }
                </p>
                {isCreator && !isActive && (
                    <>
                        <MacrosTable
                            isCreator={isCreator}
                            data={countMacrosCreator(data.ingredients, ingredientsData)}
                        />
                    </>
                )}
                <img className={`meal-header-image ${isActive ? 'active' : ''}`} src={`${DropDownArrowIcon}`} alt=""
                     onClick={onToggle}/>
            </div>
            <div className={`meal-body ${isCreator ? 'creator' : ''} ${isActive ? "" : "meal-body-hidden"}`}>
                <div className={`meal-info-left-side ${isCreator ? 'creator' : ''}`} ref={leftSideRef}>
                    <img src={(isCreator || isEdit) ? (data.img_b64 !== '' ? DefaultMealIcon : DefaultMealIcon) :
                        (data.meal.img_b64 !== '' ?  URL.createObjectURL(data.meal.img_b64) : DefaultMealIcon)} alt=""/>
                    <p className="meal-info-meal-name">
                        {isCreator ? data.name : data.meal.name}
                    </p>
                    <MacrosTable
                        data={(isCreator && data.ingredients !== undefined)  || (isEdit && data.meal.ingredients !== undefined)  ? (isEdit ? countMacrosCreator(data.meal.ingredients, ingredientsData) : countMacrosCreator(data.ingredients, ingredientsData)) : countMacros(data.meal.ingredients)}
                    />
                </div>
                <div className={"meal-info-divider"} ref={separatorRef}></div>
                <div className="meal-info-right-side" ref={rightSideRef}>
                    <p className="meal-info-right-header">
                        Składniki:
                    </p>
                    <div className="meal-info-right-elements">
                        { (isCreator || isEdit) ? (isEdit ? data.meal.ingredients !== undefined : data.ingredients !== undefined) ?
                            Object.entries(isEdit ? data.meal.ingredients : data.ingredients).map(([id, quantity]) => {
                                    const ingredient = ingredientsData[Number(id)];

                                    if (!ingredient) return null;

                                    return (
                                        <p key={id} className="meal-info-right-element">
                                            • {ingredient.name} {quantity} {ingredient.unit}
                                        </p>
                                    );
                                }) : ''
                            :

                            data.meal.ingredients.map((ingredient, key) => (
                                <>
                                    <p key={key} className="meal-info-right-element">
                                        • {ingredient.name} {ingredient.count} {ingredient.unit}
                                    </p>
                                </>
                            ))
                        }
                    </div>
                    <p className="meal-info-right-header">
                        Przepis:
                    </p>
                    <p className="meal-info-right-recipe">
                        {isCreator ? data.recipe : data.meal.recipe}
                    </p>
                </div>
                {
                    (isCreator || isEdit) && (
                        <>
                            <div className="meal-info-buttons">
                                <div className="meal-info-button delete">
                                    <img onClick={onClick} src={`${DeleteIcon}`} alt=""/>
                                </div>
                                <div className="meal-info-button edit">
                                    <img onClick={onEdit} src={`${EditIcon}`} alt=""/>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
};
export default Meal;