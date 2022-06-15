import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Hamburger from 'hamburger-react';

import logo_green from './Asset/logo_green.svg';
import logo_white from './Asset/logo_white.svg';

import './App.css';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import ParametrePage from './Pages/ParametrePage';
import PlantePage from './Pages/PlantePage';
import ProfilPage from './Pages/ProfilPage';
import TrickAndTipsPage from './Pages/TrickAndTipsPage';
import { exit } from 'process';

function App() {
  const [isOpen, setOpen] = useState(true)

  const navActive = (event: { target: any; }) => {
    if(event.target.closest('a')) {  
      document.querySelectorAll('.navbar li').forEach((element) => {
        element.classList.remove('active');
      })
      
      var nav_element = event.target.closest('li');
      nav_element.classList.add('active');
    }
  }
  document.addEventListener('mousedown', navActive, false);

  const closeNav = (event: { target: any; }) => {
    if(event.target.closest('.hamburger-react').ariaExpanded === 'true') { 
      document.querySelectorAll('.navbar li').forEach((element) => {
        element.classList.add('hide');
      })
    } else {
      document.querySelectorAll('.navbar li').forEach((element) => {
        element.classList.remove('hide');
      })
    }
  }
  document.addEventListener('mousedown', closeNav, false);

  return (
    <div className="App">
      <BrowserRouter>      
        <nav className="navbar">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          <li><img className="img_green" src={logo_green} /><img className="img_white" src={logo_white} /><NavLink to="" className="nav-link">Accueil</NavLink></li>
          <li><img className="img_green" src={logo_green} /><img className="img_white" src={logo_white} /><NavLink to="/maplante" className="nav-link">Ma plante</NavLink></li>
          <li><img className="img_green" src={logo_green} /><img className="img_white" src={logo_white} /><NavLink to="/tricksandtips" className="nav-link">Tricks and Tips</NavLink></li>
          <li><img className="img_green" src={logo_green} /><img className="img_white" src={logo_white} /><NavLink to="/profil" className="nav-link">Mon Profil</NavLink></li>
          <li><img className="img_green" src={logo_green} /><img className="img_white" src={logo_white} /><NavLink to="/parametre" className="nav-link">Parametre</NavLink></li>	
        </nav>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/maplante" element={<PlantePage/>} />
          <Route path="/tricksandtips" element={<TrickAndTipsPage/>} />
          <Route path="/profil" element={<ProfilPage/>} />
          <Route path="/parametre" element={<ParametrePage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
