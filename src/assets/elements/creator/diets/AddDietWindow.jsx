import "../../../../style/AddDietWindow.css"
import DietPlan from "../../diet/DietPlan.jsx";
import {dietDayNames} from "../../../../data/DietPlanData.js";
import {useEffect, useState} from "react";
import DietInfoWindow from "./DietInfoWindow.jsx";

const AddDietWindow = ({data, showDietPlan=false, onClose}) => {
    const [editDietPlan, setEditDietPlan] = useState(false);

    const [dietData, setDietData] = useState(data);

    useEffect(() => {
        setEditDietPlan(showDietPlan)
    }, [showDietPlan])

    return (<>
            <div className={"add-diet-window-container"}>
                {(!editDietPlan && showDietPlan === false) ? <DietInfoWindow
                    onClick={() => {
                        setEditDietPlan(true)
                    }}
                    data={dietData}
                    setData={setDietData}
                    onClose={onClose}
                /> : <DietPlan
                    options={dietDayNames}
                    isEdit={true}
                    data={dietData}
                    setData={setDietData}
                    onClick={() => {
                        if (!showDietPlan || onClose) {
                            setEditDietPlan(false);
                            if (onClose) onClose();
                        }
                    }}
                />}
            </div>
        </>)
};
export default AddDietWindow;