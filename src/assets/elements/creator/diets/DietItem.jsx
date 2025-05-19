import DeleteIcon from "../../../../images/icons/delete_icon.png"
import EditIcon from "../../../../images/icons/edit_icon.png"
import DietPlanIcon from "../../../../images/icons/diet_plan_icon.png"

const DietItem = ({data}) => {
    return (
        <>
            <div className="diet-item">
                <div className="diet-item-title">
                    {data.name}
                </div>
                <div className={"diet-item-description"}>
                    {data.description}
                </div>
                <div className={"diet-item-buttons"}>
                    <div className="meal-info-button delete">
                        <img src={`${DeleteIcon}`} alt=""/>
                    </div>
                    <div className="meal-info-button edit">
                        <img src={`${EditIcon}`} alt=""/>
                    </div>
                    <div className="meal-info-button diet-plan">
                        <img src={`${DietPlanIcon}`} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}; export default DietItem