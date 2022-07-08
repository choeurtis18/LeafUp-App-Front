import React, { useState, useEffect } from 'react';
import '../Styles/style.css'
import ContainerCards from './components/ContainerCards';

import useFetchData from '../Hook/new-useGetAllPosts';


export default function TrickAndTipsPage() {
  const {allPosts, loading} = useFetchData();

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className='post-container'>
          <div className='header'>
            <h1>Tricks & Trips</h1>
            <p>Fait par la communautÃ©</p>
          </div>
          {/* <Filtres setAllPosts={setAllPosts} allPosts={post_list} /> */}
          <ContainerCards allPosts={allPosts} />

          <div className='circleDown'></div>
        </div>
      )}
    </div>
  )
}