import { useEffect, useState} from 'react';
import axios from 'axios';

import { Comments } from '../interfaces/Comments';

export default function useSetComments() {
    const header = {
        "Content-Type": "application/json",
    }
    return (token: string, comment: Comments) => {
        return axios.post('http://127.0.0.1:8000/api/comments/', {
            header: header,
            //body: new URLSearchParams({
                content: comment.content,
                post: comment.post_id,
                user: comment.user_id,
            //}).toString()
        })
            .then(res => res.data)
    }
};
