import {User} from "../interfaces/User";
import axios from "axios";

export default function useGetUserList() {
    return (): Promise<User[]> => {
        return axios.get('http://127.0.0.1:8000/api/users/')
            .then(res => res.data)
    }
}