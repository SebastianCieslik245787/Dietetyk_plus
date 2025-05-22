import "../style/DeleteWindow.css"

/**
 * Okno usuwania elementu
 * @see Creator
 * @see DietitianPatientsPage
 * @component
 *
 * @param {object} props
 * @param {function} props.onDelete - Funkcja potwierdzająca usunięcie elementu.
 * @param {function} props.onClose - Funckja zamykająca onko.
 * @param {string} message - Treść wiadomości, która ma się wyświetlić w oknie.
 *
 * @returns {JSX.Element} - Okno potwierdzające usunięcie elementu interfejsu użytkownika
 */
const DeleteWindow = ({onDelete, onClose, message}) => {
    return (
        <>
            <div className={"delete-window-container"}>
                <div className={"delete-window"}>
                    <div className={"delete-window-error"}>
                        {message}
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