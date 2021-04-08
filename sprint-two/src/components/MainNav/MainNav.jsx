import React from 'react';
import './MainNav.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import uploadIcon from '../../assets/Icons/Icon-upload.svg';
import {Link} from 'react-router-dom';

function MainNav() {
  return (
    <header>
      <nav className="mainNav">
        <Link to="/" className="mainNav__logo--link">
          <img className="mainNav__logo" src={logo} alt="logo" />
        </Link>
        <form className="mainNav__form">
         <input className="mainNav__search-input" type="search" placeholder="Search..." />
          <Link to="/upload">
            <button className="mainNav__button">
            <img className="mainNav__button--icon" src={uploadIcon} alt="icon"/>
            UPLOAD
            </button>
          </Link>
          <div className="avatar mainNav__avatar-search"></div>
        </form>
      </nav>   
    </header>  
  )
}
export default MainNav;

