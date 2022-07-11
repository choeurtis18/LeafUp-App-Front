import React from 'react'

import useFetchParameterData from '../Hook/new-useGetPlantParameters';

export default function PlanteParams(props:any) {
  const {species, loading_species} = useFetchParameterData(props.plante.id);
  let value;
  
  if(props.params_type == "Humidité de la Terre") {
    value = species?.req_amb_temp+' %';
  } else if (props.params_type == "Température") {
    value = species?.req_amb_temp+' °C';
  } else if (props.params_type == "Humidité de l’Air") {
    value = species?.req_humidity_air+' %';
  } else if (props.params_type == "Luminosité") {
    value = species?.req_light+' Lux';
  } else if (props.params_type == "Dernière fois que la plante a été arrosée") {
    value = "Il y a "+props.plante.last_watering+" jours";
  } 
  return (
    <div className={`parametre-component bg-[${props.bg_color}] rounded-lg drop-shadow-lg p-5 flex flex-col justify-between ${props.class_supp}`}>
        <h2 className={`parametre-type text-[${props.txt_color}] text-lg mb-4`}>{ props.params_type }</h2>
        <h1 className={`parametre-value text-3xl text-[${props.txt_color}]`}>{ value }</h1>
    </div>
  )
}