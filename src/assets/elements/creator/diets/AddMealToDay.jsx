import AddIcon from "../../../../images/icons/add_icon.png"
import CloseWindowIcon from '../../../../images/icons/close_window_icon.png'
import EditIcon from '../../../../images/icons/edit_icon.png'
import {useEffect, useState} from "react";
import AddMealWindow from "../meals/AddMealWindow.jsx";
import {emptyMeal} from "../../../../data/EmptyListsData.js";
import {useCookies} from "react-cookie";

/**
 * Okno dodawania lub edycji posiłku w edycji diety na stronie kreatora {@link Creator}, w oknie {@link DietPlan}.
 *
 * @name AddMealToDay
 * @description Okno dodawania posilku do diety
 * @member Dodawanie/Edycja diety
 * @component
 *
 * @see DietPlan
 * @see AddMealWindow
 * @see Creator
 * @see AddDietWindow
 *
 * @param {Array<Object>} data - Dane zawierające dane dla danego dnia diety.
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
 * @param {function} setData - Edytuje aktulane dane diety.
 * @param {number} activeIndex - Aktualny dzień dla ktorego dodajemy posiłek.
 * @param {function} onClose - Funkcja zamykająca okno
 *
 * @returns {JSX.Element}
 */
const AddMealToDay = ({data, setData, activeIndex, onClose, ingredientsData, setIngredientsData, editMealIndex, mealsData, mealsKeys, ingredientsKeys, dietKey, setIngredientsKeys}) => {
    /**
     * Odpowiada za otwieranie okna dodającego nowy posiłek do diety na konkretny dzień.
     *
     * @type {boolean}
     *
     * @default false - Okno się nie wyświetla.
     */
    const [addNewMealWindow, setAddNewMealWindow] = useState(false)

    /**
     * Dane nowego dania.
     *
     * @typedef Meal
     *
     * @property {string} Meal.meal.name - Nazwa dania (np. Jajecznica).
     * @property {Object} Meal.meal.macros - Dane makro składników w daniu.
     * @property {number} Meal.meal.macros.kcal - Kalorie dania.
     * @property {number} Meal.meal.macros.proteins - Białko zawarte w daniu.
     * @property {number} Meal.meal.macros.carbohydrates - Węglowodany zawarte w daniu.
     * @property {number} Meal.meal.macros.fats - Tłuszcze zawarte w daniu.
     * @property {Array<Object>} Meal.meal.ingredients - Składniki dania.
     * @property {string} Meal.meal.ingredients.name - Nazwa składnika.
     * @property {number} Meal.meal.ingredients.count - Ilość składnika w daniu.
     * @property {string} Meal.meal.ingredients.count - Jednostka w jakiej podawany jest skłądnik (np. ml, g, szt.).
     * @property {string} Meal.meal.recipe - Przepis dania.
     *
     * @typedef {Meal}
     *
     * @default null - Brak nowego dania.
     */
    const [newMeal, setNewMeal] = useState(emptyMeal);

    /**
     * Nazwa posiłku (np. Śniadanie).
     *
     * @type {string}
     *
     * @default Brak nazwy.
     */
    const [mealName, setMealName] = useState("");

    const [cookies] = useCookies(['user-key', 'user-data']);

    /**
     * Funkcja dodająca nowy posiłek do aktualnych danych.
     *
     * @type {function}
     */
    const handleAddMeal = () => {
        if (!mealName || !newMeal) return;

        const newMealObj = {
            name: mealName,
            meal: newMeal
        };

        const updatedDietPlan = [...data.dietPlan];
        //NOTE edytowanie meala
        //NOTE To jest tego meala który jest tylkow diecie czy ten który jest w bazie?
        //Jeśli tylko z diety to nadpisać dietę, jeśli z bazy to wysłać na bazę
        if (editMealIndex !== null && updatedDietPlan[activeIndex][editMealIndex]) {
            updatedDietPlan[activeIndex][editMealIndex] = newMealObj;
        } else {
            //NOTE Dodawanie Meala do dnia w diecie
            //NOTE Imo wysłałbym to jako całą dietę i nadpisał starą
            updatedDietPlan[activeIndex].push(newMealObj);
        }
        setData({
            ...data,
            dietPlan: updatedDietPlan
        });

        setNewMeal(emptyMeal)
        onClose();
    };

    const [showOwnMeals, setShowOwnMeals] = useState(false)

    useEffect(() => {
        if (editMealIndex !== null && data.dietPlan[activeIndex]?.[editMealIndex]) {
            const mealToEdit = data.dietPlan[activeIndex][editMealIndex];
            setMealName(mealToEdit.name);
            setNewMeal(mealToEdit);
        }
    }, [activeIndex, data.dietPlan, editMealIndex]);

    const [searchQuery, setSearchQuery] = useState("");

    const filteredMeals = mealsData.filter(meal =>
        meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className={`add-meal-to-date-container ${addNewMealWindow ? 'hidden' : ''}`}>
                <div className="add-meal-to-date-window">
                    <div className={"add-meal-to-date-window-header"}>
                        Dodaj posiłek
                    </div>
                    <div className={"add-meal-to-date-close-window"} onClick={onClose}>
                        <img src={`${CloseWindowIcon}`} alt=""/>
                    </div>
                    <div className={"add-meal-to-date-window-input"}>
                        <input value={mealName} onChange={(e) => setMealName(e.target.value)} type="text"
                               placeholder={"Wpisz nazwę posiłku..."}/>
                    </div>
                    <div className={"add-meal-to-date-window-input search-meal"}>
                        <input type="text" placeholder={"Wyszukaj danie..."} value={searchQuery} onChange={(e) => {
                            setSearchQuery(e.target.value)
                            setShowOwnMeals(true)
                        }}
                        />
                        <div className={`drop-down-own-meals ${showOwnMeals ? 'active' : ''}`}>
                            {
                                filteredMeals.map((meal) => (
                                    <div
                                        key={mealsKeys[mealsData.indexOf(meal)]}
                                        className={`own-meal-item ${showOwnMeals ? 'active' : ''}`}
                                        onClick={() => {
                                            setNewMeal(meal);
                                            setSearchQuery(meal.name);
                                            setShowOwnMeals(false)
                                        }}
                                    >
                                        {meal.name}
                                    </div>
                                ))
                            }
                        </div>
                        <div className={'add-new-meal-button'} onClick={() => setAddNewMealWindow(true)}>
                            <div className={"add-new-meal-icon"}>
                                <img src={`${newMeal !== null ? EditIcon : AddIcon}`} alt=""/>
                            </div>
                            <div className={"add-new-meal-text"}>
                                {
                                    newMeal !== null ? "Edytuj danie" : "Nowe danie"
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"add-meal-to-date-add-button"} onClick={handleAddMeal}>
                        Dodaj
                    </div>
                </div>
            </div>
            {
                addNewMealWindow ? <AddMealWindow
                    onClose={() => setAddNewMealWindow(false)}
                    data={!showOwnMeals && searchQuery !== '' ? newMeal : newMeal.meal}
                    onSave={setNewMeal}
                    ingredientsData={ingredientsData}
                    setIngredientsData={setIngredientsData}
                    ingredientsKeys={ingredientsKeys}
                    setIngredientsKeys={setIngredientsKeys}
                /> : ''
            }
        </>
    )
};
export default AddMealToDay