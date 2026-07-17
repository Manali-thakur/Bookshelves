// components/AboutSection/AboutSection.jsx
import "./About.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="inverted-coma-left">"</h2>
        <p className="about-text">
          Bookshelves was built for anyone who's ever lost an afternoon
          wandering through a bookstore with no plan at all. Search by title,
          author, or whatever's on your mind — we'll pull real books from a
          massive catalog and let you browse them the way you'd browse a real
          shelf.
        </p>
        <p className="about-text">
          No clutter, no algorithms guessing what you "should" read. Just
          search, discover, and see where it takes you.
        </p>
        <h2 className="inverted-coma-right">"</h2>
      </div>
    </section>
  );
}

export default AboutSection;
