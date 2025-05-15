import '../style/HomePage.css'

import ourOfferBackGround from "../images/backgrounds/our_offer_background.webp"
import typesOfDietBackGround from "../images/backgrounds/types_of_diet_background.jpg"
import phoneIcon from "../images/icons/phone_number_icon.png"
import emailIcon from "../images/icons/email_icon.png"
import sportDietIcon from "../images/other_diets/sport_diet_icon.png"
import veganDietIcon from "../images/other_diets/vegan_diet_icon.jpg"
import linkIcon from "../images/icons/link_icon.png"
import professionalSupportIcon from "../images/icons/professional_support_icon.png"
import arrangeAConsultation from "../images/icons/arrange_a_consultation_icon.png"
import expertHelpIcon from "../images/icons/expert_help_icon.png"
import nutritionalTipsIcon from "../images/icons/nutritional_tips_icon.png"
import supportInTreatmentIcon from "../images/icons/support_in_treatment_icon.png"
import individualDietIcon from "../images/icons/individual_diet_icon.png"
import exercisesYouLikeIcon from "../images/icons/exercises_you_like_icon.png"
import goodEatingHabitIcon from "../images/icons/good_eating_habit_icon.png"
import asYouLikeIcon from "../images/icons/as_you_like_icon.png"
import newWeekNewThingsIcon from "../images/icons/new_week_new_things_icon.png"
import tipsIcon from "../images/icons/tips_icon.png"
import consultationsIcon from "../images/icons/consultations_icon.png"
import summaryIcon from "../images/icons/summary_icon.png"
import planAdjustmentIcon from "../images/icons/plan_adjustment_icon.png"
import regularRaportsIcon from "../images/icons/regular_raports_icon.png"
import logo from "../images/logo.webp"
import {useNavigate} from "react-router-dom";
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import Slide from "../assets/elements/home_page/Slide.jsx";
import {slides} from "../data/SlidesData.js";
import {useEffect, useState} from "react";

