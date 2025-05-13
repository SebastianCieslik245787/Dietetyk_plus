const SearchBar = ({ placeHolder, value, onChange }) => {
    return (
        <input
            type="text"
            className="dietitian-patients-search-bar"
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
        />
    );
}; export default SearchBar;