import {useNavigate} from "react-router-dom";

const NavigationItemDropDown = ({name, optionPaths, isLast = false, options}) => {
    const navigate = useNavigate();

    const handleClick = (index) => {
        navigate(optionPaths[index])
    };

    return (
        <div className={`item ${isLast ? "item-last" : ""}`} onClick={handleClick}>
            <p className="item-text">
                {name}
            </p>
            <div className="item-dropdown-options">
                {options.map((option, index) => (
                    <div className="item-dropdown-option" onClick={() => handleClick(index)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default NavigationItemDropDown;