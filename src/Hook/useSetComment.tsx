import {Comments} from "../interfaces/Comments"
import axios from "axios";

export default function useSetComment(user_id:number, post_id:number) {
    return (): Promise<Comments> => {
        return axios.get('http://127.0.0.1:8000/api/comments/user_id='+user_id+'&post_id='+post_id)
            .then(res => res.data)
    }
}