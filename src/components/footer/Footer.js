import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-left">
            <p>© 2023 CarAndBikes Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta</p>
          </div>
          <div className="footer-right">
            <a href="https://www.facebook.com"><FaFacebook /></a>
            <a href="https://www.twitter.com"><FaTwitter /></a>
            <a href="https://www.instagram.com"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/cars">Coches</a></li>
            <li><a href="/bikes">Motos</a></li>
            <li><a href="/contact">Contacta</a></li>
          </ul>
          <p>Visítanos en <a href="https://github.com/Canariiii">GitHub</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
