import React, {useState} from "react";
import DropDownArrowIcon from "../../../images/icons/arrow_down.png";

const Meal = ({label, mealImg, data}) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className={`meal ${active ? "meal-active" : ""}`}

        >
            <div className="meal-header">
                <p className="meal-title">
                    {label}
                </p>
                <img src={DropDownArrowIcon} alt="" onClick={handleClick}
                     style={{
                         rotate: active ? "180deg" : "0deg",
                     }}
                />
            </div>
            <div className={`meal-body ${active ? "" : "meal-body-hidden"}`}>
                <div className="meal-info-left-side">
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
                <div className="meal-info-divider"></div>
                <div className="meal-info-right-side">
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