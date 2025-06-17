import {getDataFromLocalStorage} from "../getDataFromLocalStorage.js";
import {sendUpdateDietPlanData} from "./sendDietPlanData.js";

export function changeUserDietetic(type, userOrDietitianId, cookies) {
    fetch(
        `/api/update/dietetic/${type}/${userOrDietitianId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies['User-Key'],
            },

        }
    ).then(r => {
        switch (r.status) {
            case 200:
                r.text().then(resp => {
                    console.log(resp);
                })
                if (type === "add"){
                    const userData = getDataFromLocalStorage("");
                    userData.dieteticId = userOrDietitianId;
                    localStorage.removeItem("User-Data");
                    localStorage.setItem("User-Data", JSON.stringify(userData));
                }
                break;
            case 401:
                alert("Niepoprawne dane logowania");
                break;
            default:
                alert("Wystąpił nieznany błąd. Spróbuj ponownie później.");
        }
    })
}

export function changeUserDietPlan(userId, dietId, cookies, dietData = null) {
    if (userId === dietId){
        sendUpdateDietPlanData(userId, dietData, cookies);
    }

    fetch(
        `/api/update/patient/${userId}/${dietId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies['User-Key'],
            },
        }
    ).then(r => {
        switch (r.status) {
            case 200:
                r.text().then(resp => {
                    console.log(resp);
                })
                break;
            case 401:
                alert("Niepoprawne dane logowania");
                break;
            default:
                alert("Wystąpił nieznany błąd. Spróbuj ponownie później.");
        }
    })
}