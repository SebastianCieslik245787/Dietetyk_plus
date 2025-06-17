export function validateFirstStep(data) {
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
    const validators = [
        {valid: validateBirthDate(data.birthdate)},
        {valid: validateGender(data.gender)},
        {valid: validateHeight(data.height)},
        {valid: validateWeight(data.weight)},
    ]

    return isValid(validators);
}

export function validateThirdStep(data) {
    const validators = [
        {valid: validateJobType(data.jobType)},
        {valid: validateDietPurpose(data.dietPurpose)},
    ]

    return isValid(validators);
}

export function validateFifthStep(data) {
    const validators = [
        {valid: validateDataProcessingConsent(data.dataProcessingConsent)},
        {valid: validateStatute(data.statute)},
    ]

    return isValid(validators);
}

function isValid(validators) {
    const firstError = validators.find(v => !v.valid);

    return !firstError;
}

function setErrorField(field, value) {
    field.innerHTML = value;
    field.style.visibility = "visible";
}

function validateEmail(email) {
    const errorField = document.getElementById("emailError");
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !EMAIL_REGEX.test(email)) {
        setErrorField(errorField, "Adres e-mail jest nie poprawny!");
        return false;
    }
    fetch(
        "/api/checkEmail",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email })
        }
    ).then(r => {
        if (r.status === 409) {
            setErrorField(errorField, "E-mail jest już używany!");
            return false;
        }
    }
    )
    errorField.style.visibility = "hidden";
    return true;
}

function validateName(name) {
    const errorField = document.getElementById("nameError");
    if (name === "") {
        setErrorField(errorField, "Pole Imie jest wymagane!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateSurname(surname) {
    const errorField = document.getElementById("surnameError");
    if (surname === "") {
        setErrorField(errorField, "Pole Nazwisko jest wymagane!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validatePassword(password) {
    const errorField = document.getElementById("passwordError");
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (password === "" && !PASSWORD_REGEX.test(password)) {
        setErrorField(errorField, "Hasło niepoprawne");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateConfirmPassword(confirmPassword, password) {
    const errorField = document.getElementById("confirmPasswordError");
    if (confirmPassword !== password || confirmPassword === "") {
        setErrorField(errorField, "Hasła nie są identyczne!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validatePhoneNumber(phoneNumber) {
    const errorField = document.getElementById("phoneNumberError");
    const PHONE_NUMBER_REGEX = /^(?:\+48\s?\d{9}|\+48\s?\d{3}\s\d{3}\s\d{3}|\+48\s?\d{3}-\d{3}-\d{3}|\d{9}|\d{3}\s\d{3}\s\d{3}|\d{3}-\d{3}-\d{3})$/;
    if (phoneNumber === "" && !PHONE_NUMBER_REGEX.test(phoneNumber)) {
        setErrorField(errorField, "Numer telefonu jest niepoprawny!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateBirthDate(birthDate) {
    const errorField = document.getElementById("birthDateError");
    if (birthDate === "") {
        setErrorField(errorField, "Data urodzenia jest wymagana!");
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
        setErrorField(errorField, "Jestes za młody!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateGender(gender){
    const errorField = document.getElementById("genderError");
    if(gender === ""){
        setErrorField(errorField, "Płeć jest wymagana!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateHeight(height) {
    const errorField = document.getElementById("heightError");
    const HEIGHT_REGEX = /^(1\d\d)|(2[0-5]\d)$/;
    if (height === "" || !HEIGHT_REGEX.test(height)) {
        setErrorField(errorField, "Wzrost jest niepoprawny!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateWeight(weight) {
    const errorField = document.getElementById("weightError");
    const WEIGHT_REGEX = /^(\d\d)|(\d\d\d)$/;
    if (weight === "" || !WEIGHT_REGEX.test(weight)) {
        setErrorField(errorField, "Waga jest niepoprawna!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateJobType(jobType) {
    const errorField = document.getElementById("jobError");
    if(jobType === "") {
        setErrorField(errorField, "Typ pracy jest wymagany!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateDietPurpose(purpose) {
    const errorField = document.getElementById("dietPurposeError");
    if (purpose === "") {
        setErrorField(errorField, "Cel diety jest wymagany!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateDataProcessingConsent(dataProcessingConsent) {
    const errorField = document.getElementById("dataProcessingConsentError");
    if (!dataProcessingConsent) {
        setErrorField(errorField, "Data processing consent is required!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}

function validateStatute(statute) {
    const errorField = document.getElementById("statuteError");
    if (!statute) {
        setErrorField(errorField, "Accepting Statute is required!");
        return false;
    }
    errorField.style.visibility = "hidden";
    return true;
}