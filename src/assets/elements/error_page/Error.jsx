import "../../../style/Error.css"
import ErrorIcon from "../../../images/icons/error.png"
import {useNavigate} from "react-router-dom";

const Error = ({errorMessage, errorCode}) => {
    const navigator = useNavigate();

    return (
        <>
            <div className={"error-container"}>
                <div className={"error-panel"}>
                    {errorCode !== "Error 404" &&
                        <>
                            <div className={"error-icon"}>
                                <img src={`${ErrorIcon}`} alt=""/>
                            </div>
                        </>
                    }
                    <div className={`error-code ${errorCode === "Error 404" ? "err404" : ""}`}>
                        {errorCode}
                    </div>
                    <div className={"error-message"}>
                        {errorMessage}
                    </div>
                    <div className={"error-link"} onClick={() => navigator("/home")}>
                        Powrót do strony głównej
                    </div>
                </div>
            </div>
        </>
    );
};
export default Error;