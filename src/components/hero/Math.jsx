import React from 'react';
import '../hero/math.css'
import CV from '../../assets/docs/CV.pdf'

function Hero() {
  return (
    <section className="hero">
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis Mathieu Delcourt & je suis développeur <strong className='bold'>Front-end</strong></p>
      <div>
      <a href={CV}>
      <button className='hero__button'>
          Telecharger mon CV
        </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;