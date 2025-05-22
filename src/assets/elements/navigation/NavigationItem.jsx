import {useNavigate} from "react-router-dom";

const NavigationItem = ({name, path, isLast}) => {
    const navigate = useNavigate();

    return (
        <div className={`item ${isLast ? "item-last" : ""}`} onClick={() => navigate(path)}>
            <p className="item-text">
                {name}
            </p>
        </div>
    );
}; export default NavigationItem;