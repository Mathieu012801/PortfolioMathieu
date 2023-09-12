import React from 'react';
import '.././about/about.css';
import moiImage from './../../assets/moi.webp'; // Importez l'image

function About() {
  return (
    <section className='about'>
      <h2>à Propos de moi ...</h2>
      <img src={moiImage} alt="Mathieu Delcourt" />
      <p>
        Je m'appelle Mathieu Delcourt, j'ai 22 ans. Je suis passionné de développement web depuis le lycée.
        Après avoir obtenu mon <span className='letter'>bts éléctronique</span>, j'ai décidé de me lancer pleinement dans cet univers grâce notamment à OpenClassrooms et son parcours <span className='letter'>"intégrateur web"</span>.
      </p>
    </section>
  );
}

export default About;
