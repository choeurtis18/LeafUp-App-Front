import React, { useState, useEffect } from 'react';
import { TrickAndTipsData } from '../interfaces';
import '../Styles/style.css'
<<<<<<< Updated upstream
import Cards from '../components/Cards';
import ContainerCards from '../components/ContainerCards';
import Filtres from '../components/Filtres';

=======
import Cards from './components/Cards';
import ContainerCards from './components/ContainerCards';
import ContainerCardsBis from './components/ContainerCardsBis';
import Filtres from './components/Filtres';
import Posts from '../Posts';
>>>>>>> Stashed changes

const TrickAndTipsPage: React.FC = () => {
    const [allPosts,setAllPosts] = useState<TrickAndTipsData[] | null >(null);

    useEffect(() => {
        const getPosts = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
            const data: TrickAndTipsData[] = await response.json()
            setAllPosts(data);
        }
        getPosts();
    }, []);
  return (
    <div className='post-container'>
      <div className='circleUp'></div>
      <div className='header'>
        <h1>Tricks & Tips</h1>
        <p>Fait par la communauté</p>
      </div>
      <Filtres />
      <ContainerCardsBis  
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "J. Lawrence"
          post_url = "tricksandtips/11"
          post_niveau="Debutants"
          post_date="23/12/2021"
          post_note="12"
          />
      <ContainerCardsBis  
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "J. Lawrence"
          post_niveau="Experts"
          post_url = "tricksandtips/11"
          post_date="18/06/2018"
          post_note="23"
          />
      <ContainerCardsBis  
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "CJ ab"
          post_url = "tricksandtips/11"
          post_niveau="Intermédiaires"
          post_date="23/12/2021"
          post_note="15"
          />      <ContainerCardsBis  
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "J. Lawrence"
          post_url = "tricksandtips/11"
          post_niveau="Experts"
          post_date="23/05/2019"
          post_note="16"
          />      <ContainerCardsBis  
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "J. Lawrence"
          post_url = "tricksandtips/11"
          post_niveau="Experts"
          post_date="23/12/2021"
          post_note="16"
          />      <ContainerCardsBis  
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "Izou IBON"
          post_url = "tricksandtips/11"
          post_niveau="Debutants"
          post_date="03/02/2021"
          post_note="22"
          />      <ContainerCardsBis  
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "LA folie"
          post_url = "tricksandtips/9"
          post_niveau="Intermédiaires"
          post_date="23/12/2021"
          post_note="20"
          />      <ContainerCardsBis  
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "SKURTIS"
          post_url = "tricksandtips/11"
          post_niveau="Debutants"
          post_date="06/09/2020"
          post_note="23"
          />


      <div className='circleDown'></div>
    </div>
  )

}   

export default TrickAndTipsPage