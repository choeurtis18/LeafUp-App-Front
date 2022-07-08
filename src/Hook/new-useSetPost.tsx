import { useEffect, useState} from 'react';
import axios from 'axios';

import { TrickAndTipsData } from '../interfaces/TrickAndTips';

const useSetPost = (id:number, post:TrickAndTipsData) => {
    const [post_response,setResponse] = useState<''>();
    const [loading_setcomment, setLoading] = useState(true);

    console.log("In useSetPost befor post");
    console.log(id);
    console.log(post);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const { data: response } = await axios.post('http://127.0.0.1:8000/api/post/'+id+'/');
            setResponse(response);
            console.log("In useSetPost");
            console.log(response);
            console.log(post_response);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
        };
        fetchPosts();
    }, []);

    return {
        post,
        loading_setcomment,
    };
};

export default useSetPost;