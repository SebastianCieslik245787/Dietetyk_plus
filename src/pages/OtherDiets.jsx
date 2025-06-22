import "../style/OtherDiets.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import Diet from "../assets/elements/other_diets/Diet.jsx";
import {otherDietsData} from "../data/OtherDietsData.js";
import {useConnection} from "../assets/ConnectionProvider.jsx";
import Error from "../assets/elements/error_page/Error.jsx";

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
    const {isConnected} = useConnection();

    return (
        isConnected ? (
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
            </>) : (
            <Error
                errorCode={"Error 404"}
                errorMessage={"Nie znaleziono strony lub zasobu, którego szukasz."}
            />
        )
    );
}

export default OtherDiets;