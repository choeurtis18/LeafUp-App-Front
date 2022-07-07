import {User} from "../interfaces/User";
import axios from "axios";

export default function useRegister() {
    return (): Promise<User> => {
        return axios.get('http://localhost:2345/register.php')
            .then(res => res.data)
    }
}