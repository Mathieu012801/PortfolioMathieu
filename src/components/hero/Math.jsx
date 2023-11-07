import React from 'react';
import '../hero/math.css'
import CV from '../../assets/docs/CV.pdf'

function Hero() {
  return (
    <section className="hero">
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis Mathieu Delcourt & je suis développeur Front-end</p>
      <div>
        <a href={CV} aria-label="Télécharger mon CV au format PDF">
          <button className='hero__button'>
            Télécharger mon CV
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
