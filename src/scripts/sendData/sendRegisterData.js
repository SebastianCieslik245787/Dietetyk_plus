import {getCurrentDate} from "../dateFunctions.js";

export function sendRegisterData(data){
    const { dataProcessingConsent: _, statute: __, confirmPassword: ___, height, weight, gender, diseases, allergies, otherDiseases, otherAllergies, ...filteredData } = data;
    otherDiseases.split(",")
        .forEach((item) => {
            item.split("\n").forEach(item2 => {
                if (item2.trim() !== "") {
                    diseases.push(item2.trim());
                }
            })
        })
    otherAllergies.split(",")
        .forEach((item) => {
            item.split("\n").forEach(item2 => {
                if (item2.trim() !== "") {
                    allergies.push(item2.trim());
                }
            })
        })
    filteredData.medicalData = {
        height: height,
        weight: weight,
        gender: gender === "female",
        diseases: diseases,
        allergies: allergies,
        journal: []
    };
    filteredData.dieteticId = "";
    filteredData.currentDietId = "";
    filteredData.img_b64 = "";
    filteredData.description = "";
    filteredData.role = "user";
    filteredData.lastUpdated = getCurrentDate()

    const jsonRegisterData = JSON.stringify(filteredData, null, 2);
    // console.log(jsonRegisterData);

   fetch(
       "/api/register",
       {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: jsonRegisterData
       }
   ).then(r => {console.log(r.status)})
}