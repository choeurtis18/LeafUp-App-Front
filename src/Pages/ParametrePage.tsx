import React, { useState, useEffect } from 'react';

export default function ParametrePage() {
  return (

    <div className="container">
        <ul className='w-11/12 mx-auto lg:w-2/3'>
          <h1 className='text-[#3B4A34] text-3xl font-bold mb-[29px]'>Paramètres</h1>
          <div className='mb-[41px] text-[#3b4a34]'>
            <div className='font-medium text-[#3B4A34] bg-white w-100 p-3 rounded-t-lg shadow-sm text-lg'>Mes informations</div>
            <div className='flex justify-between text-[#808080] my-[12px]'>
              <li>Nom d'utilisateur</li>
              <li>Random.l</li>
            </div>
            <div className='flex justify-between mb-[12px]'>
              <li>Mot de passe</li>
              <li>**********</li>
            </div>
            <div className='flex justify-between mb-[12px]'>
              <li>Email</li>
              <li>prenom@mail.com</li>
            </div>
            <div className='flex justify-between mb-[12px]'>
              <li>Description du Profil</li>
              <li>United States</li>
            </div>
          </div>
          <div className='mb-[41px] text-[#3b4a34]'>
            <div className='font-medium bg-white w-100 p-3 rounded-t-lg shadow-sm text-lg'>Informations sur Ma Plante</div>
            <div className='flex justify-between my-[12px]'>
              <li>Nom de ma plante</li>
              <li>Ma Plante</li>
            </div>
            <div className='flex justify-between mb-[12px]'>
              <li>Type de plante</li>
              <li>Gerianium</li>
            </div>
            <div className='flex justify-between mb-[12px]'>
              <li>Notifications d'arrosage</li>
              <label className='bg-white relative cursor-pointer w-14 h-5 rounded-full shadow-inner shadow-[#808080]'>
                <input type="checkbox" id="check" className='sr-only peer' />
                <span className=' w-6 h-5  bg-[#3B4A34] absolute rounded-full left-0 peer-checked:bg-[#6E8464] peer-checked:left-9 transition-all duration-500'></span>
              </label>
            </div>
          </div>
        </ul>

    </div>
  )

}   