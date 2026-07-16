// components/SearchResults/SearchResults.jsx
import "./SearchResult.css";

function SearchResults({ books }) {
  if (books.length === 0) return null;

  return (
    <div className="search-results">
      {books.map((book) => {
        const { title, authors, imageLinks } = book.volumeInfo;
        const cover = imageLinks?.thumbnail;

        return (
          <div key={book.id} className="result-card">
            {cover ? (
              <img src={cover} alt={title} className="result-cover" />
            ) : (
              <div className="result-cover no-cover">No Cover</div>
            )}
            <p className="result-title">{title}</p>
            {authors && <p className="result-author">{authors.join(", ")}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
