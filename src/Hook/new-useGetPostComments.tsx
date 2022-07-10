import { useEffect, useState} from 'react';
import axios from 'axios';

import { Comments } from '../interfaces/Comments';

const newuseGetPostComments = (id:number) => {
    const [allComments,setComments] = useState<Comments[]>([]);
    const [loading_comment, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const { data: response } = await axios.get('http://127.0.0.1:8000/api/commentbypost/'+id+'/');
            setComments(response.comments);
            console.log("In newuseGetPostComments");
            console.log(response);
            console.log(response.comments);
            console.log(allComments);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
        };
        fetchPosts();
    }, []);

    return {
        allComments,
        loading_comment,
    };
};

export default newuseGetPostComments;