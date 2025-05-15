import "../style/Dietitians.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import {dietitiansData} from "../data/DietitiansData.js";
import Dietitian from "../assets/elements/dietitians/Dietitian.jsx";
import {useState} from "react";

function Dietitians(){
    const [isAssigned, setIsAssigned] = useState(false);
    const handleAssign = () => {
        setIsAssigned(!isAssigned);
    }

    return (
        <>
            <NavigationBar/>
            <div className="offer-container">
                <div className="offer-dietitian-container">
                    {dietitiansData.map((item, index) => (
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