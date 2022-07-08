import {Comments} from "../interfaces/Comments"
import axios from "axios";

export default function getPostComments(post_id:number) {

    console.log('http://127.0.0.1:8000/api/commentbypost/'+post_id);
    return (): Promise<Comments[]> => {
        return axios.get('http://127.0.0.1:8000/api/commentbypost/'+post_id+'/')
            .then(res => res.data)
    }
}