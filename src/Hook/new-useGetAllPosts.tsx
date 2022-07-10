import { useEffect, useState} from 'react';
import axios from 'axios';

import { TrickAndTipsData } from '../interfaces/TrickAndTips';

const useGetAllPosts = () => {
    const [allPosts,setAllPosts] = useState<TrickAndTipsData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const { data: response } = await axios.get('http://127.0.0.1:8000/api/posts/');
            setAllPosts(response);
            console.log("In newuseGetAllPosts");
            console.log(response);
            console.log(allPosts);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
        };
        fetchPosts();
    }, []);

    return {
        allPosts,
        loading,
    };
};

export default useGetAllPosts;