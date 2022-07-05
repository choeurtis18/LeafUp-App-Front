import React, { useState, useEffect } from 'react';
import FormSignUp from "./components/FormSignUp"
import plant from "../Asset/plant.png"
export default function SignInPage() {
  return (
    <div className="bg-[#112703] w-full">
        <div className="flex flex-col justify-center h-[100vh]">
            <img src={plant} className="mx-auto mt-3 w-[40%] md:w-[25%] lg:w-[13%]" alt="" />
            <h1 className="text-center lg:text-3xl text-xl mt-3 text-white">Connectez-vous !</h1>
            <FormSignUp />
        </div>
    </div>
  )

}   