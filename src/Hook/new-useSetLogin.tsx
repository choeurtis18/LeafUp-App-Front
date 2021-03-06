import { useEffect, useState} from 'react';
import axios from 'axios';

import { User } from '../interfaces/User';

export default function useSetLogin() {
    const header = {
        "Content-Type": "application/json",
    }
    return (token: string, user: User) => {
        return axios.post('http://127.0.0.1:8000/api/users/', {
            header: header,
            pseudo: user.pseudo,
            password: user.password,
        })
            .then(res => res.data)
    }
};
