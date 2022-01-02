import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

import "../styles/projects.scss";

export function Projects() {
  return (
    <div className="projects">
      <Header />
      <div className="container">
        <h2 className="jumbotron-heading text-center display-4">Projetos</h2>
        <hr />
        <p className="lead text-center">
          Aqui estão alguns projetos pessoais que desenvolvi com o intuito de
          adquirir novos conhecimentos na programação. Os mesmos podem ser
          acessados pelos links abaixo, bem como os repositórios no GitHub.
        </p>
        <div className="row">
          <div className="col-md-4">
          <Card
              title="Car API - Node.js"
              imgSrc="https://github.com/amorimcode/CarAPI/raw/main/assets/collection.png"
              projectLink="https://github.com/amorimcode/CarAPI"
            >
              API criada para gerenciar (incluir, excluir, editar e consultar)
              um cadastro de carros com sistema criptografado de cadastro e
              login de usuários.
            </Card>
          </div>
          <div className="col-md-4">
            <Card
              title="Car API - Node.js"
              imgSrc="https://github.com/amorimcode/CarAPI/raw/main/assets/collection.png"
              projectLink="https://github.com/amorimcode/CarAPI"
            >
              API criada para gerenciar (incluir, excluir, editar e consultar)
              um cadastro de carros com sistema criptografado de cadastro e
              login de usuários.
            </Card>
          </div>
          <div className="col-md-4">
            <Card
              title="Insta Post Reminder"
              imgSrc="https://github.com/amorimcode/CarAPI/raw/main/assets/collection.png"
              projectLink="https://github.com/amorimcode/CarAPI"
            >
              Aplicação desktop desenvolvida com electron que notifica de hora
              em hora para se realizar uma postagem.
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
