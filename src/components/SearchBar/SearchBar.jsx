import "./SearchBar.css";
function SearchBar({ query, setQuery, onSearch }) {
  return (
    <section className="search-Container container-xxl">
      <h2 className="SearchBar-Heading">Start Your Reading Journey</h2>
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
