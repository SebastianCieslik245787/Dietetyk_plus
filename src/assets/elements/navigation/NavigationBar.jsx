import "../../../style/NavigationBar.css"
import {useNavigate} from "react-router-dom";

import logo from "../../../images/logo.webp"
import NavigationItem from "./NavigationItem.jsx";
import NavigationItemDropDown from "./NavigationItemDropDown.jsx";
import UserItem from "./UserItem.jsx";
import Login from "./Login.jsx";

function NavigationBar() {
    const navigate = useNavigate();
    const isLoggedIn = true
    const isUser = true

    const handleHomePageClick = () => {
        navigate("/home");
    };

    return (
        <>
            <div className="navbar-container">
                <div className="logo" onClick={handleHomePageClick}>
                    <img src={logo} alt="logo"/>
                </div>
                <NavigationItem
                    name="Dietetycy"
                    path={"/dietitians"}
                />
                <NavigationItem
                    name="O nas"
                    path={"/about-us"}
                />
                <NavigationItem
                    name="Kontakt"
                    path={"/contact"}
                    isLast={!isLoggedIn}
                />
                {isLoggedIn && (
                    isUser ? (
                        <NavigationItemDropDown
                            name="Dieta"
                            optionPaths={["/diet-plan", "/shopping-list"]}
                            options={["Plan diety", "Lista zakupów"]}
                            isLast={isLoggedIn}
                        />
                    ) : (
                        <>
                            <NavigationItem
                                name="Kreator"
                                path="/schema-creator"
                            />
                            <NavigationItem
                                name="Klienci"
                                path="/patients"
                                isLast={isLoggedIn}
                            />
                        </>
                    )
                )}
                {
                    !isLoggedIn ? (
                            <Login/>
                        ) :
                        (
                            <UserItem/>
                        )
                }

            </div>
        </>
    )
}

export default NavigationBar