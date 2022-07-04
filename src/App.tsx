import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import logo_green from './Asset/logo_green.svg';
import logo_white from './Asset/logo_white.svg';

import './App.css';
import "@fontsource/inter"; 
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import ParametrePage from './Pages/ParametrePage';
import PlantePage from './Pages/PlantePage';
import ProfilPage from './Pages/ProfilPage';
import TrickAndTipsPage from './Pages/TrickAndTipsPage';
import Post from './Pages/Post'


function App() {
  const navActive = (event: { target: any; }) => {
    if(event.target.closest('a') && window.matchMedia("(min-width: 481px)")) {  
      document.querySelectorAll('.desktop-navbar li').forEach((element) => {
        element.classList.remove('active');
      })
      
      var nav_element = event.target.closest('li');
      if(nav_element) {  
        nav_element.classList.add('active');
      }
    }
  }
  document.addEventListener('mousedown', navActive, false);

  return (
    <div className="App">
      <BrowserRouter>      
        <nav className="desktop-navbar">
          <a className="desktop-navbar-closebtn">&times;</a>
          <li>
            <img className="img_logo_green" src={logo_green} />
            <img className="img_logo_white" src={logo_white} />
            <NavLink to="" className="desktop-nav-link">Accueil</NavLink>
          </li>
          <li>
            <img className="img_logo_green" src={logo_green} />
            <img className="img_logo_white" src={logo_white} />
            <NavLink to="/maplante" className="desktop-nav-link">Ma plante</NavLink>
          </li>
          <li>
            <img className="img_logo_green" src={logo_green} />
            <img className="img_logo_white" src={logo_white} />
            <NavLink to="/tricksandtips" className="desktop-nav-link">Tricks and Tips</NavLink>
          </li>
          <li>
            <img className="img_logo_green" src={logo_green} />
            <img className="img_logo_white" src={logo_white} />
            <NavLink to="/profil" className="desktop-nav-link">Mon Profil</NavLink>
          </li>
          <li>
            <img className="img_logo_green" src={logo_green} />
            <img className="img_logo_white" src={logo_white} />
            <NavLink to="/parametre" className="desktop-nav-link">Parametre</NavLink>
          </li>	
        </nav>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/maplante" element={<PlantePage/>} />
          <Route path="/tricksandtips" element={<TrickAndTipsPage/>} />
          <Route path='/tricksandtips/:id' element={<Post/>}></Route>
          <Route path="/profil" element={<ProfilPage/>} />
          <Route path="/parametre" element={<ParametrePage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
