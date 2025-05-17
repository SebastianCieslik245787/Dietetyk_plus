export function changeUserData(setCookies, cookies, data){
    const currentUserData = cookies['User-Data'];
    currentUserData.email = data.userEmail
    currentUserData.phone = data.userPhone
    postNewData(setCookies, cookies['User-Key'], currentUserData);
}

export function changeUserPassword(setCookies, cookies, data){
    const currentUserData = cookies['User-Data'];
    currentUserData.password = data.userNewPassword
    postNewData(setCookies, cookies['User-Key'], currentUserData);
}

export function changeUserDescription(setCookies, cookies, data){
    const currentUserData = cookies['User-Data'];
    currentUserData.description = data.userDescription
    postNewData(setCookies, cookies['User-Key'], currentUserData);
}

export function changeUserDietetic(userData, cookies){
    /*TODO*/
    console.log(userData, cookies)
}

function postNewData(setCookies, userKey, data){
    fetch("/api/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Key": userKey,
        },
        body: JSON.stringify(data)
    }).then(r => {
        /*TODO powiadomienie o potencjalnym błędzie*/
        switch (r.status) {
            case 200:
                r.text().then(resp => {
                    console.log(resp);
                    if (setCookies) setCookies("User-Data", data, {path: "/"});
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