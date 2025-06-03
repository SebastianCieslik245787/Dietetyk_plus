import DeleteIcon from '../../../../images/icons/delete_ingredient_icon.png'

const IngredientItem = ({ingredient, quantity, onRemove}) => {
    return (
        <>
            <div className="add-meal-window-ingredients-item">
                {ingredient.name} {quantity} {ingredient.unit}
                <img onClick={onRemove} src={`${DeleteIcon}`} alt=""/>
            </div>
        </>
    );
}; export default IngredientItem;