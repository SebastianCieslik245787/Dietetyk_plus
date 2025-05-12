const UserSettings = ({id, label, placeHolder}) => {
    return (
        <div className="user-settings-input-container">
            <label className="user-settings-input-label">{label}</label>
            <input type="text" className="user-settings-input" placeholder={placeHolder} id={id}/>
        </div>
    );
};
export default UserSettings;