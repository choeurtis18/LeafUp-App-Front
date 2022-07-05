import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Posts from '../Posts';
import profil from '../Asset/jennifer.jpeg';
import iconpost from '../Asset/iconpost.png'
import likepost from '../Asset/likepost.png'
import background from "../Asset/backgroundHeader.jpg";

export default function ProfilPage() {
  
  return (
    <div className='container'>
      <Header
       IMGprofil = {profil}
       cover = {background}
       full_name = "Jennifer Lawrence"
       plant_name = "FITTONIA"
       description = "United States"
      />
      <div className="flex justify-center gap-8 mb-4">
        <div className="w-1/2 lg:w-1/4 bg-white lg:px-24 py-2 shadow-md">
          <img className="mx-auto" src={iconpost} alt={iconpost} />
        </div>
        <div className="w-1/2 lg:w-1/4 lg:px-24 py-2">
          <img className="mx-auto" src={likepost} alt={likepost} />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <Posts 
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "J. Lawrence"
          post_url = "tricksandtips/11"
        />
                <Posts 
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "J. Lawrence"
          post_url = "tricksandtips/11"
        />
        
        <Posts 
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "J. Lawrence"
          post_url = "tricksandtips/11"
        />
        
        <Posts 
          post_title = "Comment prendre soin de ses plantes ?"
          post_content = "Dans ce Post vous trouverez tous les conseils nécessaires pour vous aider à garder vos plantes en vie. "
          post_author = "J. Lawrence"
          post_url = "tricksandtips/11"
        />
        
        
      </div>
      
    </div>
  )

}   