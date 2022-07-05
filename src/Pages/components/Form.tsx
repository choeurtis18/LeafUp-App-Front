import React from 'react'

export default function Form() {
  return (
    <div className="w-full">
        <form className="flex flex-col justify-center items-center mt-4" action="">
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-3 shadow-lg" type="text" placeholder="Nom"/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-3 shadow-lg" type="text" placeholder="Prénom"/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-3 shadow-lg" type="text" placeholder="Email"/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-3 shadow-lg" type="password" placeholder="Mot de passe"/>
            <input className="w-4/5 lg:w-1/3 rounded-lg p-[6px] pl-6 mb-3 shadow-lg" type="password" placeholder="Numéro de la serre"/>
            <button className="cursor-pointer mt-6 shadow-lg bg-[#3b4a34] w-4/5 lg:w-1/3 rounded-lg p-[6px] text-xl text-white" type="submit">S'inscrire</button>
        </form>
        <p className="text-[#808080] text-center mt-2 text-sm">Déjà un Compte ?<a className="underline-offset-2" href="/connexion"> Se connecter</a></p>
    </div>
  )
}
