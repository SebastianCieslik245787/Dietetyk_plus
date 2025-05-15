import DeleteIcon from '../../../../images/icons/delete_ingredient_icon.png'

const IngredientItem = ({data}) => {
    return (
        <>
            <div className="add-meal-window-ingredients-item">
                {data.ingredientName} {data.count} {data.units}
                <img src={`${DeleteIcon}`} alt=""/>
            </div>
        </>
    );
}; export default IngredientItem;