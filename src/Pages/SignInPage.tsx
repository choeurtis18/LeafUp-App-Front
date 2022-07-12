import React, { useState, useEffect } from 'react';
import FormSignIn from "./components/FormSignIn"
import plant from "../Asset/plant.png"


import { User } from '../interfaces/User';
import usePostDataUser from '../Hook/new-useSetLogin';
import { LoggedUser } from '../interfaces/logUser';


interface LoginFormPropsInterface {
  setIsLoggedIn: React.Dispatch<LoggedUser>
}

export default function SignInPage(setIsLoggedIn:any) {
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
    <div className="bg-[#112703] w-full h-[90vh]">
        <div className="flex flex-col justify-center">
            <img src={plant} className="mx-auto mt-8 w-[50%] md:w-[35%] lg:w-[13%]" alt="" />
            <h1 className="md:text-center md:text-3xl text-[17px] my-3 lg:text-white text-[#6e8464] ml-10 font-semibold">Connectez-vous !</h1>
            <div className="w-full">
              <form className="flex flex-col justify-center items-center mt-4" onSubmit={handleSubmit}>
                  <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-6 shadow-lg" type="text" placeholder="Nom d'utilisateur" name='lastName' onChange={handleChange}/>
                  <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-6 shadow-lg" type="password" placeholder="Mot de passe" name='password' onChange={handleChange}/>
                  <button className="cursor-pointer mt-6 shadow-lg bg-[#3b4a34] w-4/5 lg:w-1/3 rounded-xl p-[10px] text-xl text-white" type="submit">Se Connecter</button>
              </form>
              <p className="text-[#808080] text-center mt-3 text-sm">Pas de compte ?<a className="underline-offset-2" href="/inscription"> S'inscrire</a></p>
            </div>

        </div>
    </div>
  )

}   