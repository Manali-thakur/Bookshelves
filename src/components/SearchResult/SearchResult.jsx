import { Link } from "react-router-dom";
import "./SearchResult.css";
import { getCover } from "../../utils/bookHelpers";

function SearchResults({ books }) {
  if (books.length === 0) return null;

  return (
    <div className="search-results">
      {books.map((book) => {
        const { title, authors } = book.volumeInfo;
        const cover = getCover(book.volumeInfo);

        return (
          <Link key={book.id} to={`/book/${book.id}`} className="result-card">
            {cover ? (
              <img src={cover} alt={title} className="result-cover" />
            ) : (
              <div className="result-cover no-cover">No Cover</div>
            )}
            <p className="result-title">{title}</p>
            {authors && <p className="result-author">{authors.join(", ")}</p>}
          </Link>
        );
      })}
    </div>
  );
}

export default SearchResults;
