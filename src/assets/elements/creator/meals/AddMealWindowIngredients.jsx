import CreatorSelect from "./CreatorSelect.jsx";
import IngredientItem from "./IngredientItem.jsx";
import {useState} from "react";
import {validateIngredient} from "../../../../scripts/validateData/validateAddMealUtils.js";

const AddMealWindowIngredients = ({data, setData, errors}) => {
    const categories = [
        'Nabiał',
        'Warzywo',
        'Owoc',
        'Napój',
        'Przyprawa',
        'Masło'
    ]

    const units = [
        'kg',
        'dg',
        "g",
        'l',
        'ml',
        'opak.',
        'szt.'
    ]

    const [addIngredientError, setAddIngredientError] = useState("");

    const [ingredient, setIngredient] = useState({
        name: "",
        category: "",
        count: "",
        unit: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setIngredient(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    const [activeUnit, setActiveUnit] = useState(-1)
    const [activeCategory, setActiveCategory] = useState(-1)

    const handleClick = (ingredient) => {
        if(activeUnit === -1 || activeCategory === -1) {
            return
        }

        const newIngredient = {
            ...ingredient,
            unit: units[activeUnit],
            category: categories[activeCategory]
        };

        if(!validateIngredient(newIngredient, setAddIngredientError)) return

        setData(prev => ({
            ...prev,
            ingredients: [...prev.ingredients, newIngredient],
        }));

        setIngredient({
            name: "",
            category: "",
            count: "",
            unit: ""
        });

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
                        options={categories}
                        active={activeCategory}
                        setActive={setActiveCategory}
                        AddWindow={true}
                        placeHolder={"Kategoria"}
                    />
                    <CreatorSelect
                        options={units}
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