import {timePeriodValues} from "../data/SelectOptionsData.js";

function roundOneDec(num) {
    if (num < 0) return 0;
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
    let max = -Infinity;
    let min = Infinity;
    data.forEach(element => {
        if (dataType === "weight") {
            element = element.weight
        } else if (dataType === "glucose") {
            element = element.glucose
        }
        if (dataType === "pressure") {
            if (element.pressure > max) max = element.pressure
            if (element.pressure < min) min = element.pressure
            if (element.pulse > max) max = element.pulse
            if (element.pulse < min) min = element.pulse
        }
        else {
            if (element > max) max = element
            if (element < min) min = element
        }
    })
    if (max === -Infinity || min === Infinity) {
        return 0
    }
    const diff = max - min;
    return roundOneDec((valueType === "max" ? max + diff*0.1 : min - diff*0.1))

}

export function getPartialData(data, timePeriod){
    let numberOfDays = timePeriodValues[timePeriod];
    if (timePeriodValues[timePeriod] > data.length || timePeriodValues[timePeriod] === -1) {
        numberOfDays = data.length;
    }
    return data.slice(data.length - numberOfDays, data.length)
}