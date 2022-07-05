// import React, { useState, useEffect } from 'react';
import PlanteParams from '../Components/planteParams';
import CurrentPLant from '../Asset/plante.png';
import LogoIcon from'../Asset/icon-logo.svg';
import '../Asset/css/plantepage.css';

export default function PlantePage(props:any) {

  const plante = {
    name:'André',
    type :'Gerianium',
    image: CurrentPLant,
  }
  
  return (
    <div className='container sm:px-24 sm:py-12 p-6 bg-[#F6F6F6]'>
      <h1 className='container-title text-3xl	text-primary-color-1 mb-12 hidden sm:block'>DashBoard</h1>
      <div className='container sm:grid sm:grid-cols-2 flex flex-col-reverse'>
        <div className="grid grid-cols-2 gap-x-10	gap-y-5 row-span-3">
        <h1 className='container-title text-xl text-[#112703] block sm:hidden col-span-2'>Informations sur ma plante</h1>
          <PlanteParams
          class_supp=""
          params_type='Température'
          params_value = '14° C'
          bg_color='#F6F6F6'
          txt_color='#3B4A34'
          />
          <PlanteParams
          class_supp='' 
          params_type='Humidité de l’Air'
          params_value="50%"
          bg_color="#3B4A34"
          txt_color='#FFFFFF'
          />
          <PlanteParams
          class_supp=""
          params_type = 'Humidité de la Terre'
          params_value = "50%"
          bg_color = "#112703"
          txt_color="#FFFFFF"
          />
          <PlanteParams
          class_supp=''
          params_type="Luminosité"
          params_value="100 Lux"
          bg_color='#F6F6F6'
          txt_color='#3B4A34'
           />
           <PlanteParams 
           class_supp="col-span-2"
           params_type='Dernière fois que la plante a été arrosée'
           params_value='Il y a 4 jours'
           bg_color='#6E8464'
           txt_color="#FFFFFF"
           />
        </div>

        <div className="hidden sm:grid grid-rows-3 row-span-3 gap-y-5 justify-center mb-[10px]">

          <img 
          className='row-span-2 w-[70%] justify-self-center plante-image' 
          src={plante.image} 
          alt={plante.image} 
          />

          <div className="bg-white rounded-2xl w-100 p-6 sm:flex flex-row justify-between items-center drop-shadow-lg">
            <div className='flex flex-col gap-4'>
              <h3 className='text-base plant-name'>{plante.name}</h3>
              <p className='plant-type text-xs'>{plante.type}</p>
            </div>
            <img src={LogoIcon} alt={LogoIcon} />
          </div>
        </div>

        <div className="sm:hidden grid grid-cols-2 gap-y-5">
          <div className="grid grid-rows-2 gap-y-5 mb-[270px]">
            <h1 className='text-3xl plant-name'>{plante.name}</h1>
            <span className='relative mt-5'>
            <h2 className='absolute top-0 left-0 text-xl plant-type text-[#6E8464] uppercase !tracking-[0.4em] rotate-plant'>{plante.type}</h2>
            </span>
          </div>
          <div className='flex justify-center items-center bg-rounded-green'>
            <img className='max-w-[150%] h-100' src={plante.image} alt={plante.image} />
          </div>
        </div>
      </div>
    </div>
  )

}   