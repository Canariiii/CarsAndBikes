import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="logo" href="/"><img className='logo-img' src="/assets/img/logo.png" alt="" height={50}/></a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/cars">Cars</a></li>
          <li><a href="/bikes">Bikes</a></li>
          <li><a href="/whishlist">WhishList</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
