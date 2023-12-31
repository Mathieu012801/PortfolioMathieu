import React from 'react';
import Portfolio from '../../Data/Projet';
import './Card.css';

function Card() {
  return (
    <section className="card-container" id='projets'>
      <h2 className='projet_title'>Mes projets</h2>
      <div className="cards">
      {Portfolio.map((projet) => (
        <div className="projet" key={projet.id}>
            <img src={projet.image} alt={projet.titre} />
        
          <div className="info-container">
            <h3 className='card_title'>{projet.titre}</h3>
            <p className='card_description'>{projet.description}</p>
            <ul>
              <li className='card_tags'>{projet.tags}</li>
             </ul>
          </div>
          <div className="boutons-projet">
            {projet.url && (
              <a
                href={projet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lien-projet"
                aria-label={`Voir le projet : ${projet.titre}`}
              >
                Voir le projet
              </a>
            )}
          </div>
        </div>
      ))}
        </div>
    </section>
  );
}

export default Card;