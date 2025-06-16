export function sendDietPlanData(dietPlan, cookies) {
    dietPlan.dietPlan.forEach(day => {
        day.forEach(meal => {
            meal.meal.img_b64 = "";
        });
    });

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
            return response.json().then(
                data => {
                    if (data.error) {
                        throw new Error(data.error);
                    }
                    return data;
                }
            );
        }
    ).catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });
}

export function sendUpdateDietPlanData(id, dietPlan, cookies) {
    dietPlan.dietPlan.forEach(day => {
        day.forEach(meal => {
            meal.meal.img_b64 = ""; //NOTE
        });
    });

   fetch(
       `/update/id/${id}`,
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