const RegisterChoiceElements = ({label, options, setFormData, value, id}) => {

    const handleClick = (option) => {
        setFormData(prev => {
            const currentArray = prev[id];
            const newArray = currentArray.includes(option)
                ? currentArray.filter(item => item !== option)
                : [...currentArray, option];

            return {
                ...prev,
                [id]: newArray,
            };
        });
    }


    return (
        <>
            <p className="register-step-fourth-step-item-title">{label}</p>
            <div className="register-step-fourth-step-choice-menu">
                {options.map((option) => (
                    <div className="register-step-fourth-step-choice-menu-item">
                        <div
                            key={option}
                            onClick={() => handleClick(option)}
                            className={`register-step-fourth-step-choice-menu-item-choice-box ${
                                value.includes(option)
                                    ? 'register-step-fourth-step-choice-menu-item-choice-box-active'
                                    : ''
                            }`}
                        />
                        <div className="register-step-fourth-step-choice-menu-item-text">
                            {option}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}; export default RegisterChoiceElements;