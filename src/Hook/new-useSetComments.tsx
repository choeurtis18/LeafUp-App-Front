import { useEffect, useState} from 'react';
import axios from 'axios';

import { Comments } from '../interfaces/Comments';

export default function useSetComments() {
    return (token: string, comment: Comments) => {
        console.log('In useSetComments');
        console.log(comment);
        return axios.post('http://127.0.0.1:8000/api/commentbypost/', {
            credentials: true,
            body: new URLSearchParams({
                content: comment.content,
                date: comment.date,
                post_id: comment.post_id,
                user_id: comment.user_id,
            })
        })
            .then(res => {
                res.data;
                console.log(res.data)
            })
    }
};
