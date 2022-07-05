<<<<<<< Updated upstream:src/components/PostDetail.tsx
import { TrickAndTipsData } from "../interfaces"
=======
import { TrickAndTipsData } from '../../interfaces';
import GifPlant from '../../Asset/plant.gif'
import Card from '../../Components/Card';
>>>>>>> Stashed changes:src/Pages/components/PostDetail.tsx

interface PostDetaiProps {
    onePost : TrickAndTipsData | null ;
}

const PostDetail: React.FC<PostDetaiProps> = ({onePost}) => {
    return(
        <div className="post">
            <div className='header' >
                <h1>{onePost?.title}</h1>
                <p>23/03/2021</p>
            </div>
            <div className='container mx-auto px-4'>
         <Card css=' lg:h-80 '> 
          <img src={GifPlant} alt="GifPlant" className='rounded-xl lg:h-full lg:w-full lg:object-cover'/>
         </Card>
         <p>NOM Auteur</p>
         </div>
        <p style={{padding: "50px"}}>{onePost?.body}</p>
        <div className='Commentaires'>
            <h3>Commentaires</h3>
            <hr/>
            <p>Laissez un commentaire</p>
            <textarea id="story" name="story">
                It was a dark and stormy night...
            </textarea>
            <button className="bg-blue-500 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded-full button">Confirmer</button>

        </div>

        </div>
    )
}

export default PostDetail