import { useEffect, useState} from 'react';
import axios from 'axios';

import { User } from '../interfaces/User';

const newuseGetUser = (user_id:number) => {
    const [user,setUser] = useState<User>();
    const [loading_user, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const { data: response } = await axios.get('http://127.0.0.1:8000/api/users/'+user_id+'/');
            setUser(response);
            console.log("In newuseGetUser");
            console.log(response);
            console.log(user);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
        };
        fetchPosts();
    }, []);

    return {
        user,
        loading_user,
    };
};

export default newuseGetUser;