import {TrickAndTipsData} from "../interfaces/TrickAndTips";
import axios from "axios";


export default function usePostList(id:string) {
    return (): Promise<TrickAndTipsData> => {
        return axios.get('http://127.0.0.1:8000/api/posts/'+id+'/')
            .then(res => res.data)
    }
}