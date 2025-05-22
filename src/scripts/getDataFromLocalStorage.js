export function getDataFromLocalStorage(type) {
    if (type === "") return JSON.parse(localStorage.getItem("User-Data"))
    else return JSON.parse(localStorage.getItem("User-Data"))[type];
}