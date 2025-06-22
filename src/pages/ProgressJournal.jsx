import "../style/ProgressJournal.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import {CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import {
    validateProgressJournal,
    validateProgressJournalPressureAndPulse
} from "../scripts/validateData/validateProgressJournal.js";
import {journalDataOperations, getEdgeValue, getPartialData} from "../scripts/journalDataOperations.js";
import {getCurrentDate} from "../scripts/dateFunctions.js";
import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";
import CreatorSelect from "../assets/elements/creator/CreatorSelect.jsx";
import {timePeriod, timePeriodValues} from "../data/SelectOptionsData.js";
import {useConnection} from "../assets/ConnectionProvider.jsx";
import Error from "../assets/elements/error_page/Error.jsx";
import {sendUserJournalDataChange} from "../scripts/sendData/sendUserMedicalDataChange.js";
import {useCookies} from "react-cookie";

const CustomTooltip = ({active, payload, label, activeType}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Dzień: ${label}`}</p>
                {
                    activeType === 2
                        ? (
                            <>
                                <p className="label">{`Ciśnienie: ${payload[0]?.value}`}</p>
                                <p className="label">{`Puls: ${payload[1]?.value}`}</p>
                            </>
                        )
                        : (
                            activeType === 0 ? <p className="label">{`Waga: ${payload[0].value}`}</p> :
                                <p className="label">{`Poz. Cukru: ${payload[0].value}`}</p>
                        )
                }
            </div>
        );
    }

    return null;
};

function ProgressJournal() {
    const {isConnected} = useConnection();

    const [active, setActive] = useState(0);
    const [isWeightEdited, setIsWeightEdited] = useState(false);
    const [isBloodSugarEdited, setIsBloodSugarEdited] = useState(false);
    const [isBloodPressureEdited, setIsBloodPressureEdited] = useState(false);
    const [error, setError] = useState("");
    const userData = getDataFromLocalStorage("")

    const [cookies] = useCookies(["User-Key"])
// Poprawiona inicjalizacja todayData:
    const lastJournalEntry = userData.medicalData.journal.length > 0
        ? userData.medicalData.journal[userData.medicalData.journal.length - 1]
        : null;
    const [todayData, setTodayData] = useState(
        lastJournalEntry && lastJournalEntry.date === getCurrentDate()
            ? lastJournalEntry
            : {
                "date": getCurrentDate(),
                "weight": -1,
                "glucose": -1,
                "pressure": -1,
            }
    )

    const saveJournalDataToDB = async (newJournal) => {
        console.log("Zapisz dane do bazy:", newJournal);
        await sendUserJournalDataChange(newJournal, cookies)
    };


    const data = journalDataOperations(userData.medicalData.journal);
    const dataTypes = ["weight", "glucose", "pressure", "pulse"];
    const dataTypesLabels = ["Waga [kg]", "Poziom cukru", "Ciśnienie / Puls"];

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => setInputValue(e.target.value);

    // Funkcja filtrująca dane do wykresu i funkcji pomocniczych
    const filterValidData = (dataArr, type) => {
        if (type === 2) {
            // ciśnienie i puls
            return dataArr.filter(
                d => d[dataTypes[2]] !== -1 && d[dataTypes[3]] !== -1
            );
        } else {
            return dataArr.filter(
                d => d[dataTypes[type]] !== -1
            );
        }
    };

    const handleUpdate = () => {
        let newTodayData = {...todayData};
        if (active === 0) {
            if (validateProgressJournal(inputValue, setError)) {
                setIsWeightEdited(true);
                newTodayData.weight = Number(inputValue);
                if (typeof newTodayData.glucose !== "number") newTodayData.glucose = -1;
                if (typeof newTodayData.pressure !== "number") newTodayData.pressure = -1;
                if (typeof newTodayData.pulse !== "number") newTodayData.pulse = -1;
            } else return;
        } else if (active === 1) {
            if (validateProgressJournal(inputValue, setError)) {
                setIsBloodSugarEdited(true);
                newTodayData.glucose = Number(inputValue);
                if (typeof newTodayData.weight !== "number") newTodayData.weight = -1;
                if (typeof newTodayData.pressure !== "number") newTodayData.pressure = -1;
                if (typeof newTodayData.pulse !== "number") newTodayData.pulse = -1;
            } else return;
        } else {
            if (validateProgressJournalPressureAndPulse(inputValue, setError)) {
                setIsBloodPressureEdited(true);
                let temp = inputValue.split("/");
                newTodayData.pressure = Number(temp[0]);
                newTodayData.pulse = Number(temp[1]);
                if (typeof newTodayData.weight !== "number") newTodayData.weight = -1;
                if (typeof newTodayData.glucose !== "number") newTodayData.glucose = -1;
            } else return;
        }

        setTodayData(newTodayData);

        let journal = [...userData.medicalData.journal];
        const todayIndex = journal.findIndex(j => j.date === getCurrentDate());
        if (todayIndex !== -1) {
            journal[todayIndex] = {...journal[todayIndex], ...newTodayData};
        } else {
            journal.push({...newTodayData});
        }
        saveJournalDataToDB(journal);
    };

    const getChartData = () => {
        let baseData = [...data[active]];
        baseData = filterValidData(baseData, active);

        let todayValid = false;
        if (active === 2) {
            todayValid = todayData.pressure !== -1 && todayData.pulse !== -1;
        } else {
            todayValid = todayData[dataTypes[active]] !== -1;
        }
        if (todayValid) {
            baseData = [...baseData, {
                date: todayData.date,
                [dataTypes[active]]: todayData[dataTypes[active]],
                ...(active === 2 ? {[dataTypes[active + 1]]: todayData[dataTypes[active + 1]]} : {})
            }];
        }
        return baseData;
    };

    const handleClick = (value) => {
        setActive(value)
        setError("")
        setInputValue("")
    }

    const [activeTimePeriod, setActiveTimePeriod] = useState(1);
    return (
        isConnected ? (
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
                            data={getPartialData(getChartData(), activeTimePeriod)}
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
                                    getEdgeValue(getPartialData(getChartData(), activeTimePeriod), dataTypes[active], "min"),
                                    getEdgeValue(getPartialData(getChartData(), activeTimePeriod), dataTypes[active], "max")
                                ]
                                }
                            >
                                <Label value={dataTypesLabels[active]} position="insideLeft" angle={-90}
                                       offset={-45}/>
                            </YAxis>
                            <Tooltip content={(props) => <CustomTooltip {...props} activeType={active}/>}/>
                            <Line type={"natural"} dataKey={dataTypes[active]} stroke="#3c6fb2"/>
                            {
                                active === 2 && (
                                    <Line type="natural" dataKey={dataTypes[active + 1]} stroke="#de0404"/>
                                )
                            }
                        </LineChart>
                    </div>
                </div>
            </div>
        </>) : (
            <Error
                errorCode={"Error 404"}
                errorMessage={"Nie znaleziono strony lub zasobu, którego szukasz."}
            />
        )
    );
}

export default ProgressJournal;
