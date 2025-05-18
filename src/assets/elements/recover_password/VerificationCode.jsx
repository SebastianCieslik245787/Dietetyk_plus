import {useRef} from "react";

const VerificationCode = ({data, setData, handleSubmit}) => {
    const inputsRef = useRef([]);

    const handleChangeCode = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newCode = [...data];
        newCode[index] = value;
        setData(newCode);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }

        if (newCode.every(char => char !== "")) {
            handleSubmit(newCode.join(""));
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && data[index] === "" && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };



    return(
        <>
            <div className={"recover-password-code"}>
                {data.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        className="recover-password-input-code"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChangeCode(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => inputsRef.current[index] = el}
                    />
                ))}
            </div>
        </>
    )
}; export default VerificationCode;