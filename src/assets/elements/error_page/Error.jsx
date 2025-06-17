import "../../../style/Error.css"
import ErrorIcon from "../../../images/icons/error.png"
import {useNavigate} from "react-router-dom";

const Error = ({errorMessage, errorCode}) => {
    const naivgator = useNavigate();

    return (
        <>
            <div className={"error-container"}>
                <div className={"error-panel"}>
                    <div className={"error-icon"}>
                        <img src={`${ErrorIcon}`} alt=""/>
                    </div>
                    <div className={"error-code"}>
                        {errorCode}
                    </div>
                    <div className={"error-message"}>
                        {errorMessage}
                    </div>
                    <div className={"error-link"} onClick={() => naivgator("/home")}>
                        Powrót do strony głównej
                    </div>
                </div>
            </div>
        </>
    );
}; export default Error;