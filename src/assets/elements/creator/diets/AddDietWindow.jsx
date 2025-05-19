import "../../../../style/AddDietWindow.css"
import DietPlan from "../../diet/DietPlan.jsx";
import {dietDayNames} from "../../../../data/DietPlanData.js";
import {useState} from "react";
import DietInfoWindow from "./DietInfoWindow.jsx";

const AddDietWindow = () => {
    const [editDietPlan, setEditDietPlan] = useState(false);

    return (<>
            <div className={"add-diet-window-container"}>
                {!editDietPlan ? <DietInfoWindow
                    onClick={() => {
                        setEditDietPlan(true)
                        console.log(editDietPlan)
                    }}
                /> : <DietPlan
                    options={dietDayNames}
                />}
            </div>
        </>)
};
export default AddDietWindow;