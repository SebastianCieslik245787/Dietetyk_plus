import {timePeriodValues} from "../data/SelectOptionsData.js";

function roundOneDec(num) {
    return Number(num.toFixed(1))
}

function chooseValueBasedOnType(element, dataType) {
    if (dataType === "max"){
        return element.pressure > element.pulse ? element.pressure : element.pulse
    }
    return element.pressure < element.pulse ? element.pressure : element.pulse
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
            prev = data[i]
        }
        // Jeśli to jest ostatni element, to bierzemy tylko poprzedni
        else if (i === data.length - 1) {
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
            pressure: data[i].pressure>0 ? data[i].pressure : roundOneDec((prev.pressure+next.pressure)/2),
            pulse: data[i].pulse>0 ? data[i].pulse : roundOneDec((prev.pulse+next.pulse)/2)
        })
    }
    return fixedData
}

export function journalDataOperations(data) {
    const weight = [], glucose = [], pressure = [], pulse = [];
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
            pressure: element.pressure,
            pulse: element.pulse
        })
        pulse.push({
            date: element.date,
            pulse: element.pulse
        })
    })
    return [weight,glucose,pressure,pulse]
}



export function getEdgeValue(data, dataType, valueType) {
    let ret = valueType === "max" ? -Infinity : Infinity;
    data.forEach(element => {
        if (dataType === "weight") {
            element = element.weight
        } else if (dataType === "glucose") {
            element = element.glucose
        } else if (dataType === "pressure") {
            element = chooseValueBasedOnType(element, dataType)
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

export function getPartialData(data, timePeriod){
    let numberOfDays = timePeriodValues[timePeriod];
    if (timePeriodValues[timePeriod] > data.length || timePeriodValues[timePeriod] === -1) {
        numberOfDays = data.length;
    }
    return data.slice(data.length - numberOfDays, data.length)
}