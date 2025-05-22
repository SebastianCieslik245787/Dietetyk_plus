import {onChangeInput} from "../../hooks/onChangeInput.jsx";

const RecoverPasswordInput = ({placeHolder, data, setData, name, error}) => {
    const handleChange = onChangeInput(setData)

    return (
        <>
            <input id={name} value={data} onChange={handleChange} type="text" className={"recover-password-input"}
                   placeholder={placeHolder}/>
            <div className={`recover-password-error ${error !== '' ? 'visible' : ''}`}>
                {error}
            </div>
        </>
    )
}; export default RecoverPasswordInput;