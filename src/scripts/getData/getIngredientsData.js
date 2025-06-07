export function getAllIngredients(cookies) {
    return fetch(
        "/api/ingredients",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
        }
    ).then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        response.json().then(data => {
            return data;
        });
    }).catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });

}