import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { getBook } from "../api/books";
import { getCover, authorSearchPath } from "../utils/bookHelpers";
import "./BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const canGoBack = useLocation().key !== "default"; // false on a direct visit
  const [state, setState] = useState({ id: null, book: null, error: "" });

  useEffect(() => {
    const controller = new AbortController();
    getBook(id, controller.signal)
      .then((book) => setState({ id, book, error: "" }))
      .catch((err) => {
        if (err.name !== "AbortError")
          setState({ id, book: null, error: "Could not load this book." });
      });
    return () => controller.abort();
  }, [id]);

  if (state.id !== id) return <p className="details-status">Loading...</p>;
  if (state.error) return <p className="details-status">{state.error}</p>;

  const info = state.book.volumeInfo;
  const cover = getCover(info, ["large", "medium", "small", "thumbnail"]);

  return (
    <main className="details">
      <button
        className="details-back"
        onClick={() => (canGoBack ? navigate(-1) : navigate("/"))}>
        ← Back
      </button>

      <div className="details-body">
        {cover ? (
          <img src={cover} alt={info.title} className="details-cover" />
        ) : (
          <div className="details-cover no-cover">No Cover</div>
        )}

        <div className="details-info">
          <h1>{info.title}</h1>
          {info.subtitle && <h3>{info.subtitle}</h3>}

          <p>
            <b>Author: </b>
            {info.authors?.length
              ? info.authors.map((name, i) => (
                  <span key={name}>
                    {i > 0 && ", "}
                    <Link to={authorSearchPath(name)}>{name}</Link>
                  </span>
                ))
              : "Unknown"}
          </p>
          <p>
            <b>Publisher:</b> {info.publisher || "N/A"} (
            {info.publishedDate || "N/A"})
          </p>
          <p>
            <b>Pages:</b> {info.pageCount || "N/A"}
          </p>
          <p>
            <b>Rating:</b>{" "}
            {info.averageRating ? `${info.averageRating}/5` : "Not rated"}
          </p>
          <p>
            <b>Categories:</b> {info.categories?.join(", ") || "N/A"}
          </p>

          <div
            className="details-description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                info.description || "No description available.",
              ),
            }}
          />

          {info.previewLink && (
            <a
              href={info.previewLink}
              target="_blank"
              rel="noopener noreferrer">
              Preview on Google Books ↗
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
