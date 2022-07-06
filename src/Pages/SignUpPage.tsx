import React, { useState, useEffect } from 'react';
import Form from "./components/Form"
import plant from "../Asset/plant.png"

export default function SignUpPage() {
  return (
    <div className="bg-[#112703] w-full h-full">
        <img src={plant} className="mx-auto mt-8 w-[50%] md:w-[25%] lg:w-[13%]" alt="" />
        <h1 className="md:text-center md:text-3xl text-[17px] my-3 lg:text-white text-[#6e8464] ml-10 font-semibold">Inscrivez-vous !</h1>
        <Form />
    </div>
  )

}