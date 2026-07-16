import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <div className="footer-row">
          <div className="column">
            <h4>Company</h4>
            <ul>
              <a href="">
                <li className="list-group-item">About</li>
              </a>
              <a href="">
                <li className="list-group-item">Contact</li>
              </a>
              <a href="">
                <li className="list-group-item">FAQs</li>
              </a>
            </ul>
          </div>

          <div className="column">
            <h4>Explore</h4>
            <ul>
              <a href="">
                <li className="list-group-item">Search Books</li>
              </a>
              <a href="">
                <li className="list-group-item">Genre</li>
              </a>
              <a href="">
                <li className="list-group-item">Popular Books</li>
              </a>
              <a href="">
                <li className="list-group-item">New Releases</li>
              </a>
            </ul>
          </div>

          <div className="column">
            <h4>Resources</h4>
            <ul>
              <a href="">
                <li className="list-group-item">Reading Tips</li>
              </a>
              <a href="">
                <li className="list-group-item">Book Recommendation</li>
              </a>
              <a href="">
                <li className="list-group-item">Reading List</li>
              </a>
            </ul>
          </div>

          <div className="column">
            <h4>Legal</h4>
            <ul>
              <a href="">
                <li className="list-group-item">Privacy Policy</li>
              </a>
              <a href="">
                <li className="list-group-item">Terms of Service</li>
              </a>
              <a href="">
                <li className="list-group-item">Cookie Policy</li>
              </a>

              
            </ul>
          </div>
        </div>
        <article className="footer-bottom">
            <h6>&copy; 2026 BookShelves. All rights reserved.</h6>
            <p><i>Created and developed by Manali</i></p>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
