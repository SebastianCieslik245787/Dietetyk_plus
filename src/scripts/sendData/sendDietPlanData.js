export function sendDietPlanData(dietPlan, cookies) {
    fetch(
        "/api/dietPlan",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
            body: JSON.stringify(dietPlan),
        }
    ).then(
        response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        }
    ).catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });
}

export function sendUpdateDietPlanData(id, dietPlan, cookies) {
   fetch(
       `/api/update/dietPlan/${id}`,
       {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "Authorization": cookies["user-key"],
           },
           body: JSON.stringify(dietPlan),
       }
   ).then(r => {
           switch (r.status) {
               case 200:
                   r.text().then(resp => {
                       console.log(resp);
                   });
                   break;
               case 401:
                   alert("Niepoprawne dane logowania");
                   break;
               default:
                   alert("Wystąpił nieznany błąd. Spróbuj ponownie później.");
           }
       }
   );
}

export function sendDeleteDietPlanData(id, cookies) {
    fetch(
        `/api/delete/dietPlan/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["user-key"],
            },
        }
    ).then(r => {
        switch (r.status) {
            case 200:
                r.text().then(resp => {
                    console.log(resp);
                });
                break;
            case 401:
                alert("Niepoprawne dane logowania");
                break;
            default:
                alert("Wystąpił nieznany błąd. Spróbuj ponownie później.");
        }
    });
}