import DefaultUserIcon from "../../../images/icons/deafult_user_icon.png"
import DietPlanIcon from "../../../images/icons/diet_plan_icon.png"
import DeleteIcon from "../../../images/icons/delete_icon.png"
import MoreInfoIcon from "../../../images/icons/more_info_icon.png"
import {dietPurposes} from "../../../data/RegisterConsts.js";
import {parseDateToDaysSince} from "../../../scripts/dateFunctions.js";



const Patient = ({ data, onMoreInfo }) => {
    const key = Object.keys(data)[0];
    data = data[key];
    const lastEdit = parseDateToDaysSince(data.lastUpdated);
    return(
        <>
            <div className="patient-container">
                <div className="patient-info">
                    <div className="patient-info-image">
                        <img src={DefaultUserIcon} alt=""/>
                    </div>
                    <div className="patient-info-name-and-surname">
                        {data.name} {data.surname}
                    </div>
                    <div className="patient-info-last-edit-time">
                        Ostatnio edytowane:
                        <span className={lastEdit > 7 ? "patient-info-last-edit-time-late" : ""}>
                            {lastEdit} dni temu</span>
                    </div>
                    <div className="patient-info-diet-type">
                        Rodzaj Diety: {
                        (dietPurposes.find(purpose => purpose.value === data.dietPurpose)?.label || "")
                    }
                    </div>
                    <div className="patient-info-buttons">
                        <div className="patient-info-button patient-info-button-delete">
                            <img src={DeleteIcon} alt=""/>
                        </div>
                        <div className="patient-info-button patient-info-button-edit">
                            <img src={DietPlanIcon} alt=""/>
                        </div>
                        <div className="patient-info-button patient-info-button-more-info">
                            <img src={MoreInfoIcon} alt="" onClick={onMoreInfo} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}; export default Patient;