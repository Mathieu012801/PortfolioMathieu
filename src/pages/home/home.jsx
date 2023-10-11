import React from 'react';
import Hero from '../../components/hero/Math.jsx';
import About from '../../components/about/About.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Skills from '../../components/Skills/skills.jsx'
import Card from'../../components/Card/Card.jsx';



function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Skills />
      <Card/>
      <Footer/>
     

      
    </>
  );
}

export default Home;