function HomePage() {
    const navigate = useNavigate();
    const [actualSlide, setActualSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);

    const handleOtherDietsClick = () => {
        navigate("/diets");
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevSlide(actualSlide);
            setActualSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [actualSlide, slides.length]);

    return (<>
        <NavigationBar/>
        <div className="main-container">
            <div className="section-container slides">
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        data={slide}
                        actual={index === actualSlide}
                        prev={index === prevSlide}
                        direction={index % 2 === 1 ? "left" : "right"}
                    />
                ))}
            </div>
            <div className="header">
                <p className="header-text">
                    Rodzaje diet
                </p>
            </div>
            <div className="section-container">
                <img src={typesOfDietBackGround} alt="Why Diet"/>
                <div className="type-of-diets-content">
                    <div className="upper-diet-type diet-type">
                        <img src={sportDietIcon} alt="sport-diet-icon"/>
                        <div className="upper-diet-type-text-content">
                            <div className="upper-diet-type-header">
                                <p className="upper-diet-type-header-text">
                                    Dieta Sportowa
                                </p>
                            </div>
                            <p className="upper-diet-type-text">
                                Dobrze zbilansowana i dopasowana dieta dla osób, które są aktywne fizycznie pozwala
                                szybciej
                                osiągnąć założone cele.
                                Dieta dla sportowca to sposób żywienia zapewniający wysoką podaż białka i węglowodanów,
                                dzięki której osoby o podwyższonej aktywności zaspokoją dzienne zapotrzebowanie
                                organizmu na
                                poszczególne makroskładniki.
                            </p>
                        </div>
                    </div>
                    <div className="lower-diet-type diet-type">
                        <img src={veganDietIcon} alt="sport-diet-icon"/>
                        <div className="lower-diet-type-text-content">
                            <div className="lower-diet-type-header">
                                <p className="lower-diet-type-header-text">
                                    Dieta Wegetariańska
                                </p>
                            </div>
                            <div className="lower-diet-type-text">
                                Odpowiednio zbilansowana dieta wegetariańska dla osób które chcą rezygnować z jedzenia
                                mięsa
                                lub innych produktów pochodzenia zwierzęcego z powodu przekonań, upodobań czy stanu
                                zdrowia.
                                Oparta na żywności pochodzenia roślinnego. Dostępna w kilku wariantach aby każdy mógł
                                znaleźć dietę dopasowaną do siebie.
                            </div>
                        </div>
                    </div>
                    <div className="other-diets-button" onClick={handleOtherDietsClick}>
                        <p className="other-diets-button-text">
                            Inne diety
                        </p>
                        <img src={linkIcon} alt="link-icon"/>
                    </div>
                </div>
            </div>
            <div className="header">
                <p className="header-text">
                    Nasza oferta
                </p>
            </div>
            <div className="section-container">
                <img src={ourOfferBackGround} alt="Why Diet"/>
                <div className="our-offer-content">
                    <div className="offers">
                        <div className="offer-content">
                            <div className="offer-header">
                                <p className="offer-header-text">
                                    Konsultacje z Dietetykiem
                                </p>
                            </div>
                            <div className="offer-items">
                                <div className="offer-item">
                                    <img src={professionalSupportIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Profesjonalne wsparcie
                                        </p>
                                        <p className="offer-item-text">
                                            Na każdym spotkaniu uzyskasz fachową poradę, wraz ze specjalistą omówisz
                                            swoje trudności oraz osiągnięcia.
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={nutritionalTipsIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Wskazówki żywieniowe
                                        </p>
                                        <p className="offer-item-text">
                                            Otrzymasz praktyczne informacje, które mogą pomóc w zmianie stylu życia i
                                            redukcji masy ciała.
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={expertHelpIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Pomoc ekspertów
                                        </p>
                                        <p className="offer-item-text">
                                            Nasi eksperci otoczą Cię opieką. Znajdź spokojne miejsce i połącz się ze
                                            specjalistą.
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={supportInTreatmentIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Wsparcie w leczeniu
                                        </p>
                                        <p className="offer-item-text">
                                            Nasze zalecenia mogą wspomóc leczenie, ponieważ to, co jesz ma wpływ na
                                            zdrowie.
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={arrangeAConsultation} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Umów konsultację oraz dogodny termin
                                        </p>
                                        <p className="offer-item-text">
                                            Możesz rozmawiać z domu lub umówić się w placówce
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offers">
                        <div className="offer-content">
                            <div className="offer-header">
                                <p className="offer-header-text">
                                    Tworzenie diety według indywidualnych potrzeb
                                </p>
                            </div>
                            <div className="offer-items">
                                <div className="offer-item">
                                    <img src={individualDietIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Indywidualnie dobrana dieta
                                        </p>
                                        <p className="offer-item-text">
                                            Jesz tylko takie posiłki, które Ci smakują, bez wyrzeczeń i głodu
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={exercisesYouLikeIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Ćwiczenia takie jak lubisz
                                        </p>
                                        <p className="offer-item-text">
                                            Wybierasz aktywność, którą lubisz i ćwiczysz kiedy chcesz
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={goodEatingHabitIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Zdrowe nawyki na zawsze
                                        </p>
                                        <p className="offer-item-text">
                                            Twój osobisty dietetyk nauczy Cię jak utrzymać efekty na zawsze</p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={asYouLikeIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Tak jak chcesz
                                        </p>
                                        <p className="offer-item-text">
                                            Określasz swój cel, a my przygotowujemy plan diety online dopasowany do
                                            Twoich potrzeb.</p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={newWeekNewThingsIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Nowy tydzień coś nowego
                                        </p>
                                        <p className="offer-item-text">
                                            Co 7 dni otrzymujesz nowy jadłospis i listę zakupów, a przez cały czas
                                            możesz skontaktować się dietetykiem
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offers">
                        <div className="offer-content">
                            <div className="offer-header">
                                <p className="offer-header-text">
                                    Tworzenie raportów i analiza uzyskanych wyników
                                </p>
                            </div>
                            <div className="offer-items">
                                <div className="offer-item">
                                    <img src={regularRaportsIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Regularne raporty postępów
                                        </p>
                                        <p className="offer-item-text">
                                            Otrzymasz szczegółową analizę swoich wyników, aby
                                            zobaczyć, jakie efekty przynosi dieta i trening.
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={planAdjustmentIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Dostosowanie planu do Twoich potrzeb
                                        </p>
                                        <p className="offer-item-text">
                                            Na podstawie analizy wyników dietetyk
                                            wprowadzi ewentualne zmiany w Twoim jadłospisie i zaleceniach.
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={summaryIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Podsumowanie tygodniowe i miesięczne
                                        </p>
                                        <p className="offer-item-text">
                                            Co tydzień i co miesiąc otrzymasz
                                            podsumowanie swoich postępów, aby śledzić zmiany i motywować się do dalszych
                                            działań.
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={consultationsIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Konsultacja wyników ze specjalistą
                                        </p>
                                        <p className="offer-item-text">
                                            Omówisz swoje osiągnięcia oraz ewentualne
                                            trudności z dietetykiem, który pomoże Ci wprowadzić dalsze ulepszenia.
                                        </p>
                                    </div>
                                </div>
                                <div className="offer-item">
                                    <img src={tipsIcon} alt=""/>
                                    <div className="offer-item-text-content">
                                        <p className="offer-item-header-text">
                                            Zalecenia na przyszłość
                                        </p>
                                        <p className="offer-item-text">
                                            Na podstawie Twoich wyników otrzymasz wskazówki, jak
                                            utrzymać efekty na dłużej i uniknąć powrotu do wcześniejszych nawyków.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <p className="header-text">
                    Jak się z nami skontaktować?
                </p>
            </div>
            <div className="home-contact-container">
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
            <div className="footer-container">
                <div className="footer-content">
                    <img src={logo} alt=""/>
                    <div className="footer-column">
                        <p className="footer-column-header">
                            Mapa Strony:
                        </p>
                        <p className="column-paragraph">
                            • Oferta<br/>
                            • O nas<br/>
                            • Kontakt
                        </p>
                    </div>
                    <div className="footer-column">
                        <p className="footer-column-header">
                            Adres:
                        </p>
                        <p className="column-paragraph">
                            al. Stanisława Wyszyńskiego 45
                            <br/>
                            Bełchatów, 97-400
                        </p>
                    </div>
                    <div className="footer-copyrights">
                        <p className="footer-copyrights-text">
                            Copyright © 2025 Dietetyk+ All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default HomePage