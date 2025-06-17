export function validatePersonalData(data, setErrors) {
    let errors = {
        userPassword: '',
        userConfirmPassword: '',
        userNewPassword: '',
        userEmail: '',
        userPhone: ''
    }

    let hasErrors = false

    if (!validateEmail(data.userEmail)) {
        errors.userEmail = "Niepoprawny e-mail"
        hasErrors = true
    }

    if (!validatePhoneNumber(data.userPhone)) {
        errors.userPhone = "Niepoprawny numer telefonu!"
        hasErrors = true
    }

    setErrors(errors)
    return !hasErrors
}

export function validateChangePassword(data, setErrors) {
    let errors = {
        userPassword: '',
        userConfirmPassword: '',
        userNewPassword: '',
        userEmail: '',
        userPhone: ''
    }

    let hasErrors = false

    if (!validatePassword(data.userNewPassword)) {
        errors.userNewPassword = "Niepoprawne hasło!"
        hasErrors = true
    }
    else{
        if(comparePasswords(data.userPassword, data.userNewPassword)){
            errors.userNewPassword = "Hasło nie może być identyczne ze starytm hasłem!"
            hasErrors = true
        }
    }

    if (!comparePasswords(data.userNewPassword, data.userConfirmPassword)) {
        errors.userConfirmPassword = "Hasła nie są identyczne!"
        hasErrors = true
    }

    setErrors(errors)
    return !hasErrors
}

function validateEmail(email){
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return (email !== "" && EMAIL_REGEX.test(email))
}

function validatePhoneNumber(phoneNumber){
    const PHONE_NUMBER_REGEX = /^(?:\+48\s?\d{9}|\+48\s?\d{3}\s\d{3}\s\d{3}|\+48\s?\d{3}-\d{3}-\d{3}|\d{9}|\d{3}\s\d{3}\s\d{3}|\d{3}-\d{3}-\d{3})$/
    return (phoneNumber !== "" && PHONE_NUMBER_REGEX.test(phoneNumber))
}

function validatePassword(password){
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return (password !== "" && PASSWORD_REGEX.test(password))
}

function comparePasswords(password, password2){
    return password === password2
}