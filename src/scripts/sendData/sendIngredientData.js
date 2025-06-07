export function sendIngredientData(ingredient, cookies) {
    ingredient.img_b64 = "" //TODO
    fetch(
        "/api/ingredients",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
            body: JSON.stringify(ingredient),
        }
    ).then(r => {
        switch (r.status) {
            case 200:
                r.json().then(data => {
                    console.log(data);
                    return data;
                });
                break;
            case 401:
                alert("Niepoprawne dane logowania");
                break;
            default:
                alert("Wystąpił nieznany błąd. Spróbuj ponownie później.");
        }
    })
}
