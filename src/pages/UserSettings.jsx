import NavigationBar from "../assets/elements/NavigationBar.jsx";
import "../style/UserSettings.css"
import UserSettingsInput from "../assets/elements/user_settings/UserSettingsInput.jsx";
import UserSettingsLabel from "../assets/elements/user_settings/UserSettingsLabel.jsx";
import {useEffect, useState} from "react";

const initialData = {
    userName: "Sebastian",
    userSurname: "Cieślik",
    userEmail: "scieslik111@gmail.com",
    userPhone: "123-123-123"
};

export function UserSettings() {
    const [userPasswordData, setUserPasswordData] = useState({
        userPassword: "",
        userConfirmPassword: "",
        userNewPassword: "",
    })

    const [userPersonalData, setUserPersonalData] = useState(initialData);
    const [isModifiedPersonalData, setIsModifiedPersonalData] = useState(false);

    useEffect(() => {
        const dataChanged = JSON.stringify(userPersonalData) !== JSON.stringify(initialData);
        setIsModifiedPersonalData(dataChanged);
    }, [userPersonalData]);

    return (
        <>
            <NavigationBar/>
            <div className="user-settings-container">
                <div className="user-settings-personal-data">
                    <UserSettingsLabel
                        label="Dane Peronalne"
                    />
                    <UserSettingsInput
                        id="userName"
                        label="Imię:"
                        value={userPersonalData.userName}
                        setFormData={setUserPersonalData}
                        type="text"
                    />
                    <UserSettingsInput
                        id="userSurname"
                        placeHolder=""
                        label="Nazwisko:"
                        value={userPersonalData.userSurname}
                        setFormData={setUserPersonalData}
                        type="text"
                    />
                    <UserSettingsInput
                        id="userEmail"
                        placeHolder="Wpisz e-mail..."
                        label="E-mail:"
                        value={userPersonalData.userEmail}
                        setFormData={setUserPersonalData}
                        type="text"
                        readOnly={false}
                    />
                    <UserSettingsInput
                        id="userPhone"
                        placeHolder="Wpisz nr telefonu..."
                        label="Nr telefonu:"
                        value={userPersonalData.userPhone}
                        setFormData={setUserPersonalData}
                        type="text"
                        readOnly={false}
                    />
                    <div className={`user-settings-save-button ${isModifiedPersonalData ? "user-settings-save-button-active" : ""}`}>
                        Zapisz
                    </div>
                </div>
                <div className="user-settings-personal-data">
                    <UserSettingsLabel
                        label="Zmiana hasła"
                    />
                    <UserSettingsInput
                        id="userPassword"
                        label="Hasło:"
                        placeHolder="Wpisz aktualne hasło..."
                        value={userPasswordData.userPassword}
                        setFormData={setUserPasswordData}
                        type="password"
                        readOnly={false}
                    />
                    <UserSettingsInput
                        id="userConfirmPassword"
                        placeHolder="Potwierdź hasło..."
                        label="Potwierdz hasło:"
                        value={userPasswordData.userConfirmPassword}
                        setFormData={setUserPasswordData}
                        type="password"
                        readOnly={false}
                    />
                    <UserSettingsInput
                        id="userNewPassword"
                        placeHolder="Wpisz nowe hasło..."
                        label="Nowe hasło:"
                        value={userPasswordData.userNewPassword}
                        setFormData={setUserPasswordData}
                        type="password"
                        readOnly={false}
                    />
                    <div className={`user-settings-save-button user-settings-save-button-active`}>
                        Zapisz
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserSettings;