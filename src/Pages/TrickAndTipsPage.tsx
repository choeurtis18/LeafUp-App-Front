import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TrickAndTipsData } from '../interfaces';
import '../Styles/style.css'
import ContainerCards from './components/ContainerCards';


interface TrickAndTipsPageProps {
    allPosts : TrickAndTipsData[];
}


const TrickAndTipsPage: React.FC<TrickAndTipsPageProps> = ({allPosts}) => {
  return (
    <div className='post-container'>
      <div className='circleUp'></div>
      <div className='header'>
        <h1>Tricks & Trips</h1>
        <p>Fait par la communautÃ©</p>
      </div>
      {/* <Filtres setAllPosts={setAllPosts} allPosts={post_list} /> */}
      <ContainerCards allPosts={allPosts} />

      <div className='circleDown'></div>
    </div>
  )

}

export default TrickAndTipsPage