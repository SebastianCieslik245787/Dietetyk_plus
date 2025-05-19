const UserSettings = ({id, label, placeHolder, setFormData, value, type, setError, readOnly = true, error}) => {
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));

        setError(prev => ({
            ...prev,
            [id]: '',
        }));
    };

    return (
        <div className="user-settings-input-container">
            <div className="user-settings-input-label">{label}</div>
            <input className="user-settings-input" placeholder={placeHolder} value={value} type={type} id={id} onChange={handleChange} readOnly={readOnly}/>
            <div className={`user-settings-input-error ${error !== '' ? 'visible' : ''}`}>
                {error}
            </div>
        </div>
    );
};

export default UserSettings;