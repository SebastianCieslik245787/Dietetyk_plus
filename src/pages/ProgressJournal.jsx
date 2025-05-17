import "../style/ProgressJournal.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import {CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {weightChartData} from "../data/WeightChartData.js";
import {useState} from "react";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Dzień: ${label}`}</p>
                <p className="label">{`Waga: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

function ProgressJournal() {
    const [active, setActive] = useState(0);
    const [isWeightEdited, setIsWeightEdited] = useState(false);
    const [isBloodSugarEdited, setIsBloodSugarEdited] = useState(false);

    return (
        <>
            <NavigationBar/>
            <div className={"progress-journal-container"}>
                <div className={"progress-journal"}>
                    <div className={"progress-journal-menu"}>
                        <div className={`progress-journal-menu-option ${active === 0 ? 'active' : ''}`} onClick={() => setActive(0)}>
                            Waga
                            <div className={"progress-journal-menu-option-bottom-bar"}/>
                        </div>
                        <div className={`progress-journal-menu-option  ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
                            Poziom cukru
                            <div className={"progress-journal-menu-option-bottom-bar"}/>
                        </div>
                        <div style={active === 0 ? (isWeightEdited ? {visibility: "hidden"}: {}) : (isBloodSugarEdited ? {visibility: "hidden"}: {})}>
                            <div className={"progress-journal-menu-update-button"} onClick={active === 0 ? () => setIsWeightEdited(true) : () => setIsBloodSugarEdited(true)}>
                                Aktualizuj
                            </div>
                            <input type="text" className={"progress-journal-menu-input"}
                                   placeholder={active === 0 ? "Wpisz aktualną wage..." : "Wpisz aktualny poziom cukru..."}/>
                        </div>
                    </div>
                    <div className={"progress-journal-chart"}>
                        <LineChart width={1350} height={520} data={weightChartData}
                                   margin={{top: 20, right: 50, bottom: 40, left: 40}}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="10 10"/>
                            <XAxis
                                dataKey="date"
                                dot={true}
                                interval={5}
                                tickMargin={10}
                            >
                                <Label value="Dzień" offset={-25} position="insideBottom" />
                            </XAxis>
                            <YAxis
                                tickCount={20}
                                interval={5}
                                tickMargin={10}
                                dot={true}
                                dataKey="weight"
                                domain={[115, 125]}
                            >
                                <Label value={active === 0 ? "Waga" : "Poziom cukru"} position="insideLeft" angle={-90} offset={-25}/>
                            </YAxis>
                            <Tooltip content={CustomTooltip} />
                            <Line type={"natural"} dataKey="weight" stroke="#3c6fb2"/>
                        </LineChart>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressJournal;