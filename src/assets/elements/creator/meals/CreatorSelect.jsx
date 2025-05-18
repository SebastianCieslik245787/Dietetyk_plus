import Arrow from "../../../../images/icons/arrow_down.png";
import {useState} from "react";

const CreatorSelect = ({options, setActive, active, AddWindow = false, placeHolder}) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <div className={`creator-menu-select ${AddWindow ? "ingredients" : ''}`} onClick={() => setIsClicked(!isClicked)}>
                <div className={`creator-menu-select-placeholder ${AddWindow ? "ingredients" : ''}`}>
                    {active === -1 ? placeHolder : options[active]}
                </div>
                <div className="creator-menu-select-icon">
                    <img className={`${isClicked ? 'creator-menu-select-icon-active' : ''}`} src={`${Arrow}`} alt="" />
                </div>
                <div className={`creator-menu-select-drop-down ${isClicked ? 'active' : ''}`}>
                    {
                        options.map((option, index) => (
                            <div onClick={() => setActive(index)} className="creator-menu-select-drop-down-item">
                                {option}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}; export default CreatorSelect;