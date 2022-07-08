import { useNavigate } from "react-router-dom";
import { TrickAndTipsData } from "../../interfaces";
import '../../Styles/style.css'
import Note from "./Note";
interface TrickAndTipsProps {
    allPosts: TrickAndTipsData[] | null;
}
const ContainerCards: React.FC<TrickAndTipsProps> = ({allPosts}) => {
    
    const navigate = useNavigate()
    return (

        <ul className="Cards">

            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {allPosts?.map(post => (

                <div className="rounded overflow-hidden shadow-lg" key={post.id}>
                
                <div className="px-6 py-4">
                    <Note note={post.nb_likes}/>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <p className="text-gray-700 text-base">
                    {post.content}
                    </p>
                </div>
                <div className="px-6 pb-2">
                {/*<div className="text-lg text-gray-700 auteur">NOM Auteur</div>*/}
                </div>
                <div className="px-6 pb-2">
                <button className="bg-blue-500 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded-full button" onClick={() => navigate(`/tricksandtips/${post.id}`) }>Lire le post</button>
                </div>
                <div className="px-6  pb-2">
                    <p className="mt-3 text-gray-600 text-sm md:text-base nivdate">
                        <span>{post.date}</span>
                    </p>
                </div>


                </div>
            

                
            ))}
             </div>

        </ul>
        
    )
}

export default ContainerCards