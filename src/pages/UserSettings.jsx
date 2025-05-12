import NavigationBar from "../assets/elements/NavigationBar.jsx";
import "../style/UserSettings.css"
import UserSettingsInput from "../assets/elements/user_settings/UserSettingsInput.jsx";
import UserSettingsLabel from "../assets/elements/user_settings/UserSettingsLabel.jsx";

export function UserSettings() {
    return (
        <>
            <NavigationBar/>
            <div className="user-settings-container">
                <div className="user-settings-personal-data">
                    <UserSettingsLabel
                        label="Dane Peronalne"
                    />
                    <UserSettingsInput
                    id="userEmail"
                    placeHolder="Wpisz e-mail..."
                    label="E-mail:"
                    />
                    <UserSettingsInput
                        id="userEmail"
                        placeHolder="Wpisz e-mail..."
                        label="E-mail:"
                    />
                    <UserSettingsInput
                        id="userEmail"
                        placeHolder="Wpisz e-mail..."
                        label="E-mail:"
                    />
                </div>
            </div>
        </>
    );
} export default UserSettings;