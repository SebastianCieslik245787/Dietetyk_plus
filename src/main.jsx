import {createRoot} from 'react-dom/client'
import Homepage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";
import AccountCreated from "./pages/AccountCreated.jsx";
import DietPlanPage from "./pages/DietPlanPage.jsx";
import UserSettings from "./pages/UserSettings.jsx";
import OtherDiets from "./pages/OtherDiets.jsx";
import DietitianPatientsPage from "./pages/DietitianPatientsPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/style.css"
import {CookiesProvider} from "react-cookie";


createRoot(document.getElementById('root')).render(
    <CookiesProvider>
        <BrowserRouter>
            <Routes>
                <Route path={"*"} element={<Homepage/>}/>
                <Route path={"/home"} element={<Homepage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/about-us"} element={<AboutUs/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/account-created"} element={<AccountCreated/>}/>
                <Route path={"/diet-plan"} element={<DietPlanPage/>}/>
                <Route path={"/user-settings"} element={<UserSettings/>}/>
                <Route path={"/patients"} element={<DietitianPatientsPage/>}/>
                <Route path={"/diets"} element={<OtherDiets/>}/>
            </Routes>
        </BrowserRouter>
    </CookiesProvider>

)
