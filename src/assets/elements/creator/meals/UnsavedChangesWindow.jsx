import {useRef} from "react";
import useClickOutside from "../../../hooks/OnClickOutsideWindow.jsx";

const UnsavedChangesWindow = ({onCancel, onClose}) => {
    const windowRef = useRef(null);
    useClickOutside(windowRef, onCancel);

    return (
        <>
            <div className="unsaved-changes-window-container">
                <div className="unsaved-changes-window" ref={windowRef}>
                    <div className="unsaved-changes-window-message">
                        Czy chcesz porzucić niezapisane zmiany?
                    </div>
                    <div className="unsaved-changes-window-button cancel" onClick={onCancel}>
                        Anuluj
                    </div>
                    <div className="unsaved-changes-window-button save" onClick={onClose}>
                        Tak
                    </div>
                </div>
            </div>
        </>
    );
}; export default UnsavedChangesWindow;