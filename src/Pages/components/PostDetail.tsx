import React, { useState, useEffect, useRef } from "react";
import { FaHeart } from 'react-icons/fa';
import '../../Styles/style.css'
import GifPlant from '../../Asset/plant.gif'
import Card from '../../Components/Card';


import useFetchDataPost from '../../Hook/new-useGetPost';
import useFetchDataComment from '../../Hook/new-useGetPostComments';

export default function PostDetail(id:any) {
    console.log("In PostDetail");
    console.log(id);
    const {post, loading_post} = useFetchDataPost(id.id);
    const {allComments, loading_comment} = useFetchDataComment(id.id);


    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [value, setValue] = useState<String>();
    const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };
    
    useEffect(() => {
        if (textareaRef && textareaRef.current) {
          textareaRef.current.style.height = "0px";
          const scrollHeight = textareaRef.current.scrollHeight;
          textareaRef.current.style.height = scrollHeight + "px";
        }

        console.log("In PostDetail");
        console.log(post);
        console.log(allComments);
        
    }, [value]);

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
            <div className='sectionCommentaires px-6  pb-2'>
                <h3 >Commentaires</h3>
                <hr/>
                <p>Laissez un commentaire</p>
                <textarea
                    ref={textareaRef}
                    placeholder="Ecrivez quelque chose..."
                    onChange={textAreaChange}
                >
                    {value}
                </textarea>
                <button className="bg-blue-500 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded-full button" >Confirmer</button>

            </div>


        </div>
    )
}