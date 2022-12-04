import { Link } from "react-router-dom";
import { Home } from "../../pages/Home";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Bruno Amorim
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/projetos">
                Projetos
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://docs.google.com/document/d/12-mNlG6HwKOuiEyOWYGWxu6pA-l2z1Pt/edit?usp=share_link&ouid=102166846732539016691&rtpof=true&sd=true"
                target="_blank"
              >
                Currículo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
