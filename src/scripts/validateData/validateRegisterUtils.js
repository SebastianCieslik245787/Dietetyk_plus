let errorMessage = ""

export function validateFirstStep(data) {
    errorMessage = ""
    const validators = [
        { valid: validateEmail(data.email)},
        { valid: validateName(data.name)},
        { valid: validateSurname(data.surname)},
        { valid: validatePassword(data.password)},
        { valid: validateConfirmPassword(data.confirmPassword, data.password)},
        { valid: validatePhoneNumber(data.phone)}
    ];

    return isValid(validators);
}

export function validateSecondStep(data) {
    errorMessage = ""
    const validators = [
        {valid: validateBirthDate(data.birthdate)},
        {valid: validateGender(data.gender)},
        {valid: validateHeight(data.height)},
        {valid: validateWeight(data.weight)},
    ]

    return isValid(validators);
}

export function validateThirdStep(data) {
    errorMessage = ""
    const validators = [
        {valid: validateJobType(data.jobType)},
        {valid: validateDietPurpose(data.dietPurpose)},
    ]

    return isValid(validators);
}

export function validateFifthStep(data) {
    errorMessage = ""
    const validators = [
        {valid: validateDataProcessingConsent(data.dataProcessingConsent)},
        {valid: validateStatute(data.statute)},
    ]

    return isValid(validators);
}

function isValid(validators) {
    const firstError = validators.find(v => !v.valid);

    if (firstError) {
        alert(errorMessage);
        return false;
    }

    return true;
}

function validateEmail(email) {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !EMAIL_REGEX.test(email)) {
        errorMessage += ("Email error\n")
        return false;
    }
    return true;
}

function validateName(name) {
    if (name === "") {
        errorMessage += ("Name error\n")
        return false;
    }
    return true;
}

function validateSurname(surname) {
    if (surname === "") {
        errorMessage += ("Surname error\n")
        return false;
    }
    return true;
}

function validatePassword(password) {
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (password === "" && !PASSWORD_REGEX.test(password)) {
        errorMessage += ("Password error\n")
        return false;
    }
    return true;
}

function validateConfirmPassword(confirmPassword, password) {
    if (confirmPassword !== password || confirmPassword === "") {
        errorMessage += ("confirmPassword error\n")
        return false;
    }
    return true;
}

function validatePhoneNumber(phoneNumber) {
    const PHONE_NUMBER_REGEX = /^(?:\+48\s?\d{9}|\+48\s?\d{3}\s\d{3}\s\d{3}|\+48\s?\d{3}-\d{3}-\d{3}|\d{9}|\d{3}\s\d{3}\s\d{3}|\d{3}-\d{3}-\d{3})$/;
    if (phoneNumber === "" && !PHONE_NUMBER_REGEX.test(phoneNumber)) {
        errorMessage += ("Phone number error\n")
        return false;
    }
    return true;
}

function validateBirthDate(birthDate) {
    if (birthDate === "") {
        errorMessage += "Date error\n"
        return false;
    }
    let today = new Date();
    let date = new Date(birthDate)

    let age = today.getFullYear() - date.getFullYear();
    let monthDiff = today.getMonth() - date.getMonth();
    let dayDiff = today.getDate() - date.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age < 0 || age < 18) {
        errorMessage += ("Date error\n")
        return false;
    }
    return true;
}

function validateGender(gender){
    if(gender === ""){
        errorMessage += ("Gender error\n")
        return false;
    }
    return true;
}

function validateHeight(height) {
    const HEIGHT_REGEX = /^(1\d\d)|(2[0-5]\d)$/;
    if (height === "" || !HEIGHT_REGEX.test(height)) {
        errorMessage += ("Height error\n")
        return false;
    }
    return true;
}

function validateWeight(weight) {
    const WEIGHT_REGEX = /^(\d\d)|(1\d\d)$/;
    if (weight === "" || !WEIGHT_REGEX.test(weight)) {
        errorMessage += ("Weight error\n")
        return false;
    }
    return true;
}

function validateJobType(jobType) {
    if(jobType === "") {
        errorMessage += ("Job Type error\n")
        return false;
    }
    return true;
}

function validateDietPurpose(purpose) {
    if (purpose === "") {
        errorMessage += ("Purpose error\n")
        return false;
    }
    return true;
}

function validateDataProcessingConsent(dataProcessingConsent) {
    if (!dataProcessingConsent) {
        errorMessage += ("DataProcessing consent failed\n")
        return false;
    }
    return true;
}

function validateStatute(statute) {
    if (!statute) {
        errorMessage += ("Statute error\n")
        return false;
    }
    return true;
}