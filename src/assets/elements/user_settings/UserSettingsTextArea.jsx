const UserSettingsTextArea = ({placeHolder, setFormData, value}) => {
    const handleChange = (e) => {
        const { value } = e.target;
        setFormData(value);
    };

    return (
        <textarea className={"user-settings-textarea"} placeholder={placeHolder} value={value} onChange={handleChange} />
    );
};

export default UserSettingsTextArea;