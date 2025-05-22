import {onChangeInput} from "../../hooks/handleChangeInput.jsx";

const RegisterInputText = ({value, setFormData, label, id, placeHolder, type, required, error=null}) => {
    const handleChange = onChangeInput(setFormData)

    return (
        <div className="register-step-item">
            <div className="register-step-item-label">
                {required === true ? <span className="register-step-item-requirement">*</span> : ''}
                {label}
            </div>
            <input id={id} className="register-step-item-text-field" placeholder={placeHolder} type={type} value={value} onChange={handleChange} max={type === 'date' ? new Date().toISOString().split("T")[0] : undefined}/>
            {
                error !== null && (
                    <div className="register-step-item-error-label" id={error}/>
                )
            }
        </div>
    );

}; export default RegisterInputText;