import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Icon
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import logo_green from './Asset/logo_green.svg';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const openMenu = (event: { target: any; }) => {
  if(event.target.closest('.header-container-menu-icon')) {  
    var nav_bar = event.target.closest('#root').querySelector('.desktop-navbar');
    nav_bar.classList.add('mobile');
  }
}
document.addEventListener('mousedown', openMenu, false);

const closeMenu = (event: { target: any; }) => {
  if(event.target.closest('.desktop-navbar-closebtn')) {  
    var nav_bar = event.target.closest('.desktop-navbar');
    nav_bar.classList.remove('mobile');
  }
}
document.addEventListener('mousedown', closeMenu, false);


root.render(
  <React.StrictMode>
  <header>
    <div className='header-logo-container'>
      <p>Leaf'UP</p>
      <img src={logo_green}/>
    </div>
    <div className='header-container'>
      <a href='/connexion/'><FontAwesomeIcon icon={faSignOutAlt} className='header-container-sign-icon'/></a>
      <FontAwesomeIcon icon={faBars} className='header-container-menu-icon'/>
    </div>
  </header>
    <App />
  </React.StrictMode>
);

reportWebVitals();
