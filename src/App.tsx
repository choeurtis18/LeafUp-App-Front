import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import logo_green from './Asset/logo_green.svg';
import logo_white from './Asset/logo_white.svg';

import './App.css';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import ParametrePage from './Pages/ParametrePage';
import PlantePage from './Pages/PlantePage';
import ProfilPage from './Pages/ProfilPage';
import TrickAndTipsPage from './Pages/TrickAndTipsPage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import Post from './Pages/Post';
import CreatePostPage from './Pages/CreatePostPage';

function App() {
  const navActive = (event: { target: any; }) => {
    if(event.target.closest('a') && window.matchMedia("(min-width: 481px)")) {  
      document.querySelectorAll('.desktop-navbar li').forEach((element) => {
        element.classList.remove('active');
      })
      
      var nav_element = event.target.closest('li');
      if(nav_element) {  
        nav_element.classList.add('active');
        var nav_bar = event.target.closest('.desktop-navbar');
        setTimeout(function() {
          nav_bar.classList.remove('mobile');
        }, 300);
      }
    }
  }
  document.addEventListener('mousedown', navActive, false);

  //Temp var
  let user_id = 1;
  return (
    <div className="App">
      <BrowserRouter>      
        <nav className="desktop-navbar">
          <div>
          <a className="desktop-navbar-closebtn">&times;</a>
          <li>
            <img className="img_logo_green" src={logo_green} />
            <img className="img_logo_white" src={logo_white} />
            <NavLink to="" className="desktop-nav-link">Accueil</NavLink>
          </li>
          <li>
            <img className="img_logo_green" src={logo_green} />
            <img className="img_logo_white" src={logo_white} />
            <NavLink to="/maplante" className="desktop-nav-link">Ma Plante</NavLink>
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
            <NavLink to="/parametre" className="desktop-nav-link">Paramètres</NavLink>
          </li>	
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/maplante" element={<PlantePage user_id={user_id} />} />
          <Route path="/tricksandtips" element={<TrickAndTipsPage />} />
          <Route path='/tricksandtips/:id' element={<Post/>}></Route>
          <Route path="/profil" element={<ProfilPage user_id={user_id}/>} />
          <Route path="/parametre" element={<ParametrePage user_id={user_id}/>} />
          <Route path="/inscription" element={<SignUpPage/>} />
          <Route path="/connexion" element={<SignInPage/>} />
          <Route path="/create_post" element={<CreatePostPage user_id={user_id}/>} />
          <Route path="/tricksandtips/undefined" element={<NotFound/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//test