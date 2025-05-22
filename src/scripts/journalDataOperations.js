function roundOneDec(num) {
    return Number(num.toFixed(1))
}

function fixJournalData(data) {
    const fixedData = [];
    let next, prev;
    for (let i = 0; i < data.length; i++) {

        // Jeśli któreś z danych jest równa -1 (czyli < 0)
        // to za wynik przyjmujemy średnią z sąsiednich wartości

        // Jeśli to jest pierwszy element, to bierzemy tylko następny
        if (i === 0) {
            next = data[i + 1]
            prev = data[i + 1]
        }
        // Jeśli to jest ostatni element, to bierzemy tylko poprzedni
        else if (i === fixedData.length - 1) {
            next = data[i - 1]
            prev = data[i - 1]
        } else {
            next = data[i + 1]
            prev = data[i - 1]
        }

        fixedData.push({
            date: data[i].date,
            weight: data[i].weight>0 ? data[i].weight : roundOneDec((prev.weight+next.weight)/2),
            glucose: data[i].glucose>0 ? data[i].glucose : roundOneDec((prev.glucose+next.glucose)/2),
            pressure: data[i].pressure>0 ? data[i].pressure : roundOneDec((prev.pressure+next.pressure)/2)
        })
    }
    return fixedData
}

export function journalDataOperations(data) {
    const weight = [], glucose = [], pressure = [];
    data = fixJournalData(data)
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
    return roundOneDec((valueType === "max" ? ret * 1.01 : ret * 0.99))

}