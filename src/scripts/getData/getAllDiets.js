export function getAllDiets(cookies) {
    return fetch(
        "/api/diets",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
        }
    )
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        response.json().then(
            data => {
                if (data.length === 0) {
                    console.log("No diets found.");
                } else {
                    console.log("Diets retrieved successfully:", data);
                    return data;
                }
            }
        );
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });

}