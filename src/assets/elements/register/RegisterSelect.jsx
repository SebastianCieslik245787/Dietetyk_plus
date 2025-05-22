import {onChangeInput} from "../../hooks/handleChangeInput.jsx";

const RegisterSelect = ({id, setFormData, options=[], value, label, placeHolder, required=false, labelTextType, error=null}) => {
    const handleChange = onChangeInput(setFormData)

    return(
        <div className="register-step-item">
            <div className={`register-step-item-label ${labelTextType === "small" ? "register-step-item-label-small-text" : ''}`}>
                {required === true ?
                    <span className={`register-step-item-requirement ${labelTextType === "small" ? "register-step-item-requirement-small-text" : ''}`}>*</span> : ''
                }
                {label}
            </div>
            <select id={id} className={`register-step-item-text-field ${labelTextType === "small" ? "register-step-item-label-small-text" : ''}`} value={value} onChange={handleChange}>
                <option value="" disabled selected>{placeHolder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {
                error !== null && (
                    <div className="register-step-item-error-label" id={error}/>
                )
            }
        </div>
    )
}; export default RegisterSelect;