import React, {useEffect, useRef} from "react";
import DropDownArrowIcon from "../../../images/icons/arrow_down.png";
import {changeDietPlanContainerSize} from "../../../scripts/changeDietPlanContainerSize.js";

const Meal = ({label, mealImg, isActive, onToggle}) => {
    const separatorRef = useRef(null);
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            changeDietPlanContainerSize();
            if (isActive && leftSideRef.current && rightSideRef.current && separatorRef.current) {
                const leftHeight = leftSideRef.current.offsetHeight;
                const rightHeight = rightSideRef.current.offsetHeight;
                separatorRef.current.style.height = Math.max(leftHeight, rightHeight) + "px";
            }
        }, 0);
    }, [isActive]);

    return (
        <div className={`meal ${isActive ? "meal-active" : ""}`}>
            <div className="meal-header">
                <p className="meal-title">
                    {label}
                </p>
                <img src={DropDownArrowIcon} alt="" onClick={onToggle}
                     style={{
                         rotate: isActive ? "180deg" : "0deg",
                     }}
                />
            </div>
            <div className={`meal-body ${isActive ? "" : "meal-body-hidden"}`}>
                <div className="meal-info-left-side" ref={leftSideRef}>
                    <img src={mealImg} alt=""/>
                    <p className="meal-info-meal-name">
                        Jajecznica z chlebem
                    </p>
                    <div className="meal-info-macros">
                        <div className="meal-info-macros-item meal-info-macros-item-first">
                            <p className="meal-info-macros-item-value">
                                675
                            </p>
                            <p className="meal-info-macros-item-label">
                                Kcal
                            </p>
                        </div>
                        <div className="meal-info-macros-item">
                            <p className="meal-info-macros-item-value">
                                46,7g
                            </p>
                            <p className="meal-info-macros-item-label">
                                Białko
                            </p>
                        </div>
                        <div className="meal-info-macros-item">
                            <p className="meal-info-macros-item-value">
                                47,9g
                            </p>
                            <p className="meal-info-macros-item-label">
                                Węgl.
                            </p>
                        </div>
                        <div className="meal-info-macros-item">
                            <p className="meal-info-macros-item-value">
                                36,6g
                            </p>
                            <p className="meal-info-macros-item-label">
                                Tłusz.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"meal-info-divider"} ref={separatorRef}></div>
                <div className="meal-info-right-side" ref={rightSideRef}>
                    <p className="meal-info-right-header">
                        Składniki:
                    </p>
                    <div className="meal-info-right-elements">
                        <p className="meal-info-right-element">
                            • 5 jajek
                        </p>
                        <p className="meal-info-right-element">
                            • 100g masła roślinnego
                        </p>
                        <p className="meal-info-right-element">
                            • 3 kromki chelba razowego
                        </p>
                    </div>
                    <p className="meal-info-right-header">
                        Przepis:
                    </p>
                    <p className="meal-info-right-recipe">
                        Podgrzewaj na patelni masło aż się roztopi, następnie wbij na patelnie 5 jajek, smarz aż źółtko
                        i białko się zetnie.
                    </p>
                </div>
            </div>
        </div>
    )
};
export default Meal;