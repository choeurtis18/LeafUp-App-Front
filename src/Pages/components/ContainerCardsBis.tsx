import { useNavigate } from "react-router-dom";
import { TrickAndTipsData } from "../../interfaces";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowUp } from 'react-icons/fa';
import {FaArrowDown} from 'react-icons/fa';
import '../../Styles/style.css'
interface TrickAndTipsProps {
    allPosts: TrickAndTipsData[] | null;
}
export default function ContainerCardsBis(props : any)  {
    
    const navigate = useNavigate()
    return (

        <ul className="Cards">

            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">

                <div className="rounded overflow-hidden shadow-lg" key={props.post_id}>
                
                <div className="px-6 py-4">
                <div className='Note'>
                    <button className='button-note'><FaArrowUp color='#6E8464' /></button>
                    <p className='p-note'>{props.post_note}</p>
                    <button className='button-note'><FaArrowDown color='#6E8464'/></button>
                </div>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.post_title}</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pb-2">
                <div className="text-lg text-gray-700 auteur">{props.post_Nomauteur}</div>
                </div>
                <div className="px-6 pb-2">
                <button className="bg-blue-500 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded-full button" onClick={() => navigate(`/tricksandtips/${props.post_id}`) }>Lire le post</button>
                </div>
                <div className="px-6  pb-2">
                    <p className="mt-3 text-gray-600 text-sm md:text-base nivdate">
                        <span>Pour {props.post_niveau}</span>
                        <span>{props.post_date}</span>
                    </p>
                </div>


                </div>
            

                
             </div>

        </ul>
        
    )
}

