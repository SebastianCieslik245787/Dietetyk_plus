import "../style/Dietitians.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import {dietitiansData} from "../data/DietitiansData.js";
import Dietitian from "../assets/elements/our_offer/Dietitian.jsx";

function Dietitians(){
    return (
        <>
            <NavigationBar/>
            <div className="offer-container">
                <div className="offer-dietitian-container">
                    {dietitiansData.map((item, index) => (
                        <Dietitian
                            data={item}
                            key={index}
                            position={index % 2 === 1 ? "right" : "left"}
                        />
                    ))}
                </div>
            </div>
        </>
    );
} export default Dietitians;