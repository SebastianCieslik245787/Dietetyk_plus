import CreatorSelect from "../CreatorSelect.jsx";
import IngredientItem from "./IngredientItem.jsx";
import React, {useState} from "react";
import {validateIngredient} from "../../../../scripts/validateData/validateAddMealUtils.js";
import {onChangeInput} from "../../../hooks/onChangeInput.jsx";
import {mealCategoryData, mealUnitData} from "../../../../data/SelectOptionsData.js";
import {emptyIngredient} from "../../../../data/EmptyListsData.js";
import {sendIngredientData, sendUpdateIngredientData} from "../../../../scripts/sendData/sendIngredientData.js";
import {useCookies} from "react-cookie";

const AddMealWindowIngredients = ({data, setData, errors, ingredientsData, setIngredientsData, ingredientsKeys, setIngredientsKeys}) => {
    const [addIngredientError, setAddIngredientError] = useState("")

    const [ingredient, setIngredient] = useState(emptyIngredient)

    const handleChange = onChangeInput(setIngredient)

    const [count, setCount] = useState("")
    const handleChangeCount = (e) => {setCount(e.target.value);}

    const [activeUnit, setActiveUnit] = useState(-1)
    const [activeCategory, setActiveCategory] = useState(-1)

    const [cookies] = useCookies(["User-Key"]);

    const handleClick = async (ingredient) => {
        if (activeUnit === -1 || activeCategory === -1) {
            return;
        }

        let key= null;

        const newIngredient = {
            ...ingredient,
            unit: mealUnitData[activeUnit],
            categoryId: activeCategory
        };

        if (!validateIngredient(newIngredient, count, setAddIngredientError)) return;

        let ingredientId = ingredientsKeys[ingredientsData.findIndex(
            ing => ing.name.toLowerCase() === newIngredient.name.toLowerCase()
        )] || -1; //Niepotrzebne bo findIndex zwraca -1 jeśli nie znajdzie

        if (ingredientId === -1) {
            const ing = await sendIngredientData(newIngredient, cookies);
            const [key, macros] = Object.entries(ing)[0]

            newIngredient.macro = macros;

            setIngredientsKeys(prev => [...prev, key]);
            setIngredientsData(prevIngredients => [...prevIngredients, newIngredient]);
            setData(prev => {
                if (Array.isArray(prev.ingredients)) {
                    return {
                        ...prev,
                        ingredients: [...prev.ingredients, newIngredient],
                    };
                } else {
                    const newIngredientsObj = { ...prev.ingredients };
                    const prevCount = newIngredientsObj[key] || 0;
                    newIngredientsObj[key] = prevCount + Number(count);

                    return {
                        ...prev,
                        ingredients: newIngredientsObj,
                    };
                }
            });
        } else {
            //NOTE Update meal ingredienst
            //NOTE Baza czy nie baza?
            setData(prev => {
                if (Array.isArray(prev.ingredients)) {
                    return {
                        ...prev,
                        ingredients: [...prev.ingredients, newIngredient],
                    };
                } else {
                    const newIngredientsObj = { ...prev.ingredients };
                    const prevCount = newIngredientsObj[ingredientId] || 0;
                    newIngredientsObj[ingredientId] = prevCount + Number(count);

                    console.log(newIngredientsObj)
                    return {
                        ...prev,
                        ingredients: newIngredientsObj,
                    };
                }
            });
            await sendUpdateIngredientData(ingredientId, newIngredient, cookies);
        }

        setShowIngredientsData(true)
        setIngredient(emptyIngredient);
        setActiveCategory(-1)
        setActiveUnit(-1)
        setCount("")
        setAddIngredientError("");
        return key;
    };

    const handleRemove = (indexToRemove) => {
        if (Array.isArray(data.ingredients)) {
            setData(prev => ({
                ...prev,
                ingredients: prev.ingredients.filter((_, index) => index !== indexToRemove)
            }));
        } else {
            setData(prev => {
                const newIngredients = { ...prev.ingredients };
                const keys = Object.keys(newIngredients);
                const keyToRemove = keys[indexToRemove];

                if (keyToRemove !== undefined) {
                    delete newIngredients[keyToRemove];
                }

                return {
                    ...prev,
                    ingredients: newIngredients,
                };
            });
        }
    };

    const filteredIngredients = ingredientsData.filter((ing) =>
        ing.name.toLowerCase().includes(ingredient.name.toLowerCase()) && ingredient.name !== ""
    );

    const handleSelectIngredient = (selectedIng) => {
        setShowIngredientsData(false)
        console.log(selectedIng);
        const unitIndex = mealUnitData.findIndex(u => u === selectedIng.unit);
        setIngredient({
            name: selectedIng.name,
            unit: selectedIng.unit,
            categoryId: selectedIng.categoryId,
            macros: selectedIng.macros,
        });
        setActiveUnit(unitIndex);
        setActiveCategory(selectedIng.categoryId);
    };

    const [showIngredientsData, setShowIngredientsData] = useState(true);

    return (
        <>
            <div className="add-meal-window-ingredients">
                <div className="add-meal-window-name ingredients">
                    <input value={ingredient.name} id={"name"} onChange={handleChange} className="add-meal-window-name-input ingredients" type="text" placeholder="Wpisz nazwę..." />
                    <div className={`drop-down-ingredients ${ingredient.name !== '' && showIngredientsData ? 'active' : ''}`}>
                        {
                            filteredIngredients.map((ing) => (
                                <div key={ingredientsKeys[ingredientsData.indexOf(ing)]}
                                     className={`drop-down-ingredient-item ${ingredient.name !== '' && showIngredientsData ? 'active' : ''}`}
                                     onClick={() => handleSelectIngredient(ing)}>
                                    {ing.name}
                                </div>))
                        }
                    </div>
                    <input value={count} onChange={handleChangeCount} className="add-meal-window-name-input ingredients-count" type="text" placeholder="Wpisz ilość..." />
                    <CreatorSelect
                        options={mealCategoryData}
                        active={activeCategory}
                        setActive={setActiveCategory}
                        AddWindow={true}
                        placeHolder={"Kategoria"}
                        isCreator={true}
                    />
                    <CreatorSelect
                        options={mealUnitData}
                        active={activeUnit}
                        setActive={setActiveUnit}
                        AddWindow={true}
                        placeHolder={"Jednostka"}
                    />
                    <div className="add-meal-window-add-ingredient" onClick={async () => handleClick(ingredient)}>
                        Dodaj
                    </div>
                    <div className={`add-meal-window-error ${addIngredientError !== '' ? 'visible' : ''} add-ingredients-error`}>
                        {addIngredientError}
                    </div>
                </div>
                <div className="add-meal-window-ingredients-items">
                    {
                        Object.entries(data.ingredients).map(([id, quantity], index) => {
                            const ingredient = ingredientsData[ingredientsKeys.indexOf(id)];

                            if (!ingredient) return null;

                            return (
                                <IngredientItem
                                    key={index}
                                    ingredient={ingredient}
                                    quantity={quantity}
                                    onRemove={() => handleRemove(index)}
                                />
                            );
                        })
                    }
                    <div className={`add-meal-window-error ${errors.ingredients !== '' ? 'visible' : ''} ingredients-error`}>
                        {errors.ingredients}
                    </div>
                </div>
            </div>
        </>
    );
}; export default AddMealWindowIngredients;