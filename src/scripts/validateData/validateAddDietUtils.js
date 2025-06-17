export function validateAddDiet(setErrors, data){
    let errorName = ""
    let errorDescription = ""

    if(data.name === "") errorName = "Brak nazwy diety!"
    if(data.description === "") errorDescription = "Brak opisu diety!"

    setErrors({
        name: errorName,
        description: errorDescription,
    })

    return errorName === "" && errorDescription === "";
}