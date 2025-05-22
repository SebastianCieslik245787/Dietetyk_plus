import DeleteIcon from "../../../../images/icons/delete_icon.png"
import EditIcon from "../../../../images/icons/edit_icon.png"
import DietPlanIcon from "../../../../images/icons/diet_plan_icon.png"

const DietItem = ({data, onDelete, onEdit, onShowDiet}) => {
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
                    <div className="meal-info-button delete" onClick={onDelete}>
                        <img src={`${DeleteIcon}`} alt=""/>
                    </div>
                    <div className="meal-info-button edit" onClick={onEdit}>
                        <img src={`${EditIcon}`} alt=""/>
                    </div>
                    <div className="meal-info-button diet-plan" onClick={onShowDiet}>
                        <img src={`${DietPlanIcon}`} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}; export default DietItem