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
import logo_header from './Asset/logo-header.svg';
//npm i --save @fortawesome/react-fontawesome@latest

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay
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
      <img src={logo_header}/>
    </div>
    <div className='header-container'>
      <FontAwesomeIcon icon={faSignOutAlt} className='header-container-sign-icon flex' />
      <FontAwesomeIcon icon={faBars} className='header-container-menu-icon'/>
    </div>
  </header>
    <App />
  </React.StrictMode>
);

reportWebVitals();
