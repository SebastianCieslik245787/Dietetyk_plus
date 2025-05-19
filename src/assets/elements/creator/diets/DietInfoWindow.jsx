import DietPlanIcon from '../../../../images/icons/diet_plan_icon.png'
import CloseWindowIcon from '../../../../images/icons/close_window_icon.png'

const DietInfoWindow = ({onClick, data}) => {
    return (
        <>
            <div className={"diet-info-container"}>
                <div className={"diet-info-header"}>
                    Dodaj Diete
                </div>
                <div className={"diet-info-close-window"}>
                    <img src={`${CloseWindowIcon}`} alt=""/>
                </div>
                <div className={"diet-info-body"}>
                    <div className={"diet-info-name"}>
                        <input type="text" placeholder={"Wpisz nazwę..."} className="diet-info-input"/>
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
                        <textarea placeholder={'Opisz...'}/>
                        <div className={`diet-info-error description`}>
                            XDD
                        </div>
                    </div>
                </div>
                <div className={"diet-info-save-button"}>
                    Zapisz
                </div>
            </div>
        </>
    )
};
export default DietInfoWindow;