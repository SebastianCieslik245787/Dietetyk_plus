import "../style/ShoppingList.css"
import "../style/DietPlan.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietShoppingList from "../assets/elements/diet/DietShoppingList.jsx";
import {dietDayNames} from "../data/DietPlanData.js";
import {shoppingListData} from "../data/ShoppingListData.js";

function ShoppingList() {
    return (
        <>
            <NavigationBar/>
            <div className="diet-plan-container">
                <DietShoppingList
                    options={dietDayNames}
                    data={shoppingListData}
                />
            </div>
        </>
    );
}

export default ShoppingList;