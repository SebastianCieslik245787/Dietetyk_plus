import "../style/ProgressJournal.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import {CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import {validateProgressJournal} from "../scripts/validateData/validateProgressJournal.js";
import {journalDataOperations, getEdgeValue, getPartialData} from "../scripts/journalDataOperations.js";
import {getCurrentDate} from "../scripts/dateFunctions.js";
import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";
import CreatorSelect from "../assets/elements/creator/CreatorSelect.jsx";
import {timePeriod, timePeriodValues} from "../data/SelectOptionsData.js";

const CustomTooltip = ({active, payload, label, activeType}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Dzień: ${label}`}</p>
                {
                    activeType === 2
                        ? (
                            <>
                                <p className="label">{`Ciśnienie skurczowe: ${payload[0]?.value}`}</p>
                                <p className="label">{`Ciśnienie rozkurczowe: ${payload[1]?.value}`}</p>
                            </>
                        )
                        : <p className="label">{`Wartość: ${payload[0].value}`}</p>
                }
            </div>
        );
    }

    return null;
};

function ProgressJournal() {
    const [active, setActive] = useState(0);
    const [isWeightEdited, setIsWeightEdited] = useState(false);
    const [isBloodSugarEdited, setIsBloodSugarEdited] = useState(false);
    const [isBloodPressureEdited, setIsBloodPressureEdited] = useState(false);
    const [error, setError] = useState("");
    const userData = getDataFromLocalStorage("")

    const doesTodayDataExist = userData.medicalData.journal[userData.medicalData.journal.length-1]?.date === getCurrentDate()
    const [todayData, setTodayData] = useState(doesTodayDataExist ? userData.medicalData.journal[userData.medicalData.journal.length-1] : {
        "date": getCurrentDate(),
        "weight": -1,
        "glucose": -1,
        "pressure": -1
    })

    const updateSetTodayData = (value) => {
        setTodayData(prev => ({
            ...prev,
            [dataTypes[active]]: Number(value)
        }));
    };

    const data = journalDataOperations(userData.medicalData.journal);
    const dataTypes = ["weight", "glucose", "pressure", "pulse"];
    const dataTypesLabels = ["Waga [kg]", "Poziom cukru", "Ciśnienie / Puls"];

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) =>  setInputValue(e.target.value);

    const handleUpdate = () => {
        if (active === 0) {
            if (validateProgressJournal(inputValue, setError)) {
                setIsWeightEdited(true);
                updateSetTodayData(inputValue);
            }
        }
        else if( active === 1) {
            if (validateProgressJournal(inputValue, setError)) {
                setIsBloodSugarEdited(true);
                updateSetTodayData(inputValue);
            }
        }
        else{
            if (validateProgressJournal(inputValue, setError)) {
                setIsBloodPressureEdited(true);
                updateSetTodayData(inputValue);
            }
        }
    }

    const handleClick = (value) => {
        setActive(value)
        setError("")
        setInputValue("")
    }

    const [activeTimePeriod, setActiveTimePeriod] = useState(1);
    useEffect(() => {
        console.log(getPartialData(active === 2 ? [
            ...data[active],
            ...(todayData[dataTypes[active]] === -1 ? [] : [{
                date: todayData.date,
                [dataTypes[active]]: todayData[dataTypes[active]],
                [dataTypes[active+1]]: todayData[dataTypes[active+1]],
            }])
        ] : [
            ...data[active],
            ...(todayData[dataTypes[active]] === -1 ? [] : [{
                date: todayData.date,
                [dataTypes[active]]: todayData[dataTypes[active]]
            }])
        ], timePeriodValues[activeTimePeriod]))
    }, [active, activeTimePeriod, data, dataTypes, todayData]);
    return (
        <>
            <NavigationBar/>
            <div className={"progress-journal-container"}>
                <div className={"progress-journal"}>
                    <div className={"progress-journal-menu"}>
                        <div className={`progress-journal-menu-option ${active === 0 ? 'active' : ''}`}
                             onClick={() => handleClick(0)}>
                            Waga
                            <div className={"progress-journal-menu-option-bottom-bar"}/>
                        </div>
                        <div className={`progress-journal-menu-option  ${active === 1 ? 'active' : ''}`}
                             onClick={() => handleClick(1)}>
                            Poziom cukru
                            <div className={"progress-journal-menu-option-bottom-bar"}/>
                        </div>
                        <div className={`progress-journal-menu-option  ${active === 2 ? 'active' : ''}`}
                             onClick={() => handleClick(2)}>
                            Ciśnienie i Puls
                            <div className={"progress-journal-menu-option-bottom-bar"}/>
                        </div>
                        <div
                            style={(active === 0 && isWeightEdited) || (active === 1 && isBloodSugarEdited) || (active === 2 && isBloodPressureEdited) ? {visibility: 'hidden'} : {}}>
                            <div className={"progress-journal-menu-update-button"} onClick={handleUpdate}>
                                Aktualizuj
                            </div>
                            <input value={inputValue} onChange={handleChange} type="text"
                                   className={"progress-journal-menu-input"}
                                   placeholder={"Wpisz aktualną wartość..."}/>
                            <div className={`progress-journal-menu-error ${error !== '' ? 'visible' : ''}`}>
                                {error}
                            </div>
                        </div>
                    </div>
                    <div className={"progress-journal-select-period"}>
                        <CreatorSelect
                            options={timePeriod}
                            active={activeTimePeriod}
                            setActive={setActiveTimePeriod}
                        />
                    </div>
                    <div className={"chart-legend"}>
                        <div className={"chart-legend-item"}>
                            <div className={"chart-legend-item-circle"}/>
                            <div className={"chart-legend-item-description"}>
                                {active === 0 ? 'Waga' : (active === 1 ? 'Poziom cukru' : 'Ciśnienie')}
                            </div>
                        </div>
                        {
                            active === 2 && (
                                <>
                                    <div className={"chart-legend-item"}>
                                        <div className={"chart-legend-item-circle second"}/>
                                        <div className={"chart-legend-item-description second"}>
                                            Puls
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className={"progress-journal-chart"}>
                        <LineChart
                            width={1350}
                            height={550}
                            data={getPartialData(active === 2 ? [
                                ...data[active],
                                ...(todayData[dataTypes[active]] === -1 ? [] : [{
                                    date: todayData.date,
                                    [dataTypes[active]]: todayData[dataTypes[active]],
                                    [dataTypes[active+1]]: todayData[dataTypes[active+1]],
                                }])
                            ] : [
                                ...data[active],
                                ...(todayData[dataTypes[active]] === -1 ? [] : [{
                                    date: todayData.date,
                                    [dataTypes[active]]: todayData[dataTypes[active]]
                                }])
                            ], activeTimePeriod)}
                            margin={{top: 20, right: 50, bottom: 40, left: 60}}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="10 10"/>
                            <XAxis
                                dataKey="date"
                                dot={true}
                                interval={5}
                                tickMargin={10}
                            >
                                <Label value="Dzień" offset={-25} position="insideBottom"/>
                            </XAxis>
                            <YAxis
                                tickCount={25}
                                interval={5}
                                tickMargin={10}
                                dot={true}
                                dataKey={dataTypes[active]}
                                domain={[
                                    getEdgeValue(getPartialData([...data[active], ...(todayData[dataTypes[active]] === -1 ? [] : [{"date": todayData.date, [dataTypes[active]]: todayData[dataTypes[active]]}])], activeTimePeriod), dataTypes[active], "min"),
                                    getEdgeValue(getPartialData([...data[active], ...(todayData[dataTypes[active]] === -1 ? [] : [{"date": todayData.date, [dataTypes[active]]: todayData[dataTypes[active]]}])], activeTimePeriod), dataTypes[active], "max")
                                ]
                            }
                            >
                                <Label value={dataTypesLabels[active]} position="insideLeft" angle={-90}
                                       offset={-45}/>
                            </YAxis>
                            <Tooltip content={CustomTooltip}/>
                            <Line type={"natural"} dataKey={dataTypes[active]} stroke="#3c6fb2"/>
                            {
                                active === 2 && (
                                    <Line type="natural" dataKey={dataTypes[active+1]} stroke="#de0404"/>
                                )
                            }
                        </LineChart>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressJournal;