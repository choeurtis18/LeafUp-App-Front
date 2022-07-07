import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import { TrickAndTipsData } from '../interfaces/TrickAndTips';
import {Comments} from '../interfaces/Comments'
import '../Styles/style.css'



type PostParams = {
    id: string;
 };

    const Post = () => {


    const {id} = useParams<PostParams>();
    const [onePost, setOnePost]= useState<TrickAndTipsData | null>(null)
    const [comments, setAllComments]= useState< Comments | null>(null)

    useEffect(() => {
        const getPost = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data: TrickAndTipsData = await response.json()
            setOnePost(data);
        }
        getPost();
    }, [id]);
  return (
    <div className=''>
      <PostDetail onePost={onePost} comments={comments} />
    </div>
  )

}   

export default Post