import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TrickAndTipsData } from '../interfaces';
import '../Styles/style.css'
import Cards from './components/Cards';
import ContainerCards from './components/ContainerCards';
import ContainerCardsBis from './components/ContainerCardsBis';
import Filtres from './components/Filtres';


interface TrickAndTipsPageProps {
  allPosts : TrickAndTipsData[];
}


const TrickAndTipsPage: React.FC<TrickAndTipsPageProps> = ({allPosts}) => {

    console.log(allPosts);
  return (
    <div className='post-container'>
      <div className='circleUp'></div>
      <div className='header'>
        <h1>Tricks & Trips</h1>
        <p>Fait par la communauté</p>
      </div>
      {/*<Filtres setAllPosts={setAllPosts} allPosts={post_list} />
      <ContainerCards allPosts={post_list} />*/}

      <div className='circleDown'></div>
    </div>
  )

}   

export default TrickAndTipsPage