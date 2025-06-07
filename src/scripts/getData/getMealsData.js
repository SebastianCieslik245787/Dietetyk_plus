export function getAllMeals(cookies){
    fetch(
        "/api/meals",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["User-Key"],
            },
        }
    ).then(res => res.json()
    ).then(data => {
        if (data.status === 200) {
            return data.data
        } else {
            console.error("Error fetching ingredients:", data.message)
            return []
        }
    }).catch(error => {
        console.error("Error fetching ingredients:", error)
        return []
    });
    return []
}