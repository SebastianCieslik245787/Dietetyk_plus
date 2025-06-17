export async function getAllMeals(cookies) {
    const response = await fetch(
        "/api/meals",
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

            const mealsKeys = [];
            const mealsData = [];
            for (const meal of data) {
                mealsKeys.push(Object.keys(meal)[0]);
                mealsData.push(Object.values(meal)[0]);
            }
            return [mealsKeys, mealsData];
        }

        case 401:
            console.log("Niepoprawne dane logowania");
            break;
        default:
            console.log("Wystąpił nieznany błąd. Spróbuj ponownie później." + response.status);
    }
    return [[], []]
}