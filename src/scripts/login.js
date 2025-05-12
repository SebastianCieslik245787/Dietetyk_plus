export function Login(setCookie, navigate) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(validateEmail(email) && validatePassword(password)){
        document.querySelector(".login-error-label").style.visibility = "hidden";
        //TODO send data to server
        fetch(
            "/api/login",
            {
                method: "POST",
                headers : {
                    "Content-Type": "application/json",
                    "Accept": "*"
                },
                body: JSON.stringify({ email, password }),
            }
        ).then(r => {
            switch(r.status){
                case 200:
                    setCookie("User-Key", r.headers.get("User-Key"), { path: '/' });
                    navigate("/home");
                    break;
                case 401:
                    document.querySelector(".login-error-label").style.visibility = "visible";
                    break;
                default:
                    alert("Wystąpił nieznany błąd. Spróbuj ponownie później.");
            }
        })
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