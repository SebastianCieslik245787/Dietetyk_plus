import EmailIcon from "../../../images/icons/email_icon.png"
import PhoneNumberIcon from "../../../images/icons/phone_number_icon.png"
import DefaultUserIcon from "../../../images/icons/deafult_user_icon.png"

const Dietitian = ({data, position, isAssigned, onClick}) => {
    const key = Object.keys(data)[0];
    data = data[key];
    return (
        <>
            <div className={`dietitian-container ${position === 'right' ? 'dietitian-container-right' : ''}`}>
                <div className={`dietitian-image ${position === 'right' ? 'dietitian-image-right' : ''}`}>
                    <img src={data.img_b64 !== "" ? data.img_b64 : DefaultUserIcon} alt=""/>
                </div>
                <div className={`dietitian-info-name-and-surname ${position === 'right' ? 'dietitian-info-name-and-surname-right' : ''}`}>
                    {data.name} {data.surname}
                </div>
                <div className={`dietitian-info-contact ${position === 'right' ? 'dietitian-info-contact-right' : ''}`}>
                    <div className={`dietitian-info-contact-item ${position === 'right' ? 'dietitian-info-contact-item-right' : ''}`}>
                        <div className={`dietitian-info-contact-item-icon ${position === 'right' ? 'dietitian-info-contact-icon-right' : ''}`}>
                            <img src={`${PhoneNumberIcon}`} alt=""/>
                        </div>
                        <div className={`dietitian-info-contact-item-text ${position === 'right' ? 'dietitian-info-contact-item-text-right' : ''}`}>
                            {data.phone}
                        </div>
                    </div>
                    <div className="dietitian-info-contact-item">
                        <div className={`dietitian-info-contact-item-icon ${position === 'right' ? 'dietitian-info-contact-icon-right' : ''}`}>
                            <img src={`${EmailIcon}`} alt=""/>
                        </div>
                        <div className={`dietitian-info-contact-item-text ${position === 'right' ? 'dietitian-info-contact-item-text-right' : ''}`}>
                            {data.email}
                        </div>
                    </div>
                </div>
                <div className={`dietitian-info-description-separator ${position === 'right' ? 'dietitian-info-contact-description-separator-right' : ''}`}/>
                <div className={`dietitian-info-description ${position === 'right' ? 'dietitian-info-contact-description-right' : ''}`}>
                    {data.description}
                </div>
                {
                    !isAssigned && (
                        <>
                            <div className={`dietitian-info-assign-button ${position === 'right' ? 'right' : 'left'}`} onClick={()=>onClick(key)}>
                                Zapisz się
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};
export default Dietitian;