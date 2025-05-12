const UserSettings = ({id, label, placeHolder, setFormData, value, type, readOnly = true}) => {
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div className="user-settings-input-container">
            <div className="user-settings-input-label">{label}</div>
            <input className="user-settings-input" placeholder={placeHolder} value={value} type={type} id={id} onChange={handleChange} readOnly={readOnly}/>
        </div>
    );
};

export default UserSettings;