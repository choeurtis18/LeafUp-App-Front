import React, { useState, useEffect } from 'react';
import Form from "./components/Form"
import plant from "../Asset/plant.png"

import { User } from '../interfaces/User';
import usePostDataUser from '../Hook/new-useSetRegister';
import { LoggedUser } from '../interfaces/logUser';


interface LoginFormPropsInterface {
  setIsLoggedIn: React.Dispatch<LoggedUser>
}


export default function SignUpPage({setIsLoggedIn}:LoginFormPropsInterface) {
  
  const [localUser, setLocalUser] = useState<User>({id: 999, lastname:"", firstname:"", email:"", password:"", Token:"", created_at:1, pseudo:""});
  const postUser = usePostDataUser();

  const handleChange = (e: any) => {
      setLocalUser((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
      }))
  }

  const handleSubmit = (e: any) => {
      e.preventDefault();
      if (localUser != null) {
          postUser('ertyui', localUser)
              .then((data: any) => {
                  console.log(data);
              })
      }
  }

  return (
    <div className="bg-[#112703] w-full h-full">
        <img src={plant} className="mx-auto mt-8 w-[50%] md:w-[25%] lg:w-[13%]" alt="" />
        <h1 className="md:text-center md:text-3xl text-[17px] my-3 lg:text-white text-[#6e8464] ml-10 font-semibold">Inscrivez-vous !</h1>
        <div className="w-full">
        <form className="flex flex-col justify-center items-center mt-4" action="" onSubmit={handleSubmit}>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[8px] pl-6 mb-6 shadow-lg" type="text" placeholder="Nom" onChange={handleChange}/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[8px] pl-6 mb-6 shadow-lg" type="text" placeholder="Prénom" onChange={handleChange}/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[8px] pl-6 mb-6 shadow-lg" type="text" placeholder="Email" onChange={handleChange}/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[8px] pl-6 mb-6 shadow-lg" type="password" placeholder="Mot de passe" onChange={handleChange}/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[8px] pl-6 mb-6 shadow-lg" type="password" placeholder="Numéro de la serre" onChange={handleChange}/>
            <button className="cursor-pointer mt-6 shadow-lg bg-[#3b4a34] w-4/5 lg:w-1/3 rounded-xl p-[10px] text-xl text-white" type="submit">S'inscrire</button>
        </form>
        <p className="text-[#808080] text-center mt-2 text-sm mb-3">Déjà un Compte ?<a className="underline-offset-2" href="/connexion"> Se connecter</a></p>
    </div>
    </div>
  )

}