import {Plante} from "../interfaces/Plante";
import axios from "axios";

export default function useGetUserPlant(user_id: number) {
    return (): Promise<Plante> => {
        return axios.get('http://127.0.0.1:8000/api/userplants/'+user_id+'/')
            .then(res => res.data)
    }
}