import React, {useState} from "react";

const RegisterChoiceLevel = ({label, value, setFormData, leftLabel, rightLabel}) => {
    const [level, setLevel] = useState(value);

    const handleLevelClick = (lvl) => {
        setLevel(lvl);
        setFormData(prev => ({
            ...prev,
            level: lvl,
        }));
    };

    return (
        <div className="register-step-item register-step-item-level-choice">
            <div className="register-step-item-label register-step-item-label-small-text">
                {label}
            </div>
            <div className="register-step-level-choice">
                <div className="register-step-level-choice-item-text">
                    {leftLabel}
                </div>
                {[1, 2, 3, 4, 5].map((lvl) => (
                    <div
                        key={`activity-${lvl}`}
                        className={`register-step-level-choice-item-circle ${
                            level === lvl ? 'register-step-level-choice-item-circle-active' : ''
                        }`}
                        onClick={() => handleLevelClick(lvl)}
                    />
                ))}
                <div className="register-step-level-choice-item-text">
                    {rightLabel}
                </div>
            </div>
        </div>
    );
};
export default RegisterChoiceLevel;