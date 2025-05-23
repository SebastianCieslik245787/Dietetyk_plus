import "../style/DeleteWindow.css"

/**
 * Okno potwierdzające usunięcie elementu.
 * @see Creator
 * @see DietitianPatientsPage
 * @component
 *
 * @param {function} Delete - Funkcja potwierdzająca usunięcie elementu.
 * @param {function} onClose - Funckja zamykająca onko.
 * @param {string} message - Treść wiadomości, która ma się wyświetlić w oknie.
 *
 * @returns {JSX.Element} - Okno potwierdzające usunięcie elementu interfejsu użytkownika.
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