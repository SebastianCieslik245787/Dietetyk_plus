export function getDietPlanData(id, cookies) {
    return fetch(
        `/api/dietPlan/${id}`,
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
            return response.json().then(
                data => {
                    if (data.error) {
                        throw new Error(data.error);
                    }
                    return data;
                }
            );
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
}