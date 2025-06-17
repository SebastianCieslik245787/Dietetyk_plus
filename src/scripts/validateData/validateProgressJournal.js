const dataRegex = /^[1-9][0-9]*(\.[0-9]+)?$/;

export function validateProgressJournal(data, setError){
    if(!dataRegex.test(data)){
        setError("Wprowadzana wartość musi być liczbą dodatnią")
        return false;
    }
    setError("");
    return true
}

export function validateProgressJournalPressureAndPulse(data, setError){
    let temp = data.split("/");
    if(temp.length < 2){
        setError("Wprowadzana wartość dla ciśnienia i pulsu odzielając ich wartości \"/\"")
        return false;
    }
    if(!dataRegex.test(temp[0])){
        setError("Wprowadzana wartość musi być liczbą dodatnią")
        return false;
    }
    if(!dataRegex.test(temp[1])){
        setError("Wprowadzana wartość musi być liczbą dodatnią")
        return false;
    }
    console.log(temp)
    setError("");
    return true
}