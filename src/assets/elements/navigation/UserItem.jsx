import UserIcon from "../../../images/icons/deafult_user_icon.png"
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

const UserItem = () => {
    const navigate = useNavigate();
    const [cookies] = useCookies(["User-Data"]);
    const onLogoutClick = () => {
        navigate("/logout");
    }

    const onSettingsClick = () => {
        navigate("/user-settings");
    }

    const [isClicked, setClicked] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setClicked(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="user-item" ref={containerRef}>
            <img src={cookies["User-Data"].img_b64 !== "" ? cookies["User-Data"].img_b64 : UserIcon} alt="" onClick={() => setClicked(!isClicked)} />
            <div className={`user-options ${isClicked ? "user-options-active" : ""}`}>
                <div className="user-option" onClick={onSettingsClick}>
                    Ustawienia
                </div>
                <div className="user-option" onClick={onLogoutClick}>
                    Wyloguj
                </div>
            </div>
        </div>
    );
}; export default UserItem;