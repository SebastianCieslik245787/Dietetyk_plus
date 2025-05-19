import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import "../style/UserSettings.css"
import UserSettingsInput from "../assets/elements/user_settings/UserSettingsInput.jsx";
import UserSettingsLabel from "../assets/elements/user_settings/UserSettingsLabel.jsx";
import {changeUserData, changeUserPassword, changeUserDescription} from "../scripts/sendData/sendUserSettingsChangeData.js";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie"
import UserSettingsTextArea from "../assets/elements/user_settings/UserSettingsTextArea.jsx";
import {validateChangePassword, validatePersonalData} from "../scripts/validateData/validateUserSettingsUtils.js";


export function UserSettings() {
    const [cookies, setCookies] = useCookies(['User-Data']);
    const [actualSettings, setActualSettings] = useState(0);

    const [userPasswordData, setUserPasswordData] = useState({
        userPassword: "",
        userConfirmPassword: "",
        userNewPassword: "",
    })

    const [errors, setErrors] = useState({
        userPassword: '',
        userConfirmPassword: '',
        userNewPassword: '',
        userEmail: '',
        userPhone: ''
    });

    const handleSubmit = () => {
        if(actualSettings === 0){
            if(!validatePersonalData(userPersonalData, setErrors)) return
            changeUserData(setCookies, cookies, userPersonalData)
        }
        else if(actualSettings === 1){
            if(!validateChangePassword(initialData, setErrors)) return
            changeUserPassword(setCookies, cookies, userPasswordData)
        }
        else{
            changeUserDescription(setCookies, cookies, userDescription)
        }
    }

    const initialData = {
        userName: cookies['User-Data']?.name || "",
        userSurname: cookies['User-Data']?.surname || "",
        userEmail: cookies['User-Data']?.email || "",
        userPhone: cookies['User-Data']?.phone || "",
    };

    const initialDescription = cookies['User-Data']?.description || ""

    const [userDescription, setUserDescription] = useState(initialDescription);
    const [userPersonalData, setUserPersonalData] = useState(initialData);
    const [isModifiedPersonalData, setIsModifiedPersonalData] = useState(false);
    const [isModifiedDescription, setIsModifiedDescription] = useState(false);

    useEffect(() => {
        setIsModifiedPersonalData(JSON.stringify(userPersonalData) !== JSON.stringify(initialData));
        setIsModifiedDescription(userDescription !== initialDescription);
    }, [userPersonalData, userDescription]);

    return (
        <>
            <NavigationBar/>
            <div className="user-settings-container">
                <div className="user-settings-personal-data">
                    <UserSettingsLabel
                        labels={cookies["User-Data"].role === "user" ? [
                            "Dane Personalne",
                            "Zmiana hasła",
                        ] : [
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
                                    setError={setErrors}
                                    error={errors.userEmail}
                                />
                                <UserSettingsInput
                                    id="userPhone"
                                    placeHolder="Wpisz nr telefonu..."
                                    label="Nr telefonu:"
                                    value={userPersonalData.userPhone}
                                    setFormData={setUserPersonalData}
                                    type="text"
                                    readOnly={false}
                                    setError={setErrors}
                                    error={errors.userPhone}
                                />
                                <div
                                    className={`user-settings-save-button ${isModifiedPersonalData ? "user-settings-save-button-active" : ""}`}
                                    onClick={handleSubmit}>
                                    Zapisz
                                </div>
                            </>
                        )
                    }
                    {actualSettings === 1 && (
                        <>
                            <UserSettingsInput
                                id="userPassword"
                                label="Aktualne Hasło:"
                                placeHolder="Wpisz aktualne hasło..."
                                value={userPasswordData.userPassword}
                                setFormData={setUserPasswordData}
                                type="password"
                                readOnly={false}
                                error={errors.userPassword}
                            />
                            <UserSettingsInput
                                id="userNewPassword"
                                placeHolder="Wpisz nowe hasło..."
                                label="Nowe hasło:"
                                value={userPasswordData.userNewPassword}
                                setFormData={setUserPasswordData}
                                type="password"
                                readOnly={false}
                                error={errors.userNewPassword}
                            />
                            <UserSettingsInput
                                id="userConfirmPassword"
                                placeHolder="Potwierdz hasło..."
                                label="Potwierdz hasło:"
                                value={userPasswordData.userConfirmPassword}
                                setFormData={setUserPasswordData}
                                type="password"
                                readOnly={false}
                                error={errors.userConfirmPassword}
                            />
                            <div className={`user-settings-save-button user-settings-save-button-active`}
                                 onClick={handleSubmit}>
                                Zapisz
                            </div>
                        </>
                    )}
                    {
                        actualSettings === 2 && (
                            <>
                                <UserSettingsTextArea
                                    placeHolder = "Opisz siebie..."
                                    setFormData = {setUserDescription}
                                    value = {userDescription}
                                />
                                <div
                                    className={`user-settings-save-button ${isModifiedDescription ? "user-settings-save-button-active" : ""}`}
                                    onClick={handleSubmit}>
                                    Zapisz
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default UserSettings;