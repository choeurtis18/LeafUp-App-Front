import {Comments} from "../interfaces/Comments"
import axios from "axios";

export default function useGetComments() {
    return (): Promise<Comments[]> => {
        return axios.get('http://127.0.0.1:8000/api/comments/')
            .then(res => res.data)
    }
}