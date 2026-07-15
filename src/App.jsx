import "./App.css";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookSlider from "./components/BookSlider/BookSlider";
import BookSliderReverse from "./components/BookSlider/BookSliderReverse";
import { useState } from "react";
// importing api key
const api_key = import.meta.env.VITE_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

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
      <SearchBar query={query} setQuery={setQuery} onSearch={searchBook} />
      
      <BookSlider />
      <BookSliderReverse />
    </>
  );
}

export default App;
