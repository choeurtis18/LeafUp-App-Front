import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import logo_green from './Asset/logo_green.svg';
import logo_white from './Asset/logo_white.svg';

import useGetPostList from './Hook/useGetPostList';
import useGetPlant from './Hook/useGetPlant';
import useGetUser_plants from './Hook/useGetUser_plants';
import useGetUserList from './Hook/useGetUserList';
import useGetSpecies from './Hook/useGetSpecies';
import useGetUserPlant from './Hook/useGetUserPlant';
import useGetUser from './Hook/useGetUser';
import useGetUserPostList from './Hook/useGetUserPostList';
import useLogin from './Hook/useLogin';
import useRegister from './Hook/useRegister';

import { TrickAndTipsData } from './interfaces';
import { User } from './interfaces/User';
import { User_plants } from './interfaces/User_plants';
import { Plante } from './interfaces/Plante';
import { Species } from './interfaces/Species';

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
  
  const user_id = 1;
  const [allPosts,setAllPosts] = useState<TrickAndTipsData[]>([]);
  const [allUsers,setAllUsers] = useState<User[]>([]);
  const [allUser_plants,setAllUser_plants] = useState<User_plants[]>([]);
  const [allPlante,setAllPlante] = useState<Plante[]>([]);
  const [allSpecies,setAllSpecies] = useState<Species[]>([]);
  const [user,setUser] = useState<User>();
  const [plante,setPlante] = useState<Plante>();
  const [specie,setSpecie] = useState<Species>();
  const [user_posts,setUser_posts] = useState<TrickAndTipsData[]>();
  
  const getPostList = useGetPostList();
  const getPlantList = useGetPlant();
  const getUser_plants = useGetUser_plants();
  const getUserList = useGetUserList();
  const getSpecies = useGetSpecies();
  const getUserPlan = useGetUserPlant(user_id);
  const getUser = useGetUser(user_id);
  const getUserPostList= useGetUserPostList(user_id);
  
  useEffect(() => {
    getPostList().then(data => {
      setAllPosts(data)
    })

    getPlantList().then(data => {
      setAllPlante(data)
    })

    getUser_plants().then(data => {
      setAllUser_plants(data)
    })

    getUserList().then(data => {
      setAllUsers(data)
    })

    getSpecies().then(data => {
      setAllSpecies(data);  
    })

    getUserPlan().then(data => {
      setPlante(data);
      allSpecies.forEach((element: Species) => {
        if(element.id == plante?.species_id) {
          setSpecie(element);
        }
      });
    })

    getUser().then(data => {
      setUser(data)
    })

    getUserPostList().then(data => {
      setUser_posts(data)
    })
    
  }, [])
  
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
          <Route path="/maplante" element={<PlantePage specie={specie} plante={plante} />} />
          <Route path="/tricksandtips" element={<TrickAndTipsPage allPosts={allPosts}/>} />
          <Route path='/tricksandtips/:id' element={<Post/>}></Route>
          <Route path="/profil" element={<ProfilPage/>} />
          <Route path="/parametre" element={<ParametrePage/>} />
          <Route path="/inscription" element={<SignUpPage/>} />
          <Route path="/connexion" element={<SignInPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//test