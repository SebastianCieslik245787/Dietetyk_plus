import "../style/ShoppingList.css"
import "../style/DietPlan.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietShoppingList from "../assets/elements/diet/DietShoppingList.jsx";
import {dietDayNames} from "../data/SelectOptionsData.js";
import {createShoppingList} from "../scripts/shoppingListUtils.js";
import {dietPlanData} from "../data/dietPlanDataUser.js";
import {useConnection} from "../assets/ConnectionProvider.jsx";
import Error from "../assets/elements/error_page/Error.jsx";

function ShoppingList() {
    const shoppingList = createShoppingList(dietPlanData)
    const {isConnected} = useConnection();

    return (
        isConnected ? (
            <>
                <NavigationBar/>
                <div className="diet-plan-container">
                    <DietShoppingList
                        options={dietDayNames}
                        data={shoppingList}
                    />
                </div>
            </>) : (
            <Error
                errorCode={"Error 404"}
                errorMessage={"Nie znaleziono strony lub zasobu, którego szukasz."}
            />
        )
    );
}

export default ShoppingList;