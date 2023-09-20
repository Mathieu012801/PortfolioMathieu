import React from 'react';
import '../footer/footer.css'

function Footer() {
  return (
    <footer className="footer">
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
              <li><a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/votreprofil" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              {/* Ajoutez d'autres liens vers vos réseaux sociaux ici */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
