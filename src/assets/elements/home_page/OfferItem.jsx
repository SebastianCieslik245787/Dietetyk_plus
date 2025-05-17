const OfferItem = ({data}) => {
    return(
        <>
            <div className="offer-item">
                <img src={data.image} alt=""/>
                <div className="offer-item-text-content">
                    <p className="offer-item-header-text">
                        {data.label}
                    </p>
                    <p className="offer-item-text">
                        {data.description}
                    </p>
                </div>
            </div>
        </>
    );
}; export default OfferItem;