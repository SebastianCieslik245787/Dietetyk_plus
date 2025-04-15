function fourthStep() {
    return (
        <>
            <div className="register-step-title">
                Krok 4
            </div>
            <div className="register-step-fourth-step">
                <div className="register-step-fourth-step-item register-step-fourth-step-item-left">
                    <p className="register-step-fourth-step-item-title">Czy chorujesz na?</p>
                    <div className="register-step-fourth-step-choice-menu">
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Cukrzyca
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Przewlekła choroba nerek
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Nadciśnienie tętnicze
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Miażdżyca
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Zapalenie trzustki
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Celiakia
                            </div>
                        </div>
                    </div>
                    <div className="register-step-fourth-step-item-text-field">
                        <div className="register-step-fourth-step-item-text-field-label">
                            Inne?
                        </div>
                        <textarea id="otherDiseases" className="register-step-fourth-step-item-text-field-input" placeholder="Wpisz..."/>
                    </div>
                </div>
                <div className="register-step-fourth-step-item">
                    <p className="register-step-fourth-step-item-title">Czy masz alergię na?</p>
                    <div className="register-step-fourth-step-choice-menu">
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Nabiał
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Orzechy
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Soję
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Ryby
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Gluten
                            </div>
                        </div>
                        <div className="register-step-fourth-step-choice-menu-item">
                            <div className="register-step-fourth-step-choice-menu-item-choice-box"/>
                            <div className="register-step-fourth-step-choice-menu-item-text">
                                Owoce morza
                            </div>
                        </div>
                    </div>
                    <div className="register-step-fourth-step-item-text-field">
                        <div className="register-step-fourth-step-item-text-field-label">
                            Inne?
                        </div>
                        <textarea id="otherDiseases" className="register-step-fourth-step-item-text-field-input" type="text" placeholder="Wpisz..."/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default fourthStep;