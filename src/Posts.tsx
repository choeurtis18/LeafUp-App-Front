import React from 'react'

export default function Posts(props : any) {
 
  return (
    <div className=" bg-white w-4/5 rounded-md mt-5 relative p-5 mx-auto">
        <h2 className="font-semibold text-md"></h2>
        <p className="font-medium text-[#3b4a34]">{props.post_content}</p>
        <p className="text-right font-bold mb-3">{props.post_author}</p>
        <a  href={props.post_url}>
            <button className="py-2 px-6 bg-[#6e8464] text-white rounded-3xl cursor-pointer">
                Lire le Post
            </button>
        </a>
    </div>
  )
}
