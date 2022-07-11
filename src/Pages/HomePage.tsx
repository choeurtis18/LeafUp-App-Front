import React, { useState, useEffect } from 'react';
import GifPlant from '../Asset/plant.gif'
import Trick from '../Asset/tricks_and_tips.jpg'
import Card from '../Components/Card';

export default function HomePage() {
  return (
    <div className='container mx-auto px-4'>
         <Card css=' lg:h-80 '> 
          <img src={GifPlant} alt="GifPlant" className='rounded-xl lg:h-full lg:w-full lg:object-cover'/>
            <div className='text-white p-8 bottom-0 absolute'>
              <p>Leaf Up</p>
              <p>Prenez soin de vos plantes</p>
            </div>
         </Card>

         <Card css='h-64 shadow-2xl'> 
            <div className='text-black p-8 bottom-0 absolute'>
              <p className='text-base'>Découvrez notre nouvelle serre connectée</p>
              <p className='text-xs mb-6'>A la pointe de la technologie, cette serre vous permettra de prendre soin de votre plante en vous indiquant les différents  </p>
              <div className='flex justify-between'>
                <a href="#" className='underline underline-offset-4'>En savoir plus</a>
                <p>179,99 €</p>
              </div>
            </div>
         </Card>

         <Card css=' h-72 shadow-2xl bg-[#112703] '> 
            <div className='text-white p-8 top-0 absolute text-right'>
              <p className='text-base mb-6'>Vous disposez déjà de notre serre ? </p>
              <p className='text-xs mb-6'>Accédez dès maintenant à votre espace personnel afin de vous informer sur l’état de votre plante.</p>
              <div className='h-28'>
                <img src={GifPlant} alt="ddd" className='h-28 object-cover w-full rounded-md '/>
              </div>
            </div>
         </Card>
         <Card css=' h-72 shadow-2xl bg-white '> 
            <div className='text-black  top-0 absolute w-full'>
              <div className=' h-48 w-full relative'>
                <img src={Trick} alt="fdfdffd"  className=' h-48 w-full  object-cover'/>
              <div className='absolute top-12 right-12 text-right text-3xl font-bold font-poppins w-36' >
                  <p className='text-left text-primary_01'>Tricks</p>
                  <p className='text-center text-secondary'>&</p>
                  <p className='text-right text-primary_02'>Tips</p>
                </div>
              </div>
                
            </div>
         </Card>
         
    </div>
  )

}   