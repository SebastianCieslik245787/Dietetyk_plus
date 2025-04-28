import NavigationBar from "../assets/elements/NavigationBar.jsx";
import DietPlan from "../assets/elements/diet_plan/DietPlan.jsx";
import "../style/DietPlan.css"
import {dietDayNames} from "../data/DietPlanData.js";

function DietPlanPage() {

    return (
        <div className="diet-plan-container">
            {<NavigationBar/>}
            <DietPlan
                options={dietDayNames}
            />
        </div>
)

} export default DietPlanPage;
