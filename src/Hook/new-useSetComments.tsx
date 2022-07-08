import { useEffect, useState} from 'react';
import axios from 'axios';

import { Comments } from '../interfaces/Comments';

const newuseSetComments = (id:number, comment:Comments) => {
    const [post_response,setResponse] = useState<''>();
    const [loading_setcomment, setLoading] = useState(true);

    console.log("In newuseSetComments befor post");
    console.log(id);
    console.log(comment);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const { data: response } = await axios.post('http://127.0.0.1:8000/api/commentbypost/'+id+'/');
            setResponse(response);
            console.log("In newuseSetComments");
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
        post_response,
        loading_setcomment,
    };
};

export default newuseSetComments;