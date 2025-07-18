import "../style/Dietitians.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import Dietitian from "../assets/elements/dietitians/Dietitian.jsx";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {getDietitiansData} from "../scripts/getData/getUsersData.js";
import {changeUserDietetic} from "../scripts/sendData/sendPatientDataChange.js";
import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";

function Dietitians() {
    const [cookies] = useCookies(["User-Key"]);
    const userData = getDataFromLocalStorage("");
    const [dietitians, setDietitians] = useState([]);
    const [isAssigned, setIsAssigned] = useState(
        userData.role === "user" ? userData.dieteticId !== "" : true //Dietetyk nie ma przycisku więc ma "tak jakby był przypisany"
    );
    const handleAssign = (key) => {
        console.log("Zapisanie się do dietetyka: " + key);
        changeUserDietetic("add", key, cookies)
        setIsAssigned(!isAssigned);
    }

    useEffect(() => {
        (async () => {
            const data = await getDietitiansData(cookies);
            setDietitians(data || []);
        })();
    }, [cookies]);

    return (
        <>
            <NavigationBar/>
            <div className="offer-container">
                <div className="offer-dietitian-container">
                    {dietitians.map((item, index) => (
                        <Dietitian
                            data={item}
                            key={index}
                            isAssigned={isAssigned}
                            onClick={handleAssign}
                            position={index % 2 === 1 ? "right" : "left"}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dietitians;