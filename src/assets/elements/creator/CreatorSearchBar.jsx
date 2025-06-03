const CreatorSearchBar = ({placeHolder, onChange}) => {
    return (
        <>
            <input className="creator-menu-search-bar" type="text" placeholder={placeHolder} onChange={onChange} />
        </>
    );
}; export default CreatorSearchBar;