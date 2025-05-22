import {useEffect} from "react";
import "../style/DeleteWindow.css"

const DeleteWindow = ({onDelete, onClose, error}) => {
    useEffect(() => {
        console.log("XDD")
    })
    return (
        <>
            <div className={"delete-window-container"}>
                <div className={"delete-window"}>
                    <div className={"delete-window-error"}>
                        {error}
                    </div>
                    <div className={"delete-window-button cancel"} onClick={onClose}>
                        Anuluj
                    </div>
                    <div className={"delete-window-button delete"} onClick={onDelete}>
                        Usuń
                    </div>
                </div>
            </div>
        </>
    )
}; export default DeleteWindow;