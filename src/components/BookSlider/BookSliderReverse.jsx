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

function BookSliderReverse() {
  return (
    <Swiper
      modules={[Virtual, Autoplay]}
      spaceBetween={13}
      slidesPerView={6}
      virtual
      loop={true}
      speed={9821} // transition duration in ms (default is ~300)
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: true,
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

export default BookSliderReverse;
