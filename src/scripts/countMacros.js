export function countMacros(ingredients) {
    const data = {
        kcal: 0.0,
        proteins: 0.0,
        carbohydrates: 0.0,
        fats: 0.0,
        fiber: 0.0,
        sugar: 0.0
    }

    if (!ingredients || ingredients.length === 0) {
        return data;
    }

    for(let i = 0; i < ingredients.length; i++) {
        console.log(ingredients[i]);
        data.kcal += ingredients[i].macros.kcal;
        data.proteins += ingredients[i].macros.proteins;
        data.carbohydrates += ingredients[i].macros.carbohydrates;
        data.fats += ingredients[i].macros.fats;
        data.sugar += ingredients[i].macros.sugar;
        data.fiber += ingredients[i].macros.fiber;
    }

    return data;
}

export function countMacrosCreator(ingredients, ingredientsArray) {
    const totalMacros = {
        kcal: 0.0,
        proteins: 0.0,
        carbohydrates: 0.0,
        fats: 0.0,
        fiber: 0.0,
        sugar: 0.0
    };

    for (const [id, quantity] of Object.entries(ingredients)) {
        const ingredientData = ingredientsArray.find((item, index) => String(index) === id);

        if (!ingredientData) continue;

        const { macros } = ingredientData;


        for (const key in macros) {
            if (Object.prototype.hasOwnProperty.call(macros, key)) {
                totalMacros[key] += macros[key] * quantity;
            }
        }
    }

    return totalMacros;
}