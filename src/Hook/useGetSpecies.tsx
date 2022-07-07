import {Species} from "../interfaces/Species";
import axios from "axios";

export default function useGetSpecies() {
    return (): Promise<Species[]> => {
        return axios.get('http://127.0.0.1:8000/api/species/')
            .then(res => res.data)
    }
}