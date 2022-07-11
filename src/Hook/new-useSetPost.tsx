import { useEffect, useState} from 'react';
import axios from 'axios';

import { TrickAndTipsData } from '../interfaces/TrickAndTips';

export default function useSetPost() {
    const header = {
        "Content-Type": "application/json",
    }
    return (token: string, post: TrickAndTipsData) => {
        console.log('In useSetPost');
        console.log(post);
        return axios.post('http://127.0.0.1:8000/api/posts/', {
            header: header,
            title: post.title,
            content: post.content,
            user: post.user,
            img: post.img,
        })
            .then(res => res.data)
    }
};
