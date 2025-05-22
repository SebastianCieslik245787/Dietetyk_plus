import logo from "../images/logo.webp";

import "../style/AboutUs.css"
import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";

function AboutUs() {
    return (
        <>
            <NavigationBar/>
            <div className="about-us-container">
                <div className="about-us-content">
                    <p className="about-us-header">
                        O nas
                    </p>
                    <p className="about-us-text">
                        • Nasi klienci obdarzeni są opieką najlepszych dietetyków.
                        <br/><br/>
                        • Nasz zespół to dietetycy kliniczni, sportowi i psychodietetycy, którzy regularnie prowadzą
                        wykłady na konferencjach i stale  poszerzają swoją wiedzę, aby być na bieżąco z najnowszymi
                         badaniami.
                        <br/><br/>
                        • Do każdego pacjenta wystosowujemy indywidualną ofertę w zależności od indywidualnych potrzeb.
                        <br/><br/>
                        • Każdy dietetyk pracuje z wybraną grupą podopiecznych, dzięki czemu może poświęcić Ci maksymalną
                        uwagę i dostosować plan do Twoich indywidualnych potrzeb.
                        <br/><br/>
                        • W świecie automatyzacji stawiamy na budowanie prawdziwych relacji. Zawsze rozmawiasz ze
                        specjalistą, który jest zaangażowany i wspiera Cię na każdym kroku.
                        <br/><br/>
                        • W dowolnym momencie możesz zadzwonić na naszą infolinię, dbamy o to by nasi klienci mogli zawsze
                        uzyskać pomoc 24/7.
                    </p>
                </div>
                    <img src={logo} alt=""/>
            </div>
        </>
    )
}

export default AboutUs