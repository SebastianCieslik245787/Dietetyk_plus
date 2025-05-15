const Slide = ({data, actual, prev, direction}) => {
    return (
        <div className={`slide 
            ${actual ? 'active' : ''} 
            ${prev ? 'out' : ''}
        `}>
            <img src={data.image} alt={data.title} className="slide-image"/>
            <div className={`why-diet-step-text 
                ${actual ? (direction === "left" ? 'text-active-left' : 'text-active-right') : ''}
                ${prev ? 'text-out' : ''}
            `}>
                <div className="why-diet-step-title">{data.title}</div>
                <div className="why-diet-step-description">{data.description}</div>
            </div>
        </div>
    );
};

export default Slide;