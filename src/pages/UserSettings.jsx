import NavigationBar from "../assets/elements/navigation/NavigationBar.jsx";
import "../style/UserSettings.css";
import UserSettingsInput from "../assets/elements/user_settings/UserSettingsInput.jsx";
import UserSettingsLabel from "../assets/elements/user_settings/UserSettingsLabel.jsx";
import UserSettingsTextArea from "../assets/elements/user_settings/UserSettingsTextArea.jsx";
import {
    sendChangeUserData,
    sendChangeUserPassword,
    sendChangeUserDescription
} from "../scripts/sendData/sendUserSettingsChangeData.js";
import {validateChangePassword, validatePersonalData} from "../scripts/validateData/validateUserSettingsUtils.js";
import {useEffect, useMemo, useState} from "react";
import {useImageUploader} from "../assets/hooks/useImageUploader.jsx";
import LoadImageIcon from "../images/icons/add_image_icon.png";
import {getDataFromLocalStorage} from "../scripts/getDataFromLocalStorage.js";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export function UserSettings() {

    const userData = getDataFromLocalStorage("");
    const [cookies] = useCookies(["User-Key"]);
    const [actualSettings, setActualSettings] = useState(0);

    const navigator = useNavigate();

    const initialData = useMemo(() => ({
        userName: userData?.name || "",
        userSurname: userData?.surname || "",
        userEmail: userData?.email || "",
        userPhone: userData?.phone || "",
        img_b64: userData?.img_b64 || LoadImageIcon
    }), [userData]);

    const initialDescription = useMemo(() => userData?.description || "", [userData]);

    const [userPersonalData, setUserPersonalData] = useState(initialData);
    const [userDescription, setUserDescription] = useState(initialDescription);
    const [userPasswordData, setUserPasswordData] = useState({
        userPassword: "",
        userConfirmPassword: "",
        userNewPassword: "",
    });

    const [errors, setErrors] = useState({
        userPassword: "",
        userConfirmPassword: "",
        userNewPassword: "",
        userEmail: "",
        userPhone: "",
    });

    const [isModifiedPersonalData, setIsModifiedPersonalData] = useState(false);
    const [isModifiedPassword, setIsModifiedPassword] = useState(false);
    const [isModifiedDescription, setIsModifiedDescription] = useState(false);

    const {
        image,
        fileInputRef,
        handleFileChange,
        handleDrop,
        handleDragOver
    } = useImageUploader(initialData.img_b64, (base64data) => {
        setUserPersonalData((prev) => ({...prev, img_b64: base64data}));
        setIsModifiedPersonalData(true);
    });

    useEffect(() => {
        console.log("Image base64:", image);
        console.log("userData.img_b64:", userData?.img_b64);
    }, [image, userData]);

    useEffect(() => {
        if (actualSettings === 1) {
            setIsModifiedPassword(
                userPasswordData.userPassword !== "" &&
                userPasswordData.userNewPassword !== "" &&
                userPasswordData.userConfirmPassword !== ""
            );
        } else {
            setIsModifiedPersonalData(JSON.stringify(userPersonalData) !== JSON.stringify(initialData));
            setIsModifiedDescription(userDescription !== initialDescription);
        }
    }, [userPersonalData, userPasswordData, userDescription, actualSettings, initialData, initialDescription]);

    const handleSubmit = () => {
        if (actualSettings === 0) {
            if (!validatePersonalData(userPersonalData, setErrors)) return;
            sendChangeUserData(cookies, userPersonalData);
        } else if (actualSettings === 1) {
            if (!validateChangePassword(userPasswordData, setErrors)) return;
            sendChangeUserPassword(cookies, userPasswordData);
            navigator("/logout")
        } else {
            sendChangeUserDescription(cookies, userDescription);
        }
        console.log(userPersonalData);
    };

    return (
        <>
            <NavigationBar/>
            <div className="user-settings-container">
                <div className="user-settings-personal-data">
                    <UserSettingsLabel
                        labels={
                            userData.role === "user"
                                ? ["Dane Personalne", "Zmiana hasła"]
                                : ["Dane Personalne", "Zmiana hasła", "Opis"]
                        }
                        onClick={setActualSettings}
                        isActive={actualSettings}
                    />
                    {actualSettings === 0 && (
                        <>
                            <div
                                className={`user-settings-input-img ${userPersonalData.img_b64 !== LoadImageIcon ? 'changed' : ''}`}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onClick={() => fileInputRef.current.click()}
                            >
                                <img src={userPersonalData.img_b64}
                                     className={userPersonalData.img_b64 === LoadImageIcon ? 'preview' : ''}
                                     alt="preview"/>
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{display: "none"}}
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                />
                            </div>
                            <UserSettingsInput
                                id="userName"
                                label="Imię:"
                                value={userPersonalData.userName}
                                setFormData={setUserPersonalData}
                                type="text"
                            />
                            <UserSettingsInput
                                id="userSurname"
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
                                className={`user-settings-save-button ${
                                    isModifiedPersonalData ? "user-settings-save-button-active" : ""
                                } personal-data`}
                                onClick={handleSubmit}
                            >
                                Zapisz
                            </div>
                        </>
                    )}
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
                                placeHolder="Potwierdź hasło..."
                                label="Potwierdź hasło:"
                                value={userPasswordData.userConfirmPassword}
                                setFormData={setUserPasswordData}
                                type="password"
                                readOnly={false}
                                error={errors.userConfirmPassword}
                            />
                            <div
                                className={`user-settings-save-button ${
                                    isModifiedPassword ? "user-settings-save-button-active" : ""
                                }`}
                                onClick={handleSubmit}
                            >
                                Zapisz
                            </div>
                        </>
                    )}
                    {actualSettings === 2 && (
                        <>
                            <UserSettingsTextArea
                                placeHolder="Opisz siebie..."
                                setFormData={setUserDescription}
                                value={userDescription}
                            />
                            <div
                                className={`user-settings-save-button ${
                                    isModifiedDescription ? "user-settings-save-button-active" : ""
                                }`}
                                onClick={handleSubmit}
                            >
                                Zapisz
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default UserSettings;
