import React from 'react';
import Header from '../Header';
import Posts from '../Posts';
import profil from '../Asset/Ritchie.jpg';
import iconpost from '../Asset/iconpost.png'
import likepost from '../Asset/likepost.png'
import background from "../Asset/backgroundHeader.jpg";

import ContainerCards from './components/ContainerCards';
import useFetchPlantData from '../Hook/new-useGetUserPlant';
import useFetchUserData from '../Hook/new-useGetUser';
import useGetUserPosts from '../Hook/new-useGetUserPosts';
import { useNavigate } from 'react-router-dom';

export default function ProfilPage(props:any) {
  const {plante, loading_plante} = useFetchPlantData(props.user_id);
  const {user, loading_user} = useFetchUserData(props.user_id);
  const {allPosts, loading} = useGetUserPosts(props.user_id);
  const firstname = user?.firstname;
  const lastname = user?.lastname;
  const full_name = firstname+' '+lastname;
  const navigate = useNavigate();
  console.log(user);
  return (
    <div className='container'>
      <Header
       IMGprofil = {profil}
       cover = {background}
       full_name = {full_name}
       plant_name = {plante?.name}
       description = {user?.pseudo}
       email = {user?.email}
      />
      <div className="flex justify-center gap-8 mb-4">
        <div className="w-1/2 lg:w-1/4 bg-white lg:px-24 py-2 shadow-md">
          <img className="mx-auto" src={iconpost} alt={iconpost} />
        </div>
        <div className="w-1/2 lg:w-1/4 lg:px-24 py-2">
          <img className="mx-auto" src={likepost} alt={likepost} />
        </div>
      </div>
      <a href="" className="w-full flex justify-center my-8">
        <button onClick={() => navigate(`/create_post/`) } className="rounded-xl lg:w-3/12 w-2/3 p-[13px] bg-[#112703] text-white text-center">Ajouter un Post</button>
      </a>
      <ContainerCards allPosts={allPosts} />
      
    </div>
  )

}   