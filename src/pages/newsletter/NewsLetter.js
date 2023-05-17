import React, { useState } from 'react';
import './NewsLetter.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario o almacenar el correo electrónico
    console.log('Correo electrónico enviado:', email);
    setEmail('');
    setSubscribed(true);
  };

  const handleRSSClick = () => {
    window.location.href = './rss';
  };
  
  const news = [
    {
      title: 'Nueva BMW M1000RR 2023',
      date: 'Mayo 10, 2023',
      content: 'Nueva y mejorada BMW M1000RR',
    },
    {
      title: 'El nuevo modelo Huracan de Lamborghini',
      date: 'Mayo 8, 2023',
      content: 'El famoso Lamborghini Huracan recibe una mejora en 2023',
    },
  ];

  return (
    <div>
      <Header />

      <div className="newsletter">
        <h2>Suscríbete a nuestro boletín</h2>
        {subscribed ? (
          <p className="success-message">¡Gracias por suscribirte!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Suscribirse</button>
          </form>
        )}
        <div className="news-container">
          <h3>
            <a href="/rss" className="fa fa-rss" onClick={handleRSSClick}>
              <div className="rss-box">
                <FontAwesomeIcon icon={faRss} className="rss-icon" />
              </div>
            </a>
            Últimas noticias
          </h3>
          {news.map((item, index) => (
            <div key={index} className="news-item">
              <h4>{item.title}</h4>
              <p className="news-date">{item.date}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;
