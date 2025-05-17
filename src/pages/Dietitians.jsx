import "../style/Dietitians.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import Dietitian from "../assets/elements/dietitians/Dietitian.jsx";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {getDietitiansData} from "../scripts/getData/getUsersData.js";

function Dietitians(){
    const [isAssigned, setIsAssigned] = useState(false);
    const handleAssign = (key) => {
        /*TODO*/
        console.log("Zapisanie się do dietetyka: " + key);
        setIsAssigned(!isAssigned);
    }

    const [cookies] = useCookies(["User-Key"]);
    const [dietitians, setDietitians] = useState([]);
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
} export default Dietitians;