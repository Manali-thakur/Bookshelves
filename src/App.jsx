import "./App.css";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResult/SearchResult";
import BookSlider from "./components/BookSlider/BookSlider";
import BookSliderReverse from "./components/BookSlider/BookSliderReverse";
import { useState } from "react";
import { useRef } from "react";

// importing api key
const api_key = import.meta.env.VITE_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const searchSectionRef = useRef(null);

  const scrollToSearch = () => {
    searchSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // API ENDpoint
  const searchBook = async () => {
    if (!query.trim()) return;

    setError("");
    setBooks([]);

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${api_key}`,
      );
      if (!res.ok) throw new error("API error");
      const data = await res.json();
      console.log(data);
      setBooks(data.items || []);
    } catch (err) {
      console.log(err.message);
      setError("Something went wrong");
    }
  };
  return (
    <>
      <Header />
      <HeroSection onStartClick={scrollToSearch} />
      <BookSlider />
      <BookSliderReverse />
      <div ref={searchSectionRef}>
        <SearchBar query={query} setQuery={setQuery} onSearch={searchBook} />
      </div>
      <SearchResults books={books} />
    </>
  );
}

export default App;
