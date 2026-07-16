import { useEffect, useRef } from "react";
import "./SearchBar.css";

function SearchBar({ query, setQuery, onSearch }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="search-Container container-xxl">
      <h2 ref={headingRef} className="SearchBar-Heading">
        Start Your Reading Journey
      </h2>

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
