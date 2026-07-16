import "./BookQuote.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const quotes = [
  {
    text: "A room without books is like a body without a soul.",
    author: "Cicero",
  },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  {
    text: "There is no friend as loyal as a book.",
    author: "Ernest Hemingway",
  },
  { text: "Books are a uniquely portable magic.", author: "Stephen King" },
  {
    text: "Once you learn to read, you will be forever free.",
    author: "Frederick Douglass",
  },
];

function BookQuoteSection() {
  return (
    <section className="quote-section">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={800}>
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <div className="quote-card">
              <p className="quote-text">"{quote.text}"</p>
              <p className="quote-author">— {quote.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BookQuoteSection;
