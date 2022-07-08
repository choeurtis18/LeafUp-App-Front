import {TrickAndTipsData} from "../interfaces/TrickAndTips";
import axios from "axios";

export default function useGetUserPostList(user_id: number) {
    return (): Promise<TrickAndTipsData[]> => {
        return axios.get('http://127.0.0.1:8000/api/posts/user'+user_id)
            .then(res => res.data)
    }
}