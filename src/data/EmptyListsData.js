/**
 * @callback VoidCallBack
 * @returns {void}
 */

export const emptyIngredient = {
    name: "",
    category: "",
    count: "",
    unit: ""
}

export const emptyMeal = {
    name: '',
    image: null,
    recipe: '',
    ingredients: [],
    macros:{
        proteins: 1,
        kcal: 2,
        fats: 3,
        carbohydrates: 4,
    }
}

export const emptyRecoverPassword = {
    email: "",
    password: "",
    passwordConfirmation: "",
}

export const emptyRegister = {
    email: '',
    name: '',
    password: '',
    surname: '',
    confirmPassword: '',
    phone: '',
    birthdate: '',
    height: '',
    gender: '',
    weight: '',
    activityLevel: null,
    dietRating: null,
    mealsCount: '',
    jobType: '',
    dietPurpose: '',
    diseases: [],
    allergies: [],
    otherDiseases: '',
    otherAllergies: '',
    dataProcessingConsent: false,
    statute: false,
}

export const emptyDiet = {
    name: '',
    description: '',
    days: [
        {meals: []},
        {meals: []},
        {meals: []},
        {meals: []},
        {meals: []},
        {meals: []},
        {meals: []},
    ]
}