const RegisterTextArea = ({id, label="Inne?", setFormData, value, placeHolder="Wpisz..."}) => {
    const handleTextChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <div className="register-step-fourth-step-item-text-field">
            <div className="register-step-fourth-step-item-text-field-label">
                {label}
            </div>
            <textarea
                id={id}
                className="register-step-fourth-step-item-text-field-input"
                placeholder={placeHolder}
                value={value}
                onChange={handleTextChange}
            />
        </div>
    );
}; export default RegisterTextArea;