import React, { useState, useEffect } from 'react';
import { TrickAndTipsData } from '../interfaces';
import '../Styles/style.css'
import Cards from './components/Cards';
import ContainerCards from './components/ContainerCards';
import ContainerCardsBis from './components/ContainerCardsBis';
import Filtres from './components/Filtres';


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
        <h1>Tricks & Trips</h1>
        <p>Fait par la communauté</p>
      </div>
      <Filtres setAllPosts={setAllPosts} allPosts={allPosts} />
      {/* <ContainerCards allPosts={allPosts} /> */}
      <ContainerCardsBis 
         post_title = "Comment prendre soin de ses plantes ?"
         post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
         post_author = "J. Lawrence"
         post_niveau='Debutants'
         post_date="12/11/2010"
         post_note="23"
         post_url = "tricksandtips/11"
         />
          <ContainerCardsBis 
         post_title = "Comment prendre soin de ses plantes ?"
         post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
         post_author = "J. Lawrence"
         post_niveau='Experts'
         post_date="21/09/2021"
         post_note="12"
         post_url = "tricksandtips/11"
         />
      <div className='circleDown'></div>
    </div>
  )

}   

export default TrickAndTipsPage