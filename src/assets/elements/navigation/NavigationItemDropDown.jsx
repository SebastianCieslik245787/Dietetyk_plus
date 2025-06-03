import {useLocation, useNavigate} from "react-router-dom";
import ArrowIcon from '../../../images/icons/arrow_down.png'

const NavigationItemDropDown = ({name, optionPaths, isLast = false, options}) => {
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    const handleClick = (index) => navigate(optionPaths[index])

    return (
        <div className={`item ${isLast ? "item-last" : ""}`}>
            <p className={`item-text ${optionPaths.includes(currentPath) ? 'active' : ''}`}>
                {name}
                <img src={`${ArrowIcon}`} alt=""/>
            </p>
            <div className="item-dropdown-options">
                {options.map((option, index) => (
                    <div key={option + index} className={`item-dropdown-option ${currentPath === optionPaths[index] ? 'active' : ''}`} onClick={() => handleClick(index)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default NavigationItemDropDown;