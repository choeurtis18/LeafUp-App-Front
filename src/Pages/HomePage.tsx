import React, { useState, useEffect } from "react";
import GifPlant from "../Asset/plant.gif";
import Trick from "../Asset/tricks_and_tips.jpg";
import SerrePng from "../Asset/Serre_petite_transp.png";
import Card from "../Components/Card";

export default function HomePage() {
  return (
    <div className="container mx-auto px-8">
      <Card css=" lg:h-80 md:h-80">
        <img
          src={GifPlant}
          alt="GifPlant"
          className="rounded-xl md:h-full md:object-cover md:w-full lg:h-full lg:w-full lg:object-cover "
        />
        <div className="text-white p-8 bottom-0 absolute">
          <p className="font-inter font-extrabold text-3xl mb-2">Leaf Up</p>
          <p className="font-inter font-semibold text-2xl w-52 md:w-full lg:w-full">
            Prenez soin de vos plantes
          </p>
        </div>
      </Card>
     
      <Card css="h-64 shadow-2xl  mb-12 md:w-3/4 md:mx-auto md:justify-center">
        <div className="lg:flex lg:flex-row">
          <div className="text-black p-8 bottom-0 absolute md:w-3/4 ">
            <p className="text-base font-inter font-semibold w-48 mb-2 md:w-full lg:w-full">
              Découvrez notre nouvelle serre connectée
            </p>
            <p className="text-xs mb-6 ">
              A la pointe de la technologie, cette serre vous permettra de
              prendre soin de votre plante en vous indiquant les différents
            </p>
            <div className="flex justify-between">
              <a href="#" className="underline underline-offset-4">
                En savoir plus
              </a>
              <p className="font-inter font-bold">179,99 €</p>
            </div>
          </div>
          
        </div>
      </Card>

      <div className="md:grid-rows md:grid md:grid-flow-col md:gap-4 lg:gap-20">
        <Card css=" h-72 shadow-2xl bg-primary_02 md:h-80 ">
          <div className="text-white p-8 absolute text-right ">
            <p className="text-base w-40 mb-4 font-inter font-semibold ml-24 md:w-full md:ml-0">
              Vous disposez déjà de notre serre ?
            </p>
            <p className="text-xs mb-6">
              Accédez dès maintenant à votre espace personnel afin de vous
              informer sur l’état de votre plante.
            </p>
            <div className="h-28 md:h-36">
              <img
                src={GifPlant}
                alt="ddd"
                className="h-28  object-cover w-full rounded-md md:h-36"
              />
            </div>
          </div>
        </Card>

        <Card css=" h-72 shadow-2xl bg-white mb-16 md:h-80 ">
          <div className="text-black  top-0 absolute w-full">
            <div className=" h-48 w-full relative">
              <img
                src={Trick}
                alt="fdfdffd"
                className=" h-48 w-full  object-cover rounded-md"
              />
              <div className="absolute top-12 right-12 text-right text-3xl font-bold font-poppins w-36">
                <p className="text-left text-primary_01">Tricks</p>
                <p className="text-center text-secondary">&</p>
                <p className="text-right text-primary_02">Tips</p>
              </div>
            </div>
            <div className="px-8 pt-2">
              <p className="font-poppins font-semibold ">
                Découvrez les Posts rédigés par nos utilisateurs
              </p>
              <a
                href="#"
                className="underline underline-offset-4 text-right float-right"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
