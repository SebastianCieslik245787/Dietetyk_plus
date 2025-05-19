import "../../../../style/AddDietWindow.css"
import DietPlan from "../../diet/DietPlan.jsx";
import {dietDayNames} from "../../../../data/DietPlanData.js";
import {useState} from "react";
import DietInfoWindow from "./DietInfoWindow.jsx";
import {emptyDiet} from "../../../../data/EmptyDiet.js";

const AddDietWindow = () => {
    const [editDietPlan, setEditDietPlan] = useState(false);
    const [data, setData] = useState(emptyDiet);

    return (<>
            <div className={"add-diet-window-container"}>
                {!editDietPlan ? <DietInfoWindow
                    onClick={() => {
                        setEditDietPlan(true)
                    }}
                    data={data}
                    setData={setData}
                /> : <DietPlan
                    options={dietDayNames}
                    isEdit={true}
                    data={data}
                    setData={setData}
                    onClick={() => setEditDietPlan(false)}
                />}
            </div>
        </>)
};
export default AddDietWindow;