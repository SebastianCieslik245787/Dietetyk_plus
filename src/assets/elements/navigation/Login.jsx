import {useNavigate} from "react-router-dom";
import loginIcon from "../../../images/icons/login_icon.png";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login" onClick={() => navigate("/login")}>
            <p className="login-text">
                Zaloguj się
            </p>
            <img src={`${loginIcon}`} alt="login-icon"/>
        </div>
    );
}; export default Login;