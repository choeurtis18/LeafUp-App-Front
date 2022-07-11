import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import '../Styles/style.css'



type PostParams = {
    id: string;
 };

const Post = () => {
  const {id} = useParams<PostParams>();
    
  return (
    <div className=''>
      <PostDetail id={id} />
    </div>
  )
}   

export default Post