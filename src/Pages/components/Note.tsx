import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowUp } from 'react-icons/fa';
import {FaArrowDown} from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail';
import { TrickAndTipsData } from '../../interfaces';
import '../../Styles/style.css'


type PostParams = {
    id: string;
 };

const Note = () => {
  return (
    <div className='Note'>
        <button className='button-note'><FaArrowUp color='#6E8464' /></button>
        <p className='p-note'>25</p>
        <button className='button-note'><FaArrowDown color='#6E8464'/></button>
    </div>
  )

}   

export default Note