import '../style/HomePage.css'

import navBar from '../assets/NavigationBar.jsx'

import whyDietBackGround from "../images/why_diet_background.jpeg"
import ourOfferBackGround from "../images/our_offer_background.webp"
import typesOfDietBackGround from "../images/types_of_diet_background.jpg"
import phoneIcon from "../images/phone_number_icon.png"
import emailIcon from "../images/email_icon.png"

function HomePage() {
    return (<>
            <div className="main-container">
                {navBar()}
                <div className="section-container">
                    <img src={whyDietBackGround} alt="Why Diet"/>
                    <div className="why-diet-content">
                        <p className="why-diet-header">
                            Dlaczego warto odżywiać się według odpowiedniej diety?
                        </p>
                        <p className="why-diet-paragraph">
                            Po pierwsze: zdrowie
                        </p>
                        <p className="why-diet-text">
                            Zdrowe odżywianie to inwestycja w zdrowie całego organizmu. Dostarczając sobie odpowiednie
                            dawki niezbędnych <span className="why-diet-keywords">składników odżywczych</span> dbasz o
                            prawidłowe funkcjonowanie wszystkich
                            narządów i układów w swoim ciele. Zbilansowana dieta zapobiega wielu chorobom, co
                            bezpośrednio przekłada się na dłuższe życie.
                        </p>
                        <p className="why-diet-paragraph">
                            Po drugie: sprawność
                        </p>
                        <p className="why-diet-text">
                            Dieta bogata w <span className="why-diet-keywords">witaminy</span>, <span
                            className="why-diet-keywords">minerały</span> i <span className="why-diet-keywords">nienasycone kwasy tłuszczowe</span> to
                            również inwestycja w
                            sprawność fizyczną. Odpowiednio odżywione kości, mięśnie i stawy, a do tego stosowna dawka
                            energii sprawiają, że organizm dłużej zachowuje wydajność. Dbając o dietę, nie będziesz
                            obawiać się bólu po drobnej aktywności fizycznej!
                        </p>
                        <p className="why-diet-paragraph">
                            Po trzecie: jasny umysł
                        </p>
                        <p className="why-diet-text">
                            Odpowiednia dieta ma znaczny wpływ na wydajność mózgu. Efektywne myślenie możesz zawdzięczać
                            cennym <span className="why-diet-keywords">kwasom omega-3</span> oraz<span
                            className="why-diet-keywords"> witaminom z grupy B</span>, a także <span
                            className="why-diet-keywords">witaminy C, E</span> oraz <span className="why-diet-keywords">minerałów:
                            magnezu, żelaza, cynku, potasu</span>.
                        </p>
                        <p className="why-diet-paragraph">
                            Po czwarte: wygląd
                        </p>
                        <p className="why-diet-text">
                            Równowaga składników odżywczych w diecie wpływa na Twój naturalnie piękny, witalny wygląd!
                            Chcąc cieszyć się zdrową, świetlistą cerą, mocnymi włosami i paznokciami, musisz zadbać o
                            bogactwo
                            <span className="why-diet-keywords"> witamin </span>
                            i w codziennym menu.
                            <span className="why-diet-keywords"> Witaminy </span>
                            są bezcenne dla kondycji skóry, włosów i paznokcie. Także pierwiastki, w takie jak
                            <span className="why-diet-keywords"> cynk</span>,
                            <span className="why-diet-keywords"> krzem</span>,
                            <span className="why-diet-keywords"> żelazo</span>,
                            <span className="why-diet-keywords"> wapń</span>,
                            <span className="why-diet-keywords"> miedź</span>
                            , są konieczne dla atrakcyjnego wyglądu.
                        </p>
                        <p className="why-diet-paragraph">
                            Po piąte: energia
                        </p>
                        <p className="why-diet-text">
                            Dieta bogata w odpowiednią porcję
                            <span className="why-diet-keywords"> białka </span>
                            i <span className="why-diet-keywords"> węglowodanów </span>
                            , a do tego
                            <span className="why-diet-keywords"> witaminy </span> i
                            <span className="why-diet-keywords"> minerały </span>
                            – wszystko to wpływa na poziom energii, który odczuwasz od pobudki do zaśnięcia. Zdrowa dieta
                            uwzględniająca regularne posiłki pozwala organizmowi na stopniowe uwalnianie energii
                            niezbędnej do aktywnego przeżycia całego dnia.
                        </p>
                        <p className="why-diet-paragraph">
                            Po szóste: odporność na stres
                        </p>
                        <p className="why-diet-text">
                            Zbilansowana dieta wpływa nie tylko na kondycję fizyczną, ale też na stan psychiczny.
                            Odpowiednie proporcje
                            <span className="why-diet-keywords"> składników odżywczych </span>
                            , a do tego zwiększone dawki
                            <span className="why-diet-keywords"> witamin </span> i
                            <span className="why-diet-keywords"> minerałów </span>
                            stymulujących pracę systemu nerwowego to przepis na lepsze samopoczucie, skuteczniejszą
                            kontrolę nerwów i redukcję stresu.
                        </p>
                        <p className="why-diet-paragraph">
                            Po siódme: pewność siebie
                        </p>
                        <p className="why-diet-text">
                            Oczywistą wypadkową lepszej kondycji fizycznej, psychicznej i intelektualnej, zwiększonych
                            pokładów energii oraz atrakcyjniejszego wyglądu jest większa pewność siebie. Dbając o zdrowe
                            odżywianie, automatycznie czujesz się lepiej, bo wiesz, że robisz coś ważnego dla siebie.
                            Nie tylko lepiej wyglądasz, ale przede wszystkim czujesz się lepiej we własnym ciele!
                        </p>
                    </div>
                </div>
                <div className="header">
                    <p className="header-text">
                        Rodzaje diet
                    </p>
                </div>
                <div className="section-container">
                    <img src={typesOfDietBackGround} alt="Why Diet"/>
                </div>
                <div className="header">
                    <p className="header-text">
                        Nasza oferta
                    </p>
                </div>
                <div className="section-container">
                    <img src={ourOfferBackGround} alt="Why Diet"/>
                </div>
                <div className="header">
                    <p className="header-text">
                        Jak się z nami skontaktować?
                    </p>
                </div>
                <div className="contact-container">
                    <div className="contact-bar">
                        <p className="contact-text">
                            +48 123 456 789
                        </p>
                        <img src={phoneIcon} alt="phone-icon"/>
                    </div>
                    <div className="contact-bar">
                        <p className="contact-text">
                            dietetyk@gmail.com
                        </p>
                        <img src={emailIcon} alt="email-icon"/>
                    </div>
                </div>
            </div>
        </>)
}

export default HomePage