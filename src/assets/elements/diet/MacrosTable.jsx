import React from "react";

const MacrosTable = ({data, isCreator=false}) => {
    return (
        <>
            <div className={`meal-info-macros ${isCreator ? 'creator-inactive' : ''}`}>
                <div className="meal-info-macros-item meal-info-macros-item-first">
                    <p className="meal-info-macros-item-value">
                        {data.kcal.toFixed(0)}
                    </p>
                    <p className="meal-info-macros-item-label">
                        Kcal
                    </p>
                </div>
                <div className="meal-info-macros-item">
                    <p className="meal-info-macros-item-value">
                        {data.proteins.toFixed(1)} g
                    </p>
                    <p className="meal-info-macros-item-label">
                        Białko
                    </p>
                </div>
                <div className="meal-info-macros-item">
                    <p className="meal-info-macros-item-value">
                        {data.carbohydrates.toFixed(1)} g
                    </p>
                    <p className="meal-info-macros-item-label">
                        Węgl.
                    </p>
                </div>
                <div className="meal-info-macros-item">
                    <p className="meal-info-macros-item-value">
                        {data.fats.toFixed(1)} g
                    </p>
                    <p className="meal-info-macros-item-label">
                        Tłusz.
                    </p>
                </div>
                <div className="meal-info-macros-item">
                    <p className="meal-info-macros-item-value">
                        {data.sugar.toFixed(1)} g
                    </p>
                    <p className="meal-info-macros-item-label">
                        Cukier
                    </p>
                </div>
                <div className="meal-info-macros-item">
                    <p className="meal-info-macros-item-value">
                        {data.fiber.toFixed(1)} g
                    </p>
                    <p className="meal-info-macros-item-label">
                        Błon.
                    </p>
                </div>
            </div>
        </>
    );
}; export default MacrosTable;