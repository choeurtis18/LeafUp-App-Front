import {TrickAndTipsData} from "../interfaces/TrickAndTips";
import axios from "axios";

export default function useSetPost(user_id:number) {
    return (): Promise<TrickAndTipsData> => {
        return axios.get('http://127.0.0.1:8000/api/posts/user_id='+user_id)
            .then(res => res.data)
    }
}