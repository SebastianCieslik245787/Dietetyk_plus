import UserIcon from "../../../images/icons/deafult_user_icon.png"
import {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getDataFromLocalStorage} from "../../../scripts/getDataFromLocalStorage.js";
import onClickOutsideWindow from "../../hooks/OnClickOutsideWindow.jsx";

const UserItem = () => {
    const navigate = useNavigate();

    const [isClicked, setClicked] = useState(false);

    const containerRef = useRef(null);

    const currentPath = useLocation().pathname;

    onClickOutsideWindow(containerRef, () => setClicked(false))

    const UserImage = getDataFromLocalStorage("img_b64");

    return (
        <div className="user-item" ref={containerRef}>
            <img src={(UserImage !== undefined && UserImage !== "") ? UserImage : UserIcon} alt="" onClick={() => setClicked(!isClicked)} />
            <div className={`user-options ${isClicked ? "user-options-active" : ""}`}>
                <div className={`user-option ${currentPath === '/user-settings' ? 'active' : ''}`} onClick={() => navigate("/user-settings")}>
                    Ustawienia
                </div>
                <div className="user-option" onClick={() => navigate("/logout")}>
                    Wyloguj
                </div>
            </div>
        </div>
    );
}; export default UserItem;