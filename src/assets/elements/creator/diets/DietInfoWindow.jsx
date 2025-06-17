import DietPlanIcon from '../../../../images/icons/diet_plan_icon.png'
import CloseWindowIcon from '../../../../images/icons/close_window_icon.png'
import {onChangeInput} from "../../../hooks/onChangeInput.jsx";

/**
 * Okno dodawania, bądz edycji danych diety (nazwy, opisu) w kreatorze diet {@link Creator}.
 *
 * @name DietInfoWindow
 * @description Okno zmiany nazwy i opisu diety
 * @component
 *
 * @member Dodawanie/Edycja diety
 *
 * @see Creator
 * @see onChangeInput
 *
 * @param {function} onClick
 * @param {Object} data - Dane nowej lub edytowanej diety.
 * @property {string} data.name - Nazwa diety.
 * @property {string} data.description - Opis diety.
 * @property {Array<Object>} data.days - Plan diety (nieużywany).
 * @param {function} setData - Funkcja zmieniająca dane.
 * @param {function} onClose - Funkcja zamykająca okno.
 *
 * @returns {JSX.Element} Okno dodawania lub edycji nazwy i opisu diety.
 */
const DietInfoWindow = ({onClick, data, setData, onClose, onSave, errors}) => {
    /**
     * Funkcja obserwująca zmiany w polu edycji i zamieniająca je w danych diety.
     *
     * @type {function}
     */
    const handleChange = onChangeInput(setData)

    return (
        <>
            <div className={"diet-info-container"}>
                <div className={"diet-info-header"}>
                    Dodaj Diete
                </div>
                <div className={"diet-info-close-window"}>
                    <img src={`${CloseWindowIcon}`} alt="" onClick={onClose} />
                </div>
                <div className={"diet-info-body"}>
                    <div className={"diet-info-name"}>
                        <input id={"name"} onChange={handleChange} value={data.name} type="text" placeholder={"Wpisz nazwę..."} className="diet-info-input"/>
                        <div className={`diet-info-error ${errors.name !== "" ? 'active' : ''}`}>
                            {errors.name}
                        </div>
                    </div>
                    <div className={"diet-info-edit-plan-button"} onClick={onClick}>
                        <div className={"diet-info-edit-plan-button-icon"}>
                            <img src={`${DietPlanIcon}`} alt=""/>
                        </div>
                        <div className={"diet-info-edit-plan-button-text"}>
                            Edytuj Plan
                        </div>
                    </div>
                    <div className={"diet-info-description"}>
                        <textarea value={data.description} placeholder={'Opisz...'} id={"description"} onChange={handleChange}/>
                        <div className={`diet-info-error ${errors.description !== "" ? 'active' : ''} description`}>
                            {errors.description}
                        </div>
                    </div>
                </div>
                <div className={"diet-info-save-button"} onClick={onSave}>
                    Zapisz
                </div>
            </div>
        </>
    )
};
export default DietInfoWindow;