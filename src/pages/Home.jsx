import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/About/About";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResult/SearchResult";
import BookSlider from "../components/BookSlider/BookSlider";
import BookQuoteSection from "../components/BookQuote/BookQuote";
import { searchBooks } from "../api/books";

export default function Home() {
  const [params, setParams] = useSearchParams();
  const urlQuery = params.get("q") || "";

  const [query, setQuery] = useState(urlQuery);
  const [result, setResult] = useState({ key: "", books: [], failed: false });
  const searchSectionRef = useRef(null);

  // keep the input in sync when the URL changes (back button, author links)
  const [syncedQuery, setSyncedQuery] = useState(urlQuery);
  if (syncedQuery !== urlQuery) {
    setSyncedQuery(urlQuery);
    setQuery(urlQuery);
  }

  const scrollToSearch = () =>
    searchSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  // fetch whenever the URL query changes
  useEffect(() => {
    if (!urlQuery) return;
    const controller = new AbortController();
    searchBooks(urlQuery, { signal: controller.signal })
      .then((books) => setResult({ key: urlQuery, books, failed: false }))
      .catch((err) => {
        if (err.name !== "AbortError")
          setResult({ key: urlQuery, books: [], failed: true });
      });
    return () => controller.abort();
  }, [urlQuery]);

  // jump to the results when arriving with a search in the URL
  useEffect(() => {
    if (urlQuery) searchSectionRef.current?.scrollIntoView();
  }, [urlQuery]);

  const onSearch = () => {
    const q = query.trim();
    if (q) setParams({ q });
  };

  const done = urlQuery && result.key === urlQuery;
  const loading = urlQuery && !done;
  const books = done ? result.books : [];

  return (
    <>
      <HeroSection onStartClick={scrollToSearch} />
      <BookSlider query="best fiction novels" />
      <BookSlider query="fantasy novels" reverse speed={9821} />
      <AboutSection />
      <div ref={searchSectionRef}>
        <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
      </div>

      {loading && <p className="search-status">Searching...</p>}
      {done && result.failed && (
        <p className="search-status">Something went wrong. Please try again.</p>
      )}
      {done && !result.failed && books.length === 0 && (
        <p className="search-status">No books found for "{urlQuery}".</p>
      )}

      <SearchResults books={books} />
      <BookQuoteSection />
    </>
  );
}
