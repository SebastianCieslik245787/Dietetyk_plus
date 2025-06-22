import "../style/ShoppingList.css"
import "../style/DietPlan.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import DietShoppingList from "../assets/elements/diet/DietShoppingList.jsx";
import {dietDayNames} from "../data/SelectOptionsData.js";
import {createShoppingList} from "../scripts/shoppingListUtils.js";
import {emptyDiet} from "../data/EmptyListsData.js";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";
import {getDietPlanData} from "../scripts/getData/getDietsData.js";
import {getAllIngredients} from "../scripts/getData/getIngredientsData.js";
import {useConnection} from "../assets/ConnectionProvider.jsx";
import Error from "../assets/elements/error_page/Error.jsx";

function ShoppingList() {
    const [cookies] = useCookies(["User-Key"]);
    const [dietData, setDietData] = useState(emptyDiet);
    const dietId = getDataFromLocalStorage("currentDietId");
    const name = getDataFromLocalStorage("name") || "Pacjent";
    const surname = getDataFromLocalStorage("surname") || "";

    const [ingredientsData, setIngredientsData] = useState([]);
    const [ingredientsKeys, setIngredientsKeys] = useState([]);

    const [shoppingList, setShoppingList] = useState(emptyDiet);

    const {isConnected} = useConnection();

    useEffect(() => {
        async function fetchDietData() {
            const dietPlanData = await getDietPlanData(dietId, cookies);
            setDietData(dietPlanData);

            const [keys, data] = await getAllIngredients(cookies);
            setIngredientsKeys(keys);
            setIngredientsData(data);
        }

        fetchDietData();
    }, [cookies, dietId]);

    useEffect(() => {
        setShoppingList(createShoppingList(dietData, ingredientsData, ingredientsKeys));
    }, [dietData, ingredientsData, ingredientsKeys]);

    return (
        isConnected ? (
            <>
                <NavigationBar/>
                <div className="diet-plan-container">
                    <DietShoppingList
                        userName={name}
                        userSurname={surname}
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
