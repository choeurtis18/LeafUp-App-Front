import React, { useState, useEffect } from 'react';
import Form from "./components/Form"
import plant from "../Asset/plant.png"
export default function SignUpPage() {
  
  return (
    <div className="bg-[#112703] w-full h-full">
        <img src={plant} className="mx-auto mt-3 w-[40%] md:w-[25%] lg:w-[13%]" alt="" />
        <h1 className="text-center lg:text-3xl text-xl mt-3 text-white">Inscrivez-vous !</h1>
        <Form />
    </div>
  )

}   