import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./BookSlider.css";

import { searchBooks } from "../../api/books";
import { getCover } from "../../utils/bookHelpers";

function BookSlider({
  query = "subject:fiction",
  reverse = false,
  speed = 4700,
}) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    searchBooks(query, { signal: controller.signal, maxResults: 30 })
      .then((items) => setBooks(items.filter((b) => getCover(b.volumeInfo))))
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      });
    return () => controller.abort();
  }, [query]);

  if (books.length === 0) return null;

  // loop mode needs enough slides to fill the row
  const slides = books.length < 14 ? [...books, ...books] : books;

  return (
    <section className="bookslider-section">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        speed={speed}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}>
        {slides.map((book, i) => {
          const { title, authors } = book.volumeInfo;
          return (
            <SwiperSlide key={`${book.id}-${i}`}>
              <Link to={`/book/${book.id}`} className="book-card">
                <img
                  src={getCover(book.volumeInfo)}
                  alt={title}
                  className="book-cover"
                />
                <p className="book-title">{title}</p>
                {authors && <p className="book-author">{authors[0]}</p>}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default BookSlider;
