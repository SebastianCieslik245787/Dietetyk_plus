async function getUsersData(cookies, type){
    try {
        const response = await fetch(
            `/api/${type}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "User-Key": cookies['User-Key'],
                },
            }
        );

        switch (response.status) {
            case 200:
                { const data = await response.json();
                return data || []; }
            case 401:
                alert("Niepoprawne dane logowania");
                return [];
            default:
                alert(`Wystąpił nieznany błąd serwera (${response.status}). Spróbuj ponownie później.`);
                return [];
        }
    } catch (error) {
        console.error(`Błąd podczas pobierania "${type}":`, error);
        alert("Wystąpił błąd sieciowy. Spróbuj ponownie później.");
        return [];
    }
}

export async function getPatientsData(cookies){
    return await getUsersData(cookies, "patients");
}

export async function getDietitiansData(cookies){
    return await getUsersData(cookies, "dietitians");
}