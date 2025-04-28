function thirdStep() {
    return (
        <>
            <div className="register-step-title">
                Krok 3
            </div>
            <div className="register-step-items-third-step-left-side level-choice">
                <div className="register-step-item register-step-item-level-choice">
                    <div className="register-step-item-label register-step-item-label-small-text">
                        Jak często uprawiasz aktywność fizyczną?
                    </div>
                    <div className="register-step-level-choice">
                        <div className="register-step-level-choice-item-text">
                            Żadko
                        </div>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-text">
                            Często
                        </div>
                    </div>
                </div>
                <div className="register-step-item register-step-item-level-choice">
                    <div className="register-step-item-label register-step-item-label-small-text">
                        Jak oceniasz swoją dotychczasową dietę?
                    </div>
                    <div className="register-step-level-choice">
                        <div className="register-step-level-choice-item-text">
                            Niezdrowa
                        </div>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-circle"/>
                        <div className="register-step-level-choice-item-text">
                            Zdrowa
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-step-items-third-step-right-side">
                <div className="register-step-item">
                    <div className="register-step-item-label register-step-item-label-small-text">
                        Jak często spożywasz posiłki w ciagu dnia?
                    </div>
                    <select id="registerMealsCount" className="register-step-item-text-field ">
                        <option value="" disabled selected>Wybierz opcję</option>
                        <option value="OnceADay">Raz dziennie</option>
                        <option value="TwiceADay">Dwa razy dziennie</option>
                        <option value="threeTimesADay">Trzy razy dziennie</option>
                        <option value="fourTimesADay">Cztery razy dziennie</option>
                        <option value="fiveTimesADay">Pięć razy dziennie</option>
                        <option value="More">Więcej</option>
                    </select>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label register-step-item-label-small-text">
                        <span
                            className="register-step-item-requirement register-step-item-requirement-small-text">*</span>Jaką
                        prace wykonujesz?
                    </div>
                    <select id="registerJobType"
                            className="register-step-item-text-field register-step-item-label-small-text">
                        <option value="" disabled selected>Wybierz opcje</option>
                        <option value="sedentaryWork">Praca siedząca</option>
                        <option value="lightlyActiveWork">Praca lekko aktywna</option>
                        <option value="moderatelyPhysicallyDemandingWork">Praca umiarkowanie fizyczna</option>
                        <option value="heavyPhysicalWork">Praca ciężko fizyczna</option>
                        <option value="shiftWorkOrNightWork">Praca ciężko fizyczna</option>
                        <option value="hybridOrRemoteWork">Praca hybrydowa lub zdalna</option>
                    </select>
                </div>
                <div className="register-step-item">
                    <div className="register-step-item-label register-step-item-label-small-text">
                        <span
                            className="register-step-item-requirement register-step-item-requirement-small-text">*</span>Jaki
                        jest twój cel nowej diety?
                    </div>
                    <select id="registerPurpose" className="register-step-item-text-field">
                        <option value="" disabled selected>Wybierz opcje</option>
                        <option value="weightLoss">Redukcja masy ciała</option>
                        <option value="weightGain">Zwiększenie masy ciała</option>
                        <option value="improveAthleticPerformanceEndurance">Poprawa wyników sportowych / wydolności</option>
                        <option value="improveMetabolicHealth">Poprawa zdrowia metabolicznego</option>
                        <option value="improveTestResults">Poprawa wyników badań</option>
                        <option value="supportMedicalTreatment">Wsparcie leczenia chorób</option>
                        <option value="eliminationDiet">Dieta eliminacyjna</option>
                        <option value="buildHealthyHabitsAndNutritionEducation">Zdrowe nawyki i edukacja żywieniowa</option>
                        <option value="pregnancyOrMreastfeedingSupport">Dieta dla kobiet w ciąży / karmiących</option>
                        <option value="balancedVegetarianDiet">Dieta wegetariańska</option>
                        <option value="balancedVeganDiet">Dieta wegańska</option>
                        <option value="maintainCurrentWeightAndHealthyLifestyle">Utrzymanie aktualnej masy ciała i zdrowego stylu życia</option>
                        <option value="muscleGainAndStrength">Dieta na masę i siłę</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default thirdStep;