import { useEffect, useState} from 'react';
import axios from 'axios';

import { Comments } from '../interfaces/Comments';

export default function useSetComments() {
    return (token: string, comment: Comments) => {
        return axios.post('http://127.0.0.1:8000/api/commentbypost/', {
            credentials: true,
            body: new URLSearchParams({
                content: comment.content,
                date: comment.content,
                post_id: comment.content,
                user_id: comment.content,
            })
        })
            .then(res => res.data)
    }
};
