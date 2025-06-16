export async function getAllDiets(cookies) {
    const response = await fetch(
        "/api/dietPlans",
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

            const dietPlansKeys = [];
            const dietPlansData = [];
            for (const dietPlan of data) {
                dietPlansKeys.push(Object.keys(dietPlan)[0]);
                dietPlansData.push(Object.values(dietPlan)[0]);
            }
            return [dietPlansKeys, dietPlansData];
        }

        case 401:
            console.log("Niepoprawne dane logowania");
            break;
        default:
            console.log("Wystąpił nieznany błąd. Spróbuj ponownie później." + response.status);
    }
    return [[], []]
}


export async function getDietPlanData(id, cookies) {
    const response = await fetch(
        `/api/dietPlan/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
        }
    )
    switch (response.status) {
        case 200: {
            const data = await response.json()
            if (data.error) {
                console.log(data.error);
            }

            return data;
        }

        case 401:
            console.log("Niepoprawne dane logowania");
            break;
        default:
            console.log("Wystąpił nieznany błąd. Spróbuj ponownie później." + response.status);
    }
    return []
}