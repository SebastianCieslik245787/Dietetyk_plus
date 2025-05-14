import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import "../style/UserSettings.css"
import UserSettingsInput from "../assets/elements/user_settings/UserSettingsInput.jsx";
import UserSettingsLabel from "../assets/elements/user_settings/UserSettingsLabel.jsx";
import {changeUserData, changeUserPassword} from "../scripts/sendData/sendUserSettingsChangeData.js";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie"


export function UserSettings() {
    const [cookies, setCookies] = useCookies(['User-Data']);
    const [actualSettings, setActualSettings] = useState(0);

    const [userPasswordData, setUserPasswordData] = useState({
        userPassword: "",
        userConfirmPassword: "",
        userNewPassword: "",
    })

    const initialData = {
        userName: cookies['User-Data']?.name || "",
        userSurname: cookies['User-Data']?.surname || "",
        userEmail: cookies['User-Data']?.email || "",
        userPhone: cookies['User-Data']?.phone || "",
    };

    const [userPersonalData, setUserPersonalData] = useState(initialData);
    const [isModifiedPersonalData, setIsModifiedPersonalData] = useState(false);
    const [isModifiedDescription, setIsModifiedDescription] = useState(false);

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
                        labels={[
                            "Dane Personalne",
                            "Zmiana hasła",
                            "Opis"
                        ]}
                        onClick={setActualSettings}
                        isActive={actualSettings}
                    />
                    {
                        actualSettings === 0 && (
                            <>
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
                                <div
                                    className={`user-settings-save-button ${isModifiedPersonalData ? "user-settings-save-button-active" : ""}`}
                                    onClick={() => {
                                        changeUserData(setCookies, cookies, userPersonalData)
                                    }}>
                                    Zapisz
                                </div>
                            </>
                        )
                    }
                    {actualSettings === 1 && (
                        <>
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
                            <div className={`user-settings-save-button user-settings-save-button-active`}
                                 onClick={() => {
                                     changeUserPassword(setCookies, cookies, userPasswordData)
                                 }}>
                                Zapisz
                            </div>
                        </>
                    )}
                    {
                        actualSettings === 2 && (
                            <>
                                <textarea className={"user-settings-textarea"} placeholder="Opisz siebie..."/>
                                <div
                                    className={`user-settings-save-button user-settings-save-button-active`}
                                    onClick={() => {
                                        changeUserData(setCookies, cookies, userPersonalData)
                                    }}>
                                    Zapisz
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
        ;
}

export default UserSettings;