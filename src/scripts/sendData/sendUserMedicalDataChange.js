import {getDataFromLocalStorage} from "../getDataFromLocalStorage.js";

export async function sendUserJournalDataChange(data, cookies) {
    const response = await fetch(
        "/api/journal",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies["User-Key"],
            },
            body: JSON.stringify(data),
        }
    );

    switch (response.status) {
        case 200:
            {
                const userData = getDataFromLocalStorage("")
                userData.medicalData.journal  = data;
                localStorage.removeItem("User-Data");
                localStorage.setItem("User-Data", JSON.stringify(userData));
                return response.text();
            }
        case 401:
            console.log("Niepoprawne dane logowania");
            break;

        default:
            console.log("Wystąpił nieznany błąd. Spróbuj ponownie później." + response.status);
    }
    return null;
}