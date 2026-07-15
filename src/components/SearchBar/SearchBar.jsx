import "./SearchBar.css"

function SearchBar({query, setQuery, onSearch}) {
  return (
    <div className="search-bar container-xxl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for Books..."
        className="search-input"
      />
      <button onClick={onSearch} className="search-button">
        Search
      </button>
    </div>
  );
  
}

export default SearchBar;