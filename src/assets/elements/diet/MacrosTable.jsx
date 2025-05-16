import React from "react";

const MacrosTable = ({data, isCreator=false}) => {
    return (
        <>
            <div className={`meal-info-macros ${isCreator ? 'creator-inactive' : ''}`}>
                <div className="meal-info-macros-item meal-info-macros-item-first">
                    <p className="meal-info-macros-item-value">
                        {data.kcal}
                    </p>
                    <p className="meal-info-macros-item-label">
                        Kcal
                    </p>
                </div>
                <div className="meal-info-macros-item">
                    <p className="meal-info-macros-item-value">
                        {data.proteins}g
                    </p>
                    <p className="meal-info-macros-item-label">
                        Białko
                    </p>
                </div>
                <div className="meal-info-macros-item">
                    <p className="meal-info-macros-item-value">
                        {data.carbohydrates}g
                    </p>
                    <p className="meal-info-macros-item-label">
                        Węgl.
                    </p>
                </div>
                <div className="meal-info-macros-item">
                    <p className="meal-info-macros-item-value">
                        {data.fats}
                    </p>
                    <p className="meal-info-macros-item-label">
                        Tłusz.
                    </p>
                </div>
            </div>
        </>
    );
}; export default MacrosTable;