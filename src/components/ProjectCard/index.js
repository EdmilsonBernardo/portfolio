import React from 'react';
import './Card.css';

const Card = ({ title, body, imageUrl }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={imageUrl} alt="imagem" className="img-project" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3 >{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <a
            href="https://github.com/EdmilsonBernardo/project-movie-card-library-crud"
            target="_blank"
          >
            Go project
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
