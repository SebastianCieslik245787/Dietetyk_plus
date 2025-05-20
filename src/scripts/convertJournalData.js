export function convertJournalData(data) {
    const weight = [], glucose = [], pressure = [];
    data.forEach(element => {
        weight.push({
            date: element.date,
            weight: element.weight
        })
        glucose.push({
            date: element.date,
            glucose: element.glucose
        })
        pressure.push({
            date: element.date,
            pressure: element.pressure
        })
    })
    return [weight,glucose,pressure]
}

export function getEdgeValue(data, dataType, valueType) {
    let ret = valueType === "max" ? -Infinity : Infinity;
    data.forEach(element => {
        if (dataType === "weight") {
            element = element.weight
        } else if (dataType === "glucose") {
            element = element.glucose
        } else if (dataType === "pressure") {
            element = element.pressure
        }
        if ((element > ret && valueType === "max") || (element < ret && valueType === "min")) {
            ret = element
        }
    })
    if (ret === -Infinity || ret === Infinity) {
        return 0
    }
    return Number((valueType === "max" ? ret * 1.01 : ret * 0.99).toFixed(1))
    // ret * 1.01 : ret * 0.99 -> aby nad wartościami było trochę miejsca
    // .toFixed(1) -> zaokrąglenie do 1 miejsca po przecinku, ale zamienia na string
    // Number() -> zamienia na liczbę

}