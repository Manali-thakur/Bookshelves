import "./Header.css";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark">
      <div className="container-fluid">
        <img
          src="./ICON/favicon-icon.png"
          alt="Bookshelves"
          width="35"
          height="45"
          className="d-inline-block align-text-top navbar-brand"
        />
        {/* &nbsp; &nbsp; */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" aria-current="page" href="/">
              About
            </a>
            <a className="nav-link" href="/">
              Favourites
            </a>
            <a className="nav-link" href="/">
              Reviewed
            </a>
            <a className="nav-link" aria-disabled="true">
              New Arrival
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
