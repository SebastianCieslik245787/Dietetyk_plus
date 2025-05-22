import "../style/ProgressJournal.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import {CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {useState} from "react";
import {validateProgressJournal} from "../scripts/validateData/validateProgressJournal.js";
import {journalDataOperations, getEdgeValue} from "../scripts/journalDataOperations.js";
import {getCurrentDate} from "../scripts/dateFunctions.js";
import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";

const CustomTooltip = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Dzień: ${label}`}</p>
                <p className="label">{`Wartość: ${payload[0].value}`}</p>
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

    const doesTodaysDataExist = userData.medicalData.journal[userData.medicalData.journal.length-1].date === getCurrentDate()
    const [todaysData, setTodaysData] = useState(doesTodaysDataExist ? userData.medicalData.journal[userData.medicalData.journal.length-1] : {
        "date": getCurrentDate(),
        "weight": -1,
        "glucose": -1,
        "pressure": -1
    })

    const updatesetTodaysData = (value) => {
        setTodaysData(prev => ({
            ...prev,
            [dataTypes[active]]: Number(value)
        }));
    };

    const data = journalDataOperations(userData.medicalData.journal);
    const dataTypes = ["weight", "glucose", "pressure"];
    const dataTypesLabels = ["Waga", "Poziom cukru", "Ciśnienie"];

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleUpdate = () => {
        if (active === 0) {
            if (validateProgressJournal(inputValue, setError)) {
                setIsWeightEdited(true);
                updatesetTodaysData(inputValue);
            }
        }
        else if( active === 1) {
            if (validateProgressJournal(inputValue, setError)) {
                setIsBloodSugarEdited(true);
                updatesetTodaysData(inputValue);
            }
        }
        else{
            if (validateProgressJournal(inputValue, setError)) {
                setIsBloodPressureEdited(true);
                updatesetTodaysData(inputValue);
            }
        }
    }

    const setHidden = () => {
        if(active === 0 && isWeightEdited) {

        }
    }

    const handleClick = (value) => {
        setActive(value)
        setError("")
        setInputValue("")
    }
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
                            Ciśnienie
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
                    <div className={"progress-journal-chart"}>
                        <LineChart
                            width={1350}
                            height={520}
                            data={[...data[active], ...(todaysData[dataTypes[active]] === -1 ? [] : [{"date": todaysData.date, [dataTypes[active]]: todaysData[dataTypes[active]]}])]}
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
                                    getEdgeValue([...data[active], ...(todaysData[dataTypes[active]] === -1 ? [] : [{"date": todaysData.date, [dataTypes[active]]: todaysData[dataTypes[active]]}])], dataTypes[active], "min"),
                                    getEdgeValue([...data[active], ...(todaysData[dataTypes[active]] === -1 ? [] : [{"date": todaysData.date, [dataTypes[active]]: todaysData[dataTypes[active]]}])], dataTypes[active], "max")
                                ]}
                            >
                                <Label value={dataTypesLabels[active]} position="insideLeft" angle={-90}
                                       offset={-45}/>
                            </YAxis>
                            <Tooltip content={CustomTooltip}/>
                            <Line type={"natural"} dataKey={dataTypes[active]} stroke="#3c6fb2"/>
                        </LineChart>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressJournal;