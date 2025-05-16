import {useRef} from "react";
import useClickOutside from "../../../hooks/OnClickOutsideWindow.jsx";

const UnsavedChangesWindow = ({onClose, onSave}) => {
    const windowRef = useRef(null);
    useClickOutside(windowRef, onClose);

    return (
        <>
            <div className="unsaved-changes-window-container">
                <div className="unsaved-changes-window" ref={windowRef}>
                    <div className="unsaved-changes-window-message">
                        Czy chcesz porzucić niezapisane zmiany?
                    </div>
                    <div className="unsaved-changes-window-button cancel" onClick={onClose}>
                        Tak
                    </div>
                    <div className="unsaved-changes-window-button save" onClick={onSave}>
                        Zapisz
                    </div>
                </div>
            </div>
        </>
    );
}; export default UnsavedChangesWindow;