import { TrickAndTipsData } from '../../interfaces/TrickAndTips';
import {Comments} from '../../interfaces/Comments'
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeart } from 'react-icons/fa';
import '../../Styles/style.css'
import GifPlant from '../../Asset/plant.gif'
import Card from '../../Components/Card';

interface PostDetailProps {
    onePost : TrickAndTipsData | null ;
    comments : Comments | null ;
}

const PostDetail: React.FC<PostDetailProps> = ({onePost,comments}) => {

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
      }, [value]);

    return(
        <div className="post">
           <div className='header'>
                <h1>{onePost?.title}</h1>
                <p>date</p>
                <button className='button-fav'><FaHeart  /></button>
            </div>
            <div className='image'>
            <div className='container mx-auto px-4'>

            <Card css=' lg:h-80 '> 
            <img src={GifPlant} alt="GifPlant" className='rounded-xl lg:h-full lg:w-full lg:object-cover'/>
         </Card>
         </div>
        <p style={{paddingLeft: "30px"}}>NOM Auteur</p>
            </div>
           <div className='bodyPost'>
                <p style={{padding: "30px"}}>{onePost?.body}</p>
            </div> 
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

export default PostDetail
