export async function sendIngredientData(ingredient, cookies) {
    const response = await fetch(
        "/api/ingredient",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
            body: JSON.stringify(ingredient),
        }
    )
    switch (response.status) {
        case 200: {
            return response.text();
        }
        case 401:
            console.log("Niepoprawne dane logowania");
            break;
        default:
            console.log("Wystąpił nieznany błąd. Spróbuj ponownie później." + response.status);
    }
    return ""
}

export function sendUpdateIngredientData(id, ingredient, cookies) {
    return fetch(
        "/api/update/ingredient/" + id,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
            body: JSON.stringify(ingredient),
        }
    )
}

export function sendDeleteIngredientData(id, cookies) {
    return fetch(
        "/api/delete/ingredient/" + id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
        }
    )
}
