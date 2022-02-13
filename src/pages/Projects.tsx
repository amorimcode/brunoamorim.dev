import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

import instaPost from "../assets/images/instapost.png";
import minhastarefas from "../assets/images/minhastarefas.png";
import portfolioPng from "../assets/images/portfolio.png";
import ieq from "../assets/images/ieq.png";

import "../styles/projects.scss";

export function Projects() {
  return (
    <div className="projects">
      <Header />
      <div className="container">
        <h2 className="jumbotron-heading text-center display-4">Projetos</h2>
        <hr />
        <p className="lead text-center mb-4">
          Aqui estão alguns projetos pessoais que desenvolvi com o intuito de
          adquirir novos conhecimentos na programação. Os mesmos podem ser
          acessados pelos links abaixo, bem como os repositórios no GitHub.
        </p>
        <div className="row">
          <div className="col-md-4">
            <Card
              title="IEQ Vista Alegre"
              imgSrc={ieq}
              isGithub={false}
              projectLink="https://ieqvistaalegre-web.herokuapp.com/"
            >
              Aplicação desenvolvida em React para Igreja.
            </Card>
            <Card
              title="brunoamorim.dev"
              imgSrc={portfolioPng}
              projectLink="https://github.com/amorimcode/brunoamorim.dev"
            >
              Todo o código e arquivos utilizados para a construção desse
              portfólio estão disponíveis para consulta no respositório GitHub.
            </Card>
            <Card
              title="Desafio Pokémon"
              imgSrc="https://github.com/amorimcode/desafiopokemon/raw/main/media/screenshots/Screenshot%202021-01-26%20155324.png?raw=true"
              projectLink="https://github.com/amorimcode/desafiopokemon"
            >
              Este é um teste feito para um processo seletivo que participei.
              Gostei muito da abordagem e de como os conhecimentos foram
              cobrados de forma divertida. A página retorna um pokémon de acordo
              com a temperatura da cidade pesquisada, seguindo alguns critérios
              estabelecidos pelo teste.
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
            <Card
              title="Minhas Tarefas"
              imgSrc={minhastarefas}
              projectLink="https://github.com/amorimcode/minhastarefas"
            >
              To do list feita com react.
            </Card>
          </div>
          <div className="col-md-4">
            <Card
              title="Insta Post Reminder"
              imgSrc={instaPost}
              projectLink="https://github.com/amorimcode/insta-post-reminder/"
            >
              Aplicação desktop desenvolvida com electron que notifica de hora
              em hora para se realizar uma postagem.
            </Card>
            <Card
              title="Lyrics Search"
              imgSrc="https://github.com/amorimcode/lyricssearch/blob/master/media/Screenshot%202020-12-30%20172334.png?raw=true"
              projectLink="https://github.com/amorimcode/lyricssearch/"
            >
              Página da web com sistema de busca de letras de música. Feita
              utilizando a API https://api.lyrics.ovh/.
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
