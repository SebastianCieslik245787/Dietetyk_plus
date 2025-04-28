import {createRoot} from 'react-dom/client'
import Homepage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";
import AccountCreated from "./pages/AccountCreated.jsx";
import DietPlanPage from "./pages/DietPlanPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/style.css"


createRoot(document.getElementById('root')).render(
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
        </Routes>
    </BrowserRouter>
)
