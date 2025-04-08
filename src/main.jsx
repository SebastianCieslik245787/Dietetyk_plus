import {createRoot} from 'react-dom/client'
import Homepage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/style.css"


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Homepage/>}/>
            <Route path={"/login"} element={<Login/>}/>
        </Routes>
    </BrowserRouter>
)
