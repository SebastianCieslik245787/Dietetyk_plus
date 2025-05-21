import "../../../style/NavigationBar.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

import logo from "../../../images/logo.webp"
import NavigationItem from "./NavigationItem.jsx";
import NavigationItemDropDown from "./NavigationItemDropDown.jsx";
import UserItem from "./UserItem.jsx";
import Login from "./Login.jsx";
import {useCookies} from "react-cookie";
import {getDataFromLocalStorage} from "../../../scripts/getDataFromLocalStorage.js";

function NavigationBar() {
    const navigate = useNavigate();
    const [cookies] = useCookies(["User-Key"]);
    const userData = getDataFromLocalStorage("");

    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef(null);

    const isLoggedIn = cookies["User-Key"] !== undefined;
    const isUser = userData?.role === "user";

    const handleHomePageClick = () => {
        navigate("/home");
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowNavbar(false);
            }

            if (currentScrollY < lastScrollY.current) {
                setShowNavbar(true);
            }

            scrollTimeout.current = setTimeout(() => {
                setShowNavbar(true);
            }, 200);

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout.current);
        };
    }, []);

    return (
        <div className={`navbar-container ${showNavbar ? "show" : "hide"}`}>
            <div className="logo" onClick={handleHomePageClick}>
                <img src={logo} alt="logo"/>
            </div>
            <NavigationItem name="Dietetycy" path={"/dietitians"}/>
            <NavigationItem name="O nas" path={"/about-us"}/>
            <NavigationItem name="Kontakt" path={"/contact"} isLast={!isLoggedIn}/>
            {isLoggedIn && (
                isUser ? (
                    <>
                        <NavigationItemDropDown
                            name="Dieta"
                            optionPaths={["/diet-plan", "/shopping-list"]}
                            options={["Plan diety", "Lista zakupów"]}
                        />
                        <NavigationItem
                            name="Dziennik"
                            path={"/progress-journal"}
                            isLast={isLoggedIn}
                        />
                    </>
                ) : (
                    <>
                        <NavigationItem name="Kreator" path="/creator"/>
                        <NavigationItem name="Klienci" path="/patients" isLast={isLoggedIn}/>
                    </>
                )
            )}
            {!isLoggedIn ? <Login/> : <UserItem/>}
        </div>
    );
}

export default NavigationBar;
