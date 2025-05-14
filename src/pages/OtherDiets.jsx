import "../style/OtherDiets.css"
import NavigationBar from "../assets/elements/NavigationBar.jsx";
import Diet from "../assets/elements/other_diets/Diet.jsx";
import {otherDietsData} from "../data/OtherDietsData.js";

function OtherDiets(){
    return (
        <>
            <NavigationBar/>
            <div className="other-diets-container">
                <div className="other-diet-items">
                    {otherDietsData.map((item) => (
                        <Diet
                            data={item}
                        />
                    ))}
                </div>
                <div className="other-diet-foother"/>
            </div>
        </>
    );
} export default OtherDiets;