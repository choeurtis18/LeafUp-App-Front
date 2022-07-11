import React, { useState } from 'react'

import { User } from '../../interfaces/User';
import usePostDataUser from '../../Hook/new-useSetRegister';
export default function Form() {

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
  )
}
