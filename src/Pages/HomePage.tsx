import React, { useState, useEffect } from 'react';
import GifPlant from '../Asset/plant.gif'
import Card from '../Components/Card';

export default function HomePage() {
  return (
    <div className='container mx-auto px-4'>
         <Card> 
          <img src={GifPlant} alt="GifPlant" className='rounded-xl'/>
            <div className='text-white p-8 bottom-0 absolute'>
              <p>Leaf Up</p>
              <p>Prenez soin de vos plantes</p>
            </div>
         </Card>

         <Card height='h-64' shadow='shadow-2xl'> 
            <div className='text-black p-8 bottom-0 absolute'>
              <p className='text-base'>Découvrez notre nouvelle serre connectée</p>
              <p className='text-xs mb-6'>A la pointe de la technologie, cette serre vous permettra de prendre soin de votre plante en vous indiquant les différents  </p>
              <div className='flex justify-between'>
                <a href="#">En savoir plus</a>
                <p>179,99 €</p>
              </div>
            </div>
         </Card>
    </div>
  )

}   