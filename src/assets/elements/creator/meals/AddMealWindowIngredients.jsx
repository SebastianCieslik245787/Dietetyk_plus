import CreatorSelect from "./CreatorSelect.jsx";
import IngredientItem from "./IngredientItem.jsx";
import {ingredientsData} from "../../../../data/IngredientsData.js";

const AddMealWindowIngredients = () => {

    return (
        <>
            <div className="add-meal-window-ingredients">
                <div className="add-meal-window-name ingredients">
                    <input className="add-meal-window-name-input ingredients" type="text" placeholder="Wpisz nazwę..." />
                    <input className="add-meal-window-name-input ingredients-count" type="text" placeholder="Wpisz ilość..." />
                    <CreatorSelect
                        options={[
                            "Nabiał"
                        ]}
                        active={0}
                        AddWindow={true}
                    />
                    <CreatorSelect
                        options={[
                            "kg"
                        ]}
                        active={0}
                        AddWindow={true}
                    />
                    <div className="add-meal-window-add-ingredient">
                        Dodaj
                    </div>
                </div>
                <div className="add-meal-window-ingredients-items">
                    {
                        ingredientsData.map((ingredient, index) => (
                            <IngredientItem
                                key={index}
                                data={ingredient}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}; export default AddMealWindowIngredients;