import React from 'react';
import '../../components/Skills/skills.css';
import '../../components/Skills/skills.css';
import { Data } from '../../Data/data';

function Skills() {
  return (
    <section className='skills_container' id='compétences'>
      <h2 className='skill_title'>Mes Compétences</h2>
      <div className='skills'>
        {Data[0].competences.map((competence) => (
          <div className="skill_cards" key={competence.id}>
            <img src={competence.image[0]} alt={competence.titre} aria-label={competence.titre} className='skill_img' />
            <p className='skill_description'>{competence.description} </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
