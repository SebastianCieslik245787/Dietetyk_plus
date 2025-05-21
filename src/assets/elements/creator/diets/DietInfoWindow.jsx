import DietPlanIcon from '../../../../images/icons/diet_plan_icon.png'
import CloseWindowIcon from '../../../../images/icons/close_window_icon.png'

const DietInfoWindow = ({onClick, data, setData, onClose}) => {
    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(prev => ({
            ...prev,
            [id]: value,
        }));
    };

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
                        <div className={`diet-info-error`}>
                            XDD
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
                        <div className={`diet-info-error description`}>
                            XDD
                        </div>
                    </div>
                </div>
                <div className={"diet-info-save-button"} onClick={onClose}>
                    Zapisz
                </div>
            </div>
        </>
    )
};
export default DietInfoWindow;