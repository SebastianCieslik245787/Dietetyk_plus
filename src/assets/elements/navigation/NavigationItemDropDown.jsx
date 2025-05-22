import {useNavigate} from "react-router-dom";
import ArrowIcon from '../../../images/icons/arrow_down.png'

const NavigationItemDropDown = ({name, optionPaths, isLast = false, options}) => {
    const navigate = useNavigate();

    const handleClick = (index) => navigate(optionPaths[index])

    return (
        <div className={`item ${isLast ? "item-last" : ""}`}>
            <p className="item-text">
                {name}
                <img src={`${ArrowIcon}`} alt=""/>
            </p>
            <div className="item-dropdown-options">
                {options.map((option, index) => (
                    <div key={option + index} className="item-dropdown-option" onClick={() => handleClick(index)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default NavigationItemDropDown;