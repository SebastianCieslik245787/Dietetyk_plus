import DeleteIcon from '../../../../images/icons/delete_ingredient_icon.png'

const IngredientItem = ({data, onRemove}) => {
    return (
        <>
            <div className="add-meal-window-ingredients-item">
                {data.name} {data.count} {data.unit}
                <img onClick={onRemove} src={`${DeleteIcon}`} alt=""/>
            </div>
        </>
    );
}; export default IngredientItem;