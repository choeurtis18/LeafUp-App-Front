import {ImgUsers} from "../interfaces/ImgUsers"
import axios from "axios";

export default function useGetImgUsers() {
    return (): Promise<ImgUsers[]> => {
        return axios.get('http://127.0.0.1:8000/api/imgusers/')
            .then(res => res.data)
    }
}