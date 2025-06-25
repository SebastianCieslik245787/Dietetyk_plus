import '../style/HomePage.css'
import ourOfferBackGround from "../images/backgrounds/our_offer_background.webp"
import typesOfDietBackGround from "../images/backgrounds/types_of_diet_background.jpg"
import phoneIcon from "../images/icons/phone_number_icon.png"
import emailIcon from "../images/icons/email_icon.png"
import linkIcon from "../images/icons/link_icon.png"
import logo from "../images/logo.webp"
import {useNavigate} from "react-router-dom";
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import Slide from "../assets/elements/home_page/Slide.jsx";
import {slides} from "../data/SlidesData.js";
import {useEffect, useMemo, useRef, useState} from "react";
import DietType from "../assets/elements/home_page/DietType.jsx";
import {otherDietsData} from "../data/OtherDietsData.js";
import {
    dietitianConsultationOfferData,
    individualDietOfferData,
    reportsAndDataAnalysisOfferData
} from "../data/OfferData.js";
import OfferItem from "../assets/elements/home_page/OfferItem.jsx";

function HomePage() {

    const navigate = useNavigate();
    const [actualSlide, setActualSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevSlide(actualSlide);
            setActualSlide((prev) => (prev + 1) % slides.length);
        }, 15000);

        return () => clearInterval(interval);
    }, [actualSlide]);

    const randomIndices = useMemo(() => {
        const indices = [...Array(otherDietsData.length).keys()];
        indices.sort(() => Math.random() - 0.5);
        return [indices[0], indices[1]];
    }, []);

    const [first, second] = randomIndices;

    const offerRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        offerRefs.current.forEach((el, idx) => {
                            setTimeout(() => {
                                el?.classList.add("show");
                            }, idx * 500);
                        });
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        offerRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
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
                    <img src={`${typesOfDietBackGround}`} alt="Why Diet"/>
                    <div className="type-of-diets-content">
                        <DietType
                            data={otherDietsData[first]}
                            direction={'left'}
                        />
                        <DietType
                            data={otherDietsData[second]}
                            direction={'right'}
                        />
                        <div className="other-diets-button" onClick={() => navigate("/diets")}>
                            <p className="other-diets-button-text">
                                Inne diety
                            </p>
                            <img src={`${linkIcon}`} alt="link-icon"/>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <p className="header-text">
                        Nasza oferta
                    </p>
                </div>
                <div className="section-container">
                    <img src={`${ourOfferBackGround}`} alt="Why Diet"/>
                    <div className="our-offer-content">
                        {[dietitianConsultationOfferData, individualDietOfferData, reportsAndDataAnalysisOfferData].map((offer, index) => (
                            <div
                                className="offers"
                                key={index}
                                ref={(el) => offerRefs.current[index] = el}
                            >
                                <div className="offer-content">
                                    <div className="offer-header">
                                        <p className="offer-header-text">{offer.label}</p>
                                    </div>
                                    <div className="offer-items">
                                        {offer.items.map((item, i) => (
                                            <OfferItem key={i} data={item}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
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
                        <img src={`${phoneIcon}`} alt="phone-icon"/>
                    </div>
                    <div className="contact-bar">
                        <p className="contact-text">
                            dietetyk@gmail.com
                        </p>
                        <img src={`${emailIcon}`} alt="email-icon"/>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-content">
                        <img src={`${logo}`} alt=""/>
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
        </>
    )
}

export default HomePage