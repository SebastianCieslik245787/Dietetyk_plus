export function sendMealData(recipe, cookies) {
    recipe.img_b64 = "" //TODO

    return fetch(
        "/api/meals",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
            body: JSON.stringify(recipe),
        }
    )
}

export function sendUpdateMealData(recipe, cookies) {
    recipe.img_b64 = "" //TODO

    return fetch(
        "/api/meals",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
            body: JSON.stringify(recipe),
        }
    )
}