import { useEffect, useState} from 'react';
import axios from 'axios';

import { User } from '../interfaces/User';

export default function useSetRegister() {
    const header = {
        "Content-Type": "application/json",
    }
    return (token: string, user: User) => {
        return axios.post('http://127.0.0.1:8000/api/users/', {
            header: header,
            lastname: user.lastname,
            firstname: user.firstname,
            email: user.email,
            password: user.password,
            pseudo: user.pseudo
        })
            .then(res => res.data)
    }
};
