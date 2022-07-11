import React, { useState } from 'react'

import useFetchUserData from '../Hook/new-useGetUser';
import { TrickAndTipsData } from '../interfaces';
import usePostDataPost from '../Hook/new-useSetPost';

export default function CreatePostPage(props:any) {
  const {user, loading_user} = useFetchUserData(props.user_id);
  const [localPost, setLocalPost] = useState<TrickAndTipsData>({id: 999, title:"", content:"", created_at:1, user:props.user_id, nb_likes:1, img:""});
  const postPost= usePostDataPost();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(user) {
      setLocalPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //if (loggedUser.token != null) {
    if (localPost != null) {
      postPost('ertyui', localPost)
            .then((data: any) => {
                console.log(data);
            })
    }
    //}
  }

  return (
    <div className="w-full">
      <h1 style={{textAlign: "center", padding: "20px 0", fontSize: "24px"}}>New Post</h1>
      <form className="flex flex-col justify-center items-center mt-4" onSubmit={handleSubmit}>
          <input className="w-4/5 lg:w-1/3 rounded-lg p-[8px] pl-6 mb-6 shadow-lg" type="text" placeholder="title" name='title' onChange={handleChange}/>
          <input className="w-4/5 lg:w-1/3 rounded-lg p-[8px] pl-6 mb-6 shadow-lg" type="text" placeholder="content" name='content' onChange={handleChange}/>
          <button className="cursor-pointer mt-6 shadow-lg bg-[#3b4a34] w-4/5 lg:w-1/3 rounded-xl p-[10px] text-xl text-white" type="submit">Ajouter</button>
      </form>
    </div>
  )
}
