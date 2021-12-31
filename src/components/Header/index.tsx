export function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/index.html">Bruno Amorim</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/projects.html">Projetos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact.html">Contato</a>
                </li>
            </ul>
        </div>
    </nav>
  </header>
  )
}