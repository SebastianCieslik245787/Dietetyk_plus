export function Login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(validateEmail(email) && validatePassword(password)){
        document.querySelector(".login-error-label").style.visibility = "hidden";
        //TODO send data to sever
    }
}

function validateEmail(email) {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === "" || !EMAIL_REGEX.test(email)) {
        document.querySelector(".login-error-label").style.visibility = "visible";
        return false;
    }
    return true;
}

function validatePassword(password) {
    if(password === ""){
        document.querySelector(".login-error-label").style.visibility = "visible";
        return false;
    }
    return true;
}