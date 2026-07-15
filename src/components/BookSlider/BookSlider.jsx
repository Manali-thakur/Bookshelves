import "./BookSlider.css";
import { Virtual, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/virtual";

const bookImages = import.meta.glob("../../assets/Books/*.png", {
  eager: true,
  import: "default",
});

const slides = Object.values(bookImages);

function BookSlider() {
  return (
    <Swiper
      modules={[Virtual, Autoplay]}
      spaceBetween={3}
      slidesPerView={6}
      virtual
      loop={true}
      speed={7000}
      autoplay={{
        duration : 0.1,
        // delay:1,
        disableOnInteraction: false,
      }}>
      {slides.map((src, index) => (
        <SwiperSlide key={src} virtualIndex={index}>
          <div className="book-card">
            <img src={src} alt={`Book ${index + 1}`} className="book-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BookSlider;
