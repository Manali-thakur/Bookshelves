import "./HeroSection.css";

function HeroSection({onStartClick}) {
  return (
    <section className="herosection container-xxl">
      <h1 className="herosection-title">BookShelves</h1>
      <h4 className="herosection-quote">
        Your next favorite book is just a search away.
      </h4>
      <button onClick={onStartClick} className="letsStartButton">Let's Start</button>
    </section>
  );
}

export default HeroSection;
