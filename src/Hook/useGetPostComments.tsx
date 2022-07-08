import {Comments} from "../interfaces/Comments"
import axios from "axios";

export default function useGetPostComments(post_id:number) {
    console.log("In useGetPostComments");
    var id = String(post_id);
    console.log('http://127.0.0.1:8000/api/commentbypost/'+{id});

    return (): Promise<Comments[]> => {
        return axios.get('http://127.0.0.1:8000/api/commentbypost/'+{id})
            .then(res => res.data)
    }
}