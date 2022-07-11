import { useEffect, useState} from 'react';
import axios from 'axios';

import { TrickAndTipsData } from '../interfaces/TrickAndTips';

const useGetPost = (id:number) => {
    const [post,setPost] = useState<TrickAndTipsData>();
    const [loading_post, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const { data: response } = await axios.get('http://127.0.0.1:8000/api/posts/'+id+'/');
            setPost(response);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
        };
        fetchPosts();
    }, []);

    return {
        post,
        loading_post,
    };
};

export default useGetPost;