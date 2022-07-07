import {RecordPosts} from "../interfaces/RecordPosts";
import axios from "axios";

export default function useGetRecordPosts() {
    return (): Promise<RecordPosts[]> => {
        return axios.get('http://127.0.0.1:8000/api/recordposts/')
            .then(res => res.data)
    }
}