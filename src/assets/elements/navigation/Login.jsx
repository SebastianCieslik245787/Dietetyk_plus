import {useNavigate} from "react-router-dom";
import loginIcon from "../../../images/icons/login_icon.png";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <div className="login" onClick={handleClick}>
            <p className="login-text">
                Zaloguj się
            </p>
            <img src={loginIcon} alt="login-icon"/>
        </div>
    );
}; export default Login;