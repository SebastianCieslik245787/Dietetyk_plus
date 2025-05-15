import AddItemIcon from '../../../../images/icons/add_icon.png';

const CreatorAddItem = ({placeHolder, onClick}) => {

    return (
        <>
            <div className="creator-menu-add-item" onClick={onClick}>
                <div className="creator-menu-add-item-icon">
                    <img src={`${AddItemIcon}`} alt=""/>
                </div>
                <div className="creator-menu-add-item-content">
                    {placeHolder}
                </div>
            </div>
        </>
    );
}; export default CreatorAddItem;