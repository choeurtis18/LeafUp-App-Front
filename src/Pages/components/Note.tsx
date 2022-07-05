import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowUp } from 'react-icons/fa';
import {FaArrowDown} from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail';
import { TrickAndTipsData } from '../../interfaces';
import '../../Styles/style.css'


export function Note({note}:any){

  return (
    <div className='Note'>
        <button className='button-note'><FaArrowUp color='#6E8464' /></button>
        <p className='p-note'>{note}</p>
        <button className='button-note'><FaArrowDown color='#6E8464'/></button>
    </div>
  )

}   

export default Note