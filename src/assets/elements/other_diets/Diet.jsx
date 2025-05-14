const Diet = ({data}) => {
    return (
        <>
            <div className="other-diet-item">
                <div className="other-diet-image">
                    <img src={data.image} alt=""/>
                </div>
                <div className="other-diet-title">
                    {data.name}
                </div>
                <div className="other-diet-description">
                    {data.description}
                </div>
            </div>
        </>
    );
}; export default Diet;