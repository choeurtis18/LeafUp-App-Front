import React, { useState, useEffect } from 'react';
import FormSignIn from "./components/FormSignIn"
import plant from "../Asset/plant.png"

export default function SignInPage() {
  return (
    <div className="bg-[#112703] w-full h-[90vh]">
        <div className="flex flex-col justify-center">
            <img src={plant} className="mx-auto mt-8 w-[50%] md:w-[35%] lg:w-[13%]" alt="" />
            <h1 className="md:text-center md:text-3xl text-[17px] my-3 lg:text-white text-[#6e8464] ml-10 font-semibold">Connectez-vous !</h1>
            <FormSignIn />
        </div>
    </div>
  )

}   