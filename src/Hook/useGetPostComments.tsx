import {Comments} from "../interfaces/Comments"
import axios from "axios";

export default function useGetPostComments(post_id:number) {
    return (): Promise<Comments[]> => {
        return axios.get('http://127.0.0.1:8000/api/comments/'+{post_id})
            .then(res => res.data)
    }
}