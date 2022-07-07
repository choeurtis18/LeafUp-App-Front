import {PostLikes} from "../interfaces/PostLikes"
import axios from "axios";

export default function useGetPostLikes() {
    return (): Promise<PostLikes[]> => {
        return axios.get('http://127.0.0.1:8000/api/postlikes/')
            .then(res => res.data)
    }
}