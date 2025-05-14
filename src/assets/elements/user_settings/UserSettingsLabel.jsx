const UserSettingsInput = ({labels, onClick, isActive}) => {


    return(
        <div className="user-settings-label">
            {
                labels.map((label, index) => (
                    <p onClick={() => onClick(index)} key={index} className={`user-settings-label-text ${index === 0 ? "user-settings-label-text-first" : ""} ${isActive === index ? "user-settings-label-text-active" : ""}`}>
                        {label}
                    </p>
                ))
            }

        </div>
    );
}; export default UserSettingsInput;