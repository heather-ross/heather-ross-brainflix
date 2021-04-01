import React from 'react';
import '../MainNav/MainNav.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';

function MainNav() {
  return (
    <header>
      <nav className="mainNav">
      <a className="mainNav__logo--link" href="../../index.html">
        <img className="mainNav__logo" src={logo} alt="logo" />
        </a>
        <form className="mainNav__form">
         <input className="mainNav__search-input" placeholder="Search..." />
          <button className="mainNav__button">UPLOAD</button>
          <div className="mainNav__avatar"></div>
        </form>
      </nav>
    </header>
  )
}
export default MainNav;
