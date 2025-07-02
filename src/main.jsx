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
import Dietitians from "./pages/Dietitians.jsx";
import LogOutPage from "./pages/LogOutPage.jsx";
import ShoppingList from "./pages/ShoppingList.jsx";
import RecoverPassword from "./pages/RecoverPassword.jsx";
import Creator from "./pages/Creator.jsx";
import ProgressJournal from "./pages/ProgressJournal.jsx";
import DietitianPatientsPage from "./pages/DietitianPatientsPage.jsx";
import Error404 from "./pages/Error404.jsx";
import Error401 from "./pages/Error401.jsx";
import Error403 from "./pages/Error403.jsx";
import Error500 from "./pages/Error500.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/style.css"
import {CookiesProvider} from "react-cookie";

/**
 * Punkt wejściowy aplikacji React.
 *
 * Aplikacja opakowana jest w `CookiesProvider` (do obsługi ciasteczek) i `BrowserRouter` (do obsługi routingu po stronie klienta).
 *
 * Ścieżki routingu:
 * - `*` oraz `/home` – Strona główna (komponent: {@link HomePage})
 * - `/login` – Logowanie (komponent: {@link Login})
 * - `/about-us` – Informacje o nas (komponent: {@link AboutUs})
 * - `/contact` – Kontakt (komponent: {@link Contact})
 * - `/register` – Rejestracja (komponent: {@link Register})
 * - `/account-created` – Potwierdzenie utworzenia konta (komponent: {@link AccountCreated})
 * - `/diet-plan` – Plan diety (komponent: {@link DietPlanPage})
 * - `/user-settings` – Ustawienia użytkownika (komponent: {@link UserSettings})
 * - `/patients` – Lista pacjentów dietetyka (komponent: {@link DietitianPatientsPage})
 * - `/diets` – Inne diety (komponent: {@link OtherDiets})
 * - `/dietitians` – Lista dietetyków (komponent: {@link Dietitians})
 * - `/logout` – Wylogowanie (komponent: {@link LogOutPage})
 * - `/shopping-list` – Lista zakupów (komponent: {@link ShoppingList})
 * - `/creator` – Kreator diet i dań (komponent: {@link Creator})
 * - `/progress-journal` – Dziennik postępów (komponent: {@link ProgressJournal})
 * - `/recover-password` – Odzyskiwanie hasła (komponent: {@link RecoverPassword})
 *
 * @see HomePage
 * @see Login
 * @see AboutUs
 * @see Contact
 * @see Register
 * @see Register
 * @see AccountCreated
 * @see DietPlanPage
 * @see UserSettings
 * @see DietitianPatientsPage
 * @see OtherDiets
 * @see Dietitians
 * @see LogOutPage
 * @see ShoppingList
 * @see Creator
 * @see ProgressJournal
 * @see RecoverPassword
 */
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
                <Route path={"/dietitians"} element={<Dietitians/>}/>
                <Route path={"/logout"} element={<LogOutPage/>}/>
                <Route path={"/shopping-list"} element={<ShoppingList/>}/>
                <Route path={"/creator"} element={<Creator/>}/>
                <Route path={"/progress-journal"} element={<ProgressJournal/>}/>
                <Route path={"/recover-password"} element={<RecoverPassword/>}/>
                <Route path={"/error-404"} element={<Error404/>}/>
                <Route path={"/error-401"} element={<Error401/>}/>
                <Route path={"/error-403"} element={<Error403/>}/>
                <Route path={"/error-500"} element={<Error500/>}/>
            </Routes>
        </BrowserRouter>
    </CookiesProvider>
)
