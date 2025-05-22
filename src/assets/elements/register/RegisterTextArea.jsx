import {onChangeInput} from "../../hooks/handleChangeInput.jsx";

const RegisterTextArea = ({id, label="Inne?", setFormData, value, placeHolder="Wpisz..."}) => {
    const handleChange = onChangeInput(setFormData)

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
                onChange={handleChange}
            />
        </div>
    );
}; export default RegisterTextArea;