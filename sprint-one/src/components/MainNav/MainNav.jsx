import React from 'react';
import './MainNav.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import uploadIcon from '../../assets/Icons/Icon-upload.svg';


function MainNav() {
  return (

      <nav className="mainNav">
      <a className="mainNav__logo--link" href="../../index.html">
        <img className="mainNav__logo" src={logo} alt="logo" />
        </a>
        <form className="mainNav__form">
         <input className="mainNav__search-input" placeholder="Search..." />
          <button className="mainNav__button">
            <img className="mainNav__button--icon" src={uploadIcon} alt="icon"/>
            UPLOAD
            </button>
          <div className="mainNav__avatar"></div>
        </form>
      </nav>   
  )
}
export default MainNav;
