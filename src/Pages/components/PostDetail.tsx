import React, { useState } from "react";
import { FaHeart } from 'react-icons/fa';
import '../../Styles/style.css'
import GifPlant from '../../Asset/plant.gif'
import Card from '../../Components/Card';

import { Comments } from '../../interfaces/Comments';

import useFetchDataPost from '../../Hook/new-useGetPost';
import useFetchDataComment from '../../Hook/new-useGetPostComments';
import usePostDataComment from '../../Hook/new-useSetComments';

export default function PostDetail(id:any) {
    const {post, loading_post} = useFetchDataPost(id.id);
    const {allComments, loading_comment} = useFetchDataComment(id.id);
    let newDate = new Date();
    

    
    const [localComment, setLocalComment] = useState<Comments>({id: 999, content:"", date:newDate.toString(), post_id:id.id.toString(), user_id:'1'});
    const postComment = usePostDataComment();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(post) {
            setLocalComment((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }))
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        //if (loggedUser.token != null) {
        if (localComment != null) {
            postComment('ertyui', localComment)
                .then((data: any) => {
                    console.log(data);
                })
        }
        //}
    }

    return(
        <div className="post">
           <div className='header'>
                <h1>{post?.title}</h1>
                <p>{post?.created_at}</p>
                <button className='button-fav'><FaHeart  />{post?.nb_likes}</button>
            </div>
            <div className='image'>
                <div className='container mx-auto px-4'>

                <Card css=' lg:h-80 '> 
                    <img src={GifPlant} alt="GifPlant" className='rounded-xl lg:h-full lg:w-full lg:object-cover'/>
                </Card>
                </div>  
            </div>
           <div className='bodyPost'>
                <p style={{padding: "30px"}}>{post?.content}</p>
            </div> 
            {allComments?.map((comment) => (
                <div key={comment.id}>
                    <span>{comment.user_id}</span>
                    <span>{comment.date}</span>
                    <p>{comment.content}</p>
                </div>
            ))}
            
            <form className='sectionCommentaires px-6  pb-2' onSubmit={handleSubmit}>
                <h3 >Commentaires</h3>
                <hr/>
                <p>Laissez un commentaire</p>
                <textarea 
                    name='content'
                    placeholder="Ecrivez quelque chose..."
                    onChange={handleChange}
                />
                <button className="bg-blue-500 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded-full button" >Confirmer</button>
            </form>
        </div>
    )
}