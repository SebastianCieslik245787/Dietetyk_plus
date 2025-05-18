const RecoverPasswordInput = ({placeHolder, data, setData, name, error}) => {
    const handleChange = (e) => {
        const {value} = e.target;
        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <input value={data} onChange={handleChange} type="text" className={"recover-password-input"}
                   placeholder={placeHolder}/>
            <div className={`recover-password-error ${error !== '' ? 'visible' : ''}`}>
                {error}
            </div>
        </>
    )
}; export default RecoverPasswordInput;