import {getDataFromLocalStorage} from "../getDataFromLocalStorage.js";

export function sendChangeUserData(cookies, data){
    const currentUserData = getDataFromLocalStorage("")
    currentUserData.email = data.userEmail
    currentUserData.phone = data.userPhone
    postNewData(cookies['User-Key'], currentUserData);
}

export function sendChangeUserPassword(cookies, data){
    const currentUserData = getDataFromLocalStorage("")
    currentUserData.password = data.userNewPassword
    postNewData(cookies['User-Key'], currentUserData);
}

export function sendChangeUserDescription(cookies, data){
    const currentUserData = getDataFromLocalStorage("")
    currentUserData.description = data
    postNewData(cookies['User-Key'], currentUserData);
}

function postNewData(userKey, data){
    console.log(data)
    fetch("/api/update/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": userKey,
        },
        body: JSON.stringify(data)
    }).then(r => {
        switch (r.status) {
            case 200:
                r.text().then(resp => {
                    console.log(resp);
                    localStorage.removeItem("User-Data");
                    localStorage.setItem("User-Data", JSON.stringify(data));
                })
                break;
            case 401:
                alert("Niepoprawne dane logowania");
                break;
            default:
                alert("Wystąpił nieznany błąd. Spróbuj ponownie później.");
        }
    })
}