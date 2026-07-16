import "./SearchBar.css"

function SearchBar({query, setQuery, onSearch}) {
  return (
    <section className="search-Container container-xxl">
      <div className="search-bar">
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
    </section>
  );
  
}

export default SearchBar;