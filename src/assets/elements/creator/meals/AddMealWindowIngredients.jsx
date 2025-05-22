import CreatorSelect from "../CreatorSelect.jsx";
import IngredientItem from "./IngredientItem.jsx";
import {useState} from "react";
import {validateIngredient} from "../../../../scripts/validateData/validateAddMealUtils.js";
import {onChangeInput} from "../../../hooks/onChangeInput.jsx";
import {mealCategoryData, mealUnitData} from "../../../../data/SelectOptionsData.js";
import {emptyIngredient} from "../../../../data/EmptyListsData.js";

const AddMealWindowIngredients = ({data, setData, errors}) => {
    const [addIngredientError, setAddIngredientError] = useState("");

    const [ingredient, setIngredient] = useState(emptyIngredient);

    const handleChange = onChangeInput(setIngredient)

    const [activeUnit, setActiveUnit] = useState(-1)
    const [activeCategory, setActiveCategory] = useState(-1)

    const handleClick = (ingredient) => {
        if(activeUnit === -1 || activeCategory === -1) {
            return
        }

        const newIngredient = {
            ...ingredient,
            unit: mealUnitData[activeUnit],
            category: mealCategoryData[activeCategory]
        };

        if(!validateIngredient(newIngredient, setAddIngredientError)) return

        setData(prev => ({
            ...prev,
            ingredients: [...prev.ingredients, newIngredient],
        }));

        setIngredient(emptyIngredient);

        setAddIngredientError("")
    }

    const handleRemove = (indexToRemove) => {
        setData(prev => ({
            ...prev,
            ingredients: prev.ingredients.filter((_, index) => index !== indexToRemove)
        }));
    };

    return (
        <>
            <div className="add-meal-window-ingredients">
                <div className="add-meal-window-name ingredients">
                    <input value={ingredient.name} id={"name"} onChange={handleChange} className="add-meal-window-name-input ingredients" type="text" placeholder="Wpisz nazwę..." />
                    <input value={ingredient.count} id={"count"} onChange={handleChange} className="add-meal-window-name-input ingredients-count" type="text" placeholder="Wpisz ilość..." />
                    <CreatorSelect
                        options={mealCategoryData}
                        active={activeCategory}
                        setActive={setActiveCategory}
                        AddWindow={true}
                        placeHolder={"Kategoria"}
                    />
                    <CreatorSelect
                        options={mealUnitData}
                        active={activeUnit}
                        setActive={setActiveUnit}
                        AddWindow={true}
                        placeHolder={"Jednostka"}
                    />
                    <div className="add-meal-window-add-ingredient" onClick={() => handleClick(ingredient)}>
                        Dodaj
                    </div>
                    <div className={`add-meal-window-error ${addIngredientError !== '' ? 'visible' : ''} add-ingredients-error`}>
                        {addIngredientError}
                    </div>
                </div>
                <div className="add-meal-window-ingredients-items">
                    {
                        data.ingredients.map((ingredient, index) => (
                            <IngredientItem
                                key={index}
                                data={ingredient}
                                onRemove={() => handleRemove(index)}
                            />
                        ))
                    }
                    <div className={`add-meal-window-error ${errors.ingredients !== '' ? 'visible' : ''} ingredients-error`}>
                        {errors.ingredients}
                    </div>
                </div>
            </div>
        </>
    );
}; export default AddMealWindowIngredients;