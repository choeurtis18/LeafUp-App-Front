import {User} from "../interfaces/User";
import axios from "axios";

export default function useGetUser(user_id: number) {
    return (): Promise<User> => {
        return axios.get('http://127.0.0.1:8000/api/users/id='+user_id)
            .then(res => res.data)
    }
}