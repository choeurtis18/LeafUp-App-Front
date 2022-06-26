import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='container'>
        <NavLink to="/">
            <span>Retourner à l'ccueil</span>
        </NavLink>
    </div>
  )

}   