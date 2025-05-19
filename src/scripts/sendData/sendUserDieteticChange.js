export function changeUserDietetic(type, userOrDietitianId, cookies, setCookies) {
    fetch(
        `/api/update/dietetic/${type}/${userOrDietitianId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "User-Key": cookies['User-Key'],
            },

        }
    ).then(r => {
        switch (r.status) {
            case 200:
                r.text().then(resp => {
                    console.log(resp);
                })
                if (type === "add"){
                    const userData = cookies['User-Data'];
                    userData.dieteticId = userOrDietitianId;
                    setCookies("User-Data", userData);
                }
                break;
            case 401:
                alert("Niepoprawne dane logowania");
                break;
            default:
                alert("Wystąpił nieznany błąd. Spróbuj ponownie później.");
        }
    })
}