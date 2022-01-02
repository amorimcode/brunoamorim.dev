import { Link } from "react-router-dom";

import "./styles.scss";

type CardProps = {
  imgSrc?: string;
  title: string,
  children: string;
  projectLink: string;
};

export function Card(props: CardProps) {
  return (
    <div className="card mb-4 box-shadow">
      <img
        className="card-img-top"
        alt="Imagem do projeto"
        src={props.imgSrc}
      />
      <div className="card-body">
        <p className="text-center"><strong>{props.title}</strong></p>
        <p className="card-text">{props.children}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <a href={props.projectLink} target="_blank">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Ver no GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
