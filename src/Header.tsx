import React from 'react'



export default function Header(props: any) {
  return (
    <>
        <div>
            <div className="bg-red-100 w-full h-[172px]" style={{ backgroundImage: `url(${props.cover})`,  backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <img className="h-[145px] w-[145px] mx-auto relative top-20 rounded-full shadow-md" src={props.IMGprofil} alt="" />
            </div>
            <div className="mt-16 text-center">
                <h1 className="font-semibold text-2xl text-[#112703]">{props.full_name}</h1>
                <h2 className="uppercase text-[#6e8464] tracking-widest font-normal text-xl">{props.plant_name}</h2>
            </div>
            <div className="ml-4 lg:ml-10 text-[#808080] mt-8">
                <p>i {props.description}</p>
                <p>i {props.email}</p>
            </div>
            <div className="w-full lg:w-[95%] h-[2px] mx-auto bg-[#6E8464] mt-4"></div>
        </div>
    </>
  )
}
