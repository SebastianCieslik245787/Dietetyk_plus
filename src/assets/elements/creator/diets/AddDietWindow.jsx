import "../../../../style/AddDietWindow.css"
import DietPlan from "../../diet/DietPlan.jsx";
import {dietDayNames} from "../../../../data/SelectOptionsData.js";
import {useEffect, useState} from "react";
import DietInfoWindow from "./DietInfoWindow.jsx";
import {useCookies} from "react-cookie";
import {sendDietPlanData, sendUpdateDietPlanData} from "../../../../scripts/sendData/sendDietPlanData.js";
import {validateAddDiet} from "../../../../scripts/validateData/validateAddDietUtils.js";

/**
 * Okno dodawania diety, bądz edycji istniejącej diety
 * @name AddDietWindow
 * @description Okno dodawania diety
 * @member Dodawanie/Edycja diety
 * @component
 *
 * @see DietitianPatientsPage
 * @see Creator
 * @see DietInfoWindow
 * @see DietPlan
 *
 * @param {Object} data - Dane diety.
 * @property {string} data.name - Nazwa diety.
 * @property {string} data.description - Opis diety.
 * @property {Array<Object>} data.days - Dane z posiłkami na każdy dzień tygodnia.
 * @property {Array<Object>} data.days.meals - Dane posiłków danego dnia.
 * @property {string} data.days.meals.name - Nazwa posiłku (np. Śniadanie).
 * @property {Object} data.days.meals.meal - Dane posiłku.
 * @property {string} data.days.meals.meal.name - Nazwa dania (np. Jajecznica).
 * @property {Object} data.days.meals.meal.macros - Dane makro składników w daniu.
 * @property {number} data.days.meals.meal.macros.kcal - Kalorie dania.
 * @property {number} data.days.meals.meal.macros.proteins - Białko zawarte w daniu.
 * @property {number} data.days.meals.meal.macros.carbohydrates - Węglowodany zawarte w daniu.
 * @property {number} data.days.meals.meal.macros.fats - Tłuszcze zawarte w daniu.
 * @property {Array<Object>} data.days.meals.meal.ingredients - Składniki dania.
 * @property {string} data.days.meals.meal.ingredients.name - Nazwa składnika.
 * @property {number} data.days.meals.meal.ingredients.count - Ilość składnika w daniu.
 * @property {string} data.days.meals.meal.ingredients.count - Jednostka w jakiej podawany jest skłądnik (np. ml, g, szt.).
 * @property {string} data.days.meals.meal.recipe - Przepis dania.
 * @param {boolean} showDietPlan - Wartość odpowiadająca za wyświetlenie okna tylko do zmiany planu dety domyślnie false (Wyłączone tylko do eycji diety).
 * @param {function} onClose - Funkcja zamykająca okno.
 *
 * @returns {JSX.Element} Okno dodawania, bądz edytowania diety.
 */
const AddDietWindow = ({
                           data,
                           showDietPlan = false,
                           onClose,
                           ingredientsData,
                           setIngredientsData,
                           diets,
                           setDiets,
                           isEdit = false,
                           actualKey,
                           mealsData,
                           mealsKeys,
                           ingredientsKeys,
                           setIngredientsKeys
                       }) => {
    /**
     * Odpowiada za przełączanie okna z nazwą i opisem diety, na okno edycji planu diety.
     *
     * @type {boolean}
     *
     * @default false - okno nazwy i opisu diety.
     */
    const [editDietPlan, setEditDietPlan] = useState(false);

    /**
     * Zawiera dane diety.
     *
     * @type Object
     */
    const [dietData, setDietData] = useState(data);

    /**
     * Ustawia okno w tryb tylko do edycji diety kiedy użytkownik wyłącznie edytować diete.
     */
    useEffect(() => {
        setEditDietPlan(showDietPlan)
    }, [showDietPlan])

    const handleAddDiet = () => {
        if (!validateAddDiet(setErrors, dietData)) return

        //NOTE Dodawanie nowej diety
        if (!isEdit) {
            const updatedDiets = [...diets, dietData];
            setDiets(updatedDiets);
            sendDietPlanData(dietData, cookies)
        } else {
            //TODO przekazać id diety do edycji
            const updatedDiets = diets.map(diet =>
                diet.name === dietData.name ? dietData : diet
            );
            setDiets(updatedDiets);
            sendUpdateDietPlanData(actualKey, dietData, cookies);
        }
        onClose();
    };

    const [cookies] = useCookies(["User-Key"]);

    const [errors, setErrors] = useState({
        name: "",
        description: "",
    });

    return (<>
        <div className={"add-diet-window-container"}>
            {(!editDietPlan && showDietPlan === false) ?
                <DietInfoWindow
                    onClick={() => {
                        setEditDietPlan(true)
                    }}
                    data={dietData}
                    setData={setDietData}
                    onClose={onClose}
                    onSave={handleAddDiet}
                    errors={errors}
                />
                :
                <DietPlan
                    options={dietDayNames}
                    isEdit={true}
                    data={dietData}
                    setData={setDietData}
                    onClick={() => {
                        if (showDietPlan) onClose();
                        setEditDietPlan(false);
                    }}
                    ingredientsData={ingredientsData}
                    setIngredientsData={setIngredientsData}
                    onClose={() => {
                        if (showDietPlan) onClose();
                        setEditDietPlan(false);
                    }}
                    mealsData={mealsData}
                    mealsKeys={mealsKeys}
                    dietKey={actualKey}
                    ingredientsKeys={ingredientsKeys}
                    setIngredientsKeys={setIngredientsKeys}
                    isCreator={true}
                />}
        </div>
    </>)
};
export default AddDietWindow;