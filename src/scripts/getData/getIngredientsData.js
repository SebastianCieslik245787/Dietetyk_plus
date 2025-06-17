export async function getAllIngredients(cookies) {
    const response = await fetch(
        "/api/ingredients",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["User-Key"],
            },
        }
    )
    switch (response.status) {
        case 200: {
            const data = await response.json()
            if (data.error) {
                console.log(data.error);
            }

            const ingredientsKeys = [];
            const ingredientsData = [];
            for (const ingredient of data) {
                ingredientsKeys.push(Object.keys(ingredient)[0]);
                ingredientsData.push(Object.values(ingredient)[0]);
            }
            return [ingredientsKeys, ingredientsData];
        }

        case 401:
            console.log("Niepoprawne dane logowania");
            break;
        default:
            console.log("Wystąpił nieznany błąd. Spróbuj ponownie później." + response.status);
    }
    return [[], []]
}