export function sendMealData(recipe, cookies) {
    recipe.img_b64 = ""

    fetch(
        "/api/meal",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
            body: JSON.stringify(recipe),
        }
    ).then(res =>{
        switch (res.status) {
            case 200:
                res.text().then(resp => {
                    console.log(resp);
                });
                break;
            case 400:
                res.text().then(resp => {
                    console.error("Bad Request:", resp);
                });
                break;
            case 401:
                res.text().then(resp => {
                    console.error("Unauthorized:", resp);
                });
                break;
            case 500:
                res.text().then(resp => {
                    console.error("Server Error:", resp);
                });
                break;
            default:
                console.error("Unexpected response status:", res.status);
        }
        }
    ).catch(err => {
        console.error("There was a problem with the fetch operation:", err);
    });
}

//NOTE Fix this
export function sendUpdateMealData(id, recipe, cookies) {
    recipe.img_b64 = ""

    return fetch(
        "/api/update/meal/" + id,
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

export function sendDeleteMealData(id, cookies) {
    console.log("Deleting meal with ID:", id);
    return fetch(
        "/api/delete/meal/" + id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
        }
    ).then(res => {
        switch (res.status) {
            case 200:
                res.text().then(resp => {
                    console.log(resp);
                });
                break;
            case 401:
                res.text().then(resp => {
                    console.error("Unauthorized:", resp);
                });
                break;
            default:
                res.text().then(resp => {
                    console.error("Error:", resp);
                });
        }
    });
}