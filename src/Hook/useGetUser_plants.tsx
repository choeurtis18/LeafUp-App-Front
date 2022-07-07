import {User_plants} from "../interfaces/User_plants";
import axios from "axios";

export default function useGetUser_plants() {
    return (): Promise<User_plants[]> => {
        return axios.get('http://127.0.0.1:8000/api/userplants/')
            .then(res => res.data)
    }
}