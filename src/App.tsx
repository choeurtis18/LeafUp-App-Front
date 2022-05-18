import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import ParametrePage from './Pages/ParametrePage';
import PlantePage from './Pages/PlantePage';
import ProfilPage from './Pages/ProfilPage';
import TrickAndTipsPage from './Pages/TrickAndTipsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul className='navbar'>
          <li><NavLink to="" className="nav-link">Accueil</NavLink></li>
          <li><NavLink to="/maplante" className="nav-link">Ma plante</NavLink></li>
          <li><NavLink to="/tricksandtips" className="nav-link">Tricks and Tips</NavLink></li>
          <li><NavLink to="/profil" className="nav-link">Mon Profil</NavLink></li>
          <li><NavLink to="/parametre" className="nav-link">Parametre</NavLink></li>
        </ul>
        
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
