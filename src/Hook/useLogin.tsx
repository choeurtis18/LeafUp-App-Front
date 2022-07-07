import {User} from "../interfaces/User";
import axios from "axios";

export default function useLogin() {
    return (): Promise<User> => {
        return axios.get('http://localhost:2345/login.php')
            .then(res => res.data)
    }
}