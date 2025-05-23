export function changeUserData(cookies, data){
    const currentUserData = cookies['User-Data'];
    currentUserData.email = data.userEmail
    currentUserData.phone = data.userPhone
    postNewData(cookies['User-Key'], currentUserData);
}

export function changeUserPassword(cookies, data){
    const currentUserData = cookies['User-Data'];
    currentUserData.password = data.userNewPassword
    postNewData(cookies['User-Key'], currentUserData);
}

export function changeUserDescription(cookies, data){
    const currentUserData = cookies['User-Data'];
    currentUserData.description = data.userDescription
    postNewData(cookies['User-Key'], currentUserData);
}

function postNewData(userKey, data){
    fetch("/api/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": userKey,
        },
        body: JSON.stringify(data)
    }).then(r => {
        /*TODO powiadomienie o potencjalnym błędzie*/
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