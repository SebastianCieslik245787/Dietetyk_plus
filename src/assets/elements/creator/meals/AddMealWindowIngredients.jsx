import CreatorSelect from "../CreatorSelect.jsx";
import IngredientItem from "./IngredientItem.jsx";
import React, {useState} from "react";
import {validateIngredient} from "../../../../scripts/validateData/validateAddMealUtils.js";
import {onChangeInput} from "../../../hooks/onChangeInput.jsx";
import {mealCategoryData, mealUnitData} from "../../../../data/SelectOptionsData.js";
import {emptyIngredient} from "../../../../data/EmptyListsData.js";

const AddMealWindowIngredients = ({data, setData, errors, ingredientsData, setIngredientsData}) => {
    const [addIngredientError, setAddIngredientError] = useState("");

    const [ingredient, setIngredient] = useState(emptyIngredient);

    const handleChange = onChangeInput(setIngredient)

    const [activeUnit, setActiveUnit] = useState(-1)
    const [activeCategory, setActiveCategory] = useState(-1)

    const handleClick = (ingredient) => {
        if (activeUnit === -1 || activeCategory === -1) {
            return;
        }

        const newIngredient = {
            ...ingredient,
            unit: mealUnitData[activeUnit],
            category: mealCategoryData[activeCategory]
        };

        if (!validateIngredient(newIngredient, setAddIngredientError)) return;

        let ingredientId = ingredientsData.findIndex(
            ing => ing.name.toLowerCase() === newIngredient.name.toLowerCase()
        );

        if (ingredientId === -1) {
            setIngredientsData(prevIngredients => {
                //TODO NOWY INGREDIENT
                //FIXME Gdzie niby jest ten obiekt?
                const updatedIngredients = [...prevIngredients, newIngredient];
                ingredientId = updatedIngredients.length - 1;

                setData(prev => {
                    if (Array.isArray(prev.ingredients)) {
                        return {
                            ...prev,
                            ingredients: [...prev.ingredients, newIngredient],
                        };
                    } else {
                        const newIngredientsObj = { ...prev.ingredients };
                        const prevCount = newIngredientsObj[ingredientId] || 0;
                        newIngredientsObj[ingredientId] = prevCount + Number(newIngredient.count);

                        return {
                            ...prev,
                            ingredients: newIngredientsObj,
                        };
                    }
                });

                return updatedIngredients;
            });
        } else {
            //TODO Update meal ingredienst
            //FIXME Baza czy nie baza?
            setData(prev => {
                if (Array.isArray(prev.ingredients)) {
                    return {
                        ...prev,
                        ingredients: [...prev.ingredients, newIngredient],
                    };
                } else {
                    const newIngredientsObj = { ...prev.ingredients };
                    const prevCount = newIngredientsObj[ingredientId] || 0;
                    newIngredientsObj[ingredientId] = prevCount + Number(newIngredient.count);

                    return {
                        ...prev,
                        ingredients: newIngredientsObj,
                    };
                }
            });
        }

        setShowIngredientsData(true)
        setIngredient(emptyIngredient);
        setAddIngredientError("");
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
        const unitIndex = mealUnitData.findIndex(u => u === selectedIng.unit);
        const categoryIndex = mealCategoryData.findIndex(c => c === selectedIng.categoryId);
        setIngredient({
            name: selectedIng.name,
            count: selectedIng.count || "",
            unit: selectedIng.unit,
            category: selectedIng.categoryId,
        });

        setActiveUnit(unitIndex);
        setActiveCategory(categoryIndex);
    };

    const [showIngredientsData, setShowIngredientsData] = useState(true);

    return (
        <>
            <div className="add-meal-window-ingredients">
                <div className="add-meal-window-name ingredients">
                    <input value={ingredient.name} id={"name"} onChange={handleChange} className="add-meal-window-name-input ingredients" type="text" placeholder="Wpisz nazwę..." />
                    <div className={`drop-down-ingredients ${ingredient.name !== '' && showIngredientsData ? 'active' : ''}`}>
                        {
                            filteredIngredients.map((ing, index) => (
                                <div key={index} className={`drop-down-ingredient-item ${ingredient.name !== '' && showIngredientsData ? 'active' : ''}`} onClick={() => handleSelectIngredient(ing)}>
                                    {ing.name}
                                </div>
                            ))
                        }
                    </div>
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
                        Object.entries(data.ingredients).map(([id, quantity], index) => {
                            const ingredient = ingredientsData[Number(id)];

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