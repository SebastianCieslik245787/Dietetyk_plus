export function validateAddMeal(data, setErrors) {
    let errors = {
        name: '',
        recipe: '',
        ingredients: ''
    };
    let hasErrors = false;

    if (data.name.trim() === '') {
        errors.name = "Nazwa posiłku jest wymagana!";
        hasErrors = true;
    }

    if (data.recipe.trim() === '') {
        errors.recipe = "Przepis jest wymagany!";
        hasErrors = true;
    }

    if (!Array.isArray(data.ingredients) || data.ingredients.length < 1) {
        errors.ingredients = "Musisz dodać przynajmniej jeden składnik!";
        hasErrors = true;
    }

    setErrors(errors);
    return !hasErrors;
}

export function validateIngredient(ingredient, setError) {
    const countRegex = /^[1-9][0-9]*$/;
    if (ingredient.name === '' || ingredient.unit === '' || ingredient.category === '' || ingredient.count === '') {
        setError("Wszytskie pola muszą być wypełnione!")
        return false;
    }
    if(!countRegex.test(ingredient.count)){
        setError("Ilość musi być licbzą dodatnią!")
        return false;
    }
    setError("")
    return true
}

export function isEditedMeal(data) {
    return data.name !== '' || data.ingredients.length > 0 || data.image !== null || data.recipe !== '';
}