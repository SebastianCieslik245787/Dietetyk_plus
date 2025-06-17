import {useRef, useState} from "react";
import OnShowElement from "../../hooks/OnShowElement.jsx";

const DietType = ({data, direction}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    OnShowElement(elementRef, setIsVisible);

    return (
        <>
            <div ref={elementRef}  className={`${direction === 'left' ? 'upper-diet-type' : 'lower-diet-type'} diet-type ${isVisible ? 'visible' : ''}`}>
                <img src={data.img_b64} alt=""/>
                <div className={direction === 'left' ? 'upper-diet-type-text-content' : 'lower-diet-type-text-content'}>
                    <div className={direction === 'left' ? 'upper-diet-type-header' : 'lower-diet-type-header'}>
                        <p className={direction === 'left' ? 'upper-diet-type-header-text' : 'lower-diet-type-header-text'}>
                            {data.name}
                        </p>
                    </div>
                    <p className={direction === 'left'? 'upper-diet-type-text' : 'lower-diet-type-text'}>
                        {data.description}
                    </p>
                </div>
            </div>
        </>
    );
}; export default DietType