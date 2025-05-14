import {useNavigate} from "react-router-dom";

const NavigationItem = ({name, path, isLast}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <div className={`item ${isLast ? "item-last" : ""}`} onClick={handleClick}>
            <p className="item-text">
                {name}
            </p>
        </div>
    );
}; export default NavigationItem;