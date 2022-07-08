import {TrickAndTipsData} from "../interfaces/TrickAndTips";
import axios from "axios";

export default function useSetPost(user_id:number) {
    return (): Promise<TrickAndTipsData> => {
        return axios.post('http://127.0.0.1:8000/api/post/'+user_id+'/')
            .then(res => res.data)
    }
}