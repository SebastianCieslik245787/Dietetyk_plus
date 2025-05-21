import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietPlan from "../assets/elements/diet/DietPlan.jsx";
import "../style/DietPlan.css"
import {dietDayNames, dietPlanData} from "../data/DietPlanData.js";

function DietPlanPage() {

    return (
        <div className="diet-plan-container">
            {<NavigationBar/>}
            <DietPlan
                options={dietDayNames}
                data={dietPlanData}
            />
        </div>
)

} export default DietPlanPage;
