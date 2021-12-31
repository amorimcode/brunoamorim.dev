import { Header } from "../components/Header";

import "../styles/home.scss";

export function Home() {
  return (
    <div id="home">
      <Header />
      <section className="jumbotron text-center profile">
        <div className="container">
          <img
            src="https://github.com/amorimcode.png"
            alt=""
            id="profile-photo"
          />
          <h1 className="jumbotron-heading">Bruno Amorim</h1>
          <p className="lead text-muted">Software Engineer</p>
          <div className="contact-links"></div>
          <a href="contact.html" className="btn btn-dark my-2">
            Contato
          </a>
          <div className="social-icons">
            <a target="_blank" href="https://www.linkedin.com/in/amorim-bruno/">
              <i className="fab fa-linkedin icons"></i>
            </a>
            <a target="_blank" href="https://github.com/amorimcode">
              <i className="fab fa-github icons"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/xmorim/">
              <i className="fab fa-instagram icons"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/Bruno.Amorim032/">
              <i className="fab fa-facebook icons"></i>
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+5519991123574&text=&source=&data=&app_absent="
            >
              <i className="fab fa-whatsapp icons"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
