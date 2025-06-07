import "../style/ShoppingList.css"
import "../style/DietPlan.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietShoppingList from "../assets/elements/diet/DietShoppingList.jsx";
import {dietDayNames} from "../data/SelectOptionsData.js";
import {createShoppingList} from "../scripts/shoppingListUtils.js";
import {dietPlanData} from "../data/dietPlanDataUser.js";

function ShoppingList() {
    const shoppingList = createShoppingList(dietPlanData)

    return (
        <>
            <NavigationBar/>
            <div className="diet-plan-container">
                <DietShoppingList
                    options={dietDayNames}
                    data={shoppingList}
                />
            </div>
        </>
    );
}

export default ShoppingList;