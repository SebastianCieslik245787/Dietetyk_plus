const RegisterInputText = ({value, setFormData, label, id, placeHolder, type, required}) => {
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div className="register-step-item">
            <div className="register-step-item-label">
                {required === true ? <span className="register-step-item-requirement">*</span> : ''}
                {label}
            </div>
            <input id={id} className="register-step-item-text-field" placeholder={placeHolder} type={type} value={value} onChange={handleChange} max={type === 'date' ? new Date().toISOString().split("T")[0] : undefined}/>
        </div>
    );

}; export default RegisterInputText;