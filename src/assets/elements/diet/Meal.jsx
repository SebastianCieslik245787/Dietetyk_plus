import React, {useEffect, useRef} from "react";
import DropDownArrowIcon from "../../../images/icons/arrow_down.png";
import DeleteIcon from "../../../images/icons/delete_icon.png";
import EditIcon from "../../../images/icons/edit_icon.png";
import {changeDietPlanContainerSize} from "../../../scripts/changeDietPlanContainerSize.js";
import MacrosTable from "./MacrosTable.jsx";

const Meal = ({data, mealImg, isActive, onToggle, isCreator = false, onEdit, onClick}) => {
    const separatorRef = useRef(null);
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);

    //TODO naprawić to
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
                        isCreator ? (!isActive ? data.meal.name : '') : data.name
                    }
                </p>
                {isCreator && !isActive && (
                    <>
                        <MacrosTable
                            isCreator={isCreator}
                            data={data.meal.macros}
                        />
                    </>
                )}
                <img className={`meal-header-image ${isActive ? 'active' : ''}`} src={`${DropDownArrowIcon}`} alt=""
                     onClick={onToggle}/>
            </div>
            <div className={`meal-body ${isCreator ? 'creator' : ''} ${isActive ? "" : "meal-body-hidden"}`}>
                <div className={`meal-info-left-side ${isCreator ? 'creator' : ''}`} ref={leftSideRef}>
                    <img src={mealImg} alt=""/>
                    <p className="meal-info-meal-name">
                        {data.meal.name}
                    </p>
                    <MacrosTable
                        data={data.meal.macros}
                    />
                </div>
                <div className={"meal-info-divider"} ref={separatorRef}></div>
                <div className="meal-info-right-side" ref={rightSideRef}>
                    <p className="meal-info-right-header">
                        Składniki:
                    </p>
                    <div className="meal-info-right-elements">
                        {
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
                        {data.meal.recipe}
                    </p>
                </div>
                {
                    isCreator && (
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