import React from 'react'

export default function FormSignIn() {
  return (
    <div className="w-full">
        <form className="flex flex-col justify-center items-center mt-4" action="">
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-6 shadow-lg" type="text" placeholder="Nom d'utilisateur"/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-6 shadow-lg" type="password" placeholder="Mot de passe"/>
            <button className="cursor-pointer mt-6 shadow-lg bg-[#3b4a34] w-4/5 lg:w-1/3 rounded-xl p-[10px] text-xl text-white" type="submit">Se Connecter</button>
        </form>
        <p className="text-[#808080] text-center mt-3 text-sm">Pas de compte ?<a className="underline-offset-2" href="/inscription"> S'inscrire</a></p>
    </div>
  )
}
