import "../style/OtherDiets.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import Diet from "../assets/elements/other_diets/Diet.jsx";
import {otherDietsData} from "../data/OtherDietsData.js";

/**
 * Strona innych diet, która zawiera informacje o przykładowych dietach. Używa danych z {@link otherDietsData} i wyświetla je w elemenetach {@link Diet}.
 *
 * @see NavigationBar
 * @see Diet
 * @see otherDietsData
 *
 * @returns {JSX.Element} - Strona z przykładowymi dietami.
 */
function OtherDiets() {

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
}

export default OtherDiets;