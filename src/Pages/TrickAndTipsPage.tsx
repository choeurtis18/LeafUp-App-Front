import React, { useState, useEffect } from 'react';
import { TrickAndTipsData } from '../interfaces';
import '../Styles/style.css'
import Cards from '../components/Cards';
import ContainerCards from '../components/ContainerCards';
import Filtres from '../components/Filtres';


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
      <Filtres />
      <ContainerCards allPosts={allPosts} />
      <div className='circleDown'></div>
    </div>
  )

}   

export default TrickAndTipsPage