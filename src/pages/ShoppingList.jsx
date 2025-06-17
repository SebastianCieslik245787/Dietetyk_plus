import "../style/ShoppingList.css"
    import "../style/DietPlan.css"
    import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
    import DietShoppingList from "../assets/elements/diet/DietShoppingList.jsx";
    import {dietDayNames} from "../data/SelectOptionsData.js";
    import {createShoppingList} from "../scripts/shoppingListUtils.js";
    import {emptyDiet, emptyShoppingList} from "../data/EmptyListsData.js";
    import {useEffect, useState} from "react";
    import {useCookies} from "react-cookie";
    import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";
    import {getDietPlanData} from "../scripts/getData/getDietsData.js";
    import {getAllIngredients} from "../scripts/getData/getIngredientsData.js";

    function ShoppingList() {
        const [cookies] = useCookies(["User-Key"]);
        const [dietData, setDietData] = useState(emptyDiet);
        const dietId = getDataFromLocalStorage("currentDietId");

        const [ingredientsData, setIngredientsData] = useState([]);
        const [ingredientsKeys, setIngredientsKeys] = useState([]);

        const [shoppingList, setShoppingList] = useState(emptyShoppingList);

        useEffect(() => {
            async function fetchDietData(){
                const dietPlanData = await getDietPlanData(dietId, cookies);
                setDietData(dietPlanData);

                const [keys, data] = await getAllIngredients(cookies);
                setIngredientsKeys(keys);
                setIngredientsData(data);
            }
            fetchDietData();
        }, []);

        useEffect(() => {
            setShoppingList(createShoppingList(dietData.dietPlan, ingredientsData, ingredientsKeys));
        }, [dietData, ingredientsData, ingredientsKeys]);

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