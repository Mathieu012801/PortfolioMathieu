import React from 'react';
import '../footer/footer.css'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <footer className="footer" id='contact'>
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Adresse e-mail : <a href="mailto:mathieudelcourt01@gmail.com">mathieudelcourt01@gmail.com</a></p>
            <p>Numéro de téléphone : <a href="tel:0688982850">0688982850</a></p>
          </div>
          <div className="footer-social">
            <h3>Réseaux sociaux</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/mathieu-delcourt-237332273/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/Mathieu012801" target="_blank" rel="noopener noreferrer">github</a></li>
            </ul>
            <div>
              <span className='arrow'onClick={scrollToTop}>&#8593;</span>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
