const UserSettingsLabel = ({ labels, onClick, isActive }) => {
    return (
        <div className="user-settings-label">
            {labels.map((label, index) => (
                <div
                    key={index}
                    onClick={() => onClick(index)}
                    className={`user-settings-label-text ${index === 0 ? "user-settings-label-text-first" : ""} ${isActive === index ? "user-settings-label-text-active" : ""}`}
                >
                    {label}
                    <div className={`user-settings-label-item-bottom-bar ${isActive === index ? "active" : ""}`} />
                </div>
            ))}
        </div>
    );
};

export default UserSettingsLabel;
