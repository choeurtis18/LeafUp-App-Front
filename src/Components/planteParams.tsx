import React from 'react'

import useFetchParameterData from '../Hook/new-useGetPlantParameters';

export default function PlanteParams(props:any) {

  return (
    <div className={`parametre-component bg-[${props.bg_color}] rounded-lg drop-shadow-lg p-5 flex flex-col justify-between ${props.class_supp}`}>
        <h2 className={`parametre-type text-[${props.txt_color}] text-lg mb-4`}>{ props.params_type }</h2>
        <h1 className={`parametre-value text-3xl text-[${props.txt_color}]`}>{ props.params_value }</h1>
    </div>
  )
}