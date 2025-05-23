/**
 * Element wyświetlany na stronie inne diety {@link OtherDiets}. Zawiera nazwę diety oraz jej opis.
 * @see OtherDiets
 * @component
 *
 * @param {Object} data - Dane diety.
 * @property {string} data.name - Nazwa diety.
 * @property {string} data.description - Opis diety.
 * @property {Object} data.image - Zdjęcie diety.
 *
 * @returns {JSX.Element} Element wyświetlany na stronie {@link OtherDiets}
 */
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