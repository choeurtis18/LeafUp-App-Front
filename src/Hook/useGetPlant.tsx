import {Plante} from "../interfaces/Plante";
import axios from "axios";

export default function useGetPlant() {
    return (): Promise<Plante[]> => {
        return axios.get('http://127.0.0.1:8000/api/plants/')
            .then(res => res.data)
    }
}