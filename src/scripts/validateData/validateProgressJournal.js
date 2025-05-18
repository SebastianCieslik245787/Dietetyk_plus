export function validateProgressJournal(data, setError){
    const dataRegex = /^[1-9][0-9]*$/;
    if(!dataRegex.test(data)){
        setError("Wprowadzana wartość musi być liczbą dodatnią")
        return false;
    }
    setError("");
    return true
}