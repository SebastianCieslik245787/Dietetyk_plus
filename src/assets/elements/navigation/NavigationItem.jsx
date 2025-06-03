import {useLocation, useNavigate} from "react-router-dom";

const NavigationItem = ({name, path, isLast}) => {
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    return (
        <div className={`item ${isLast ? "item-last" : ""}`} onClick={() => {
            navigate(path)
            console.log(currentPath)
        }}>
            <p className={`item-text ${currentPath === path ? 'active' : ''}`}>
                {name}
            </p>
        </div>
    );
}; export default NavigationItem;