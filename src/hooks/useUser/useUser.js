import { useState, useEffect } from 'react';

const useUser = () => {
    const url = 'http://localhost:5000/api/users/me';
    // const url = 'https://best-animal-shelter.herokuapp.com/api/users/me;

    const[user, setUser] = useState({});
    const[err, setErr] = useState({});
    // const authToken = window.localStorage.getItem('x-auth-token');

    useEffect(() => {
        ( async() => {
            try {
                const response = await fetch(url, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-auth-token': window.localStorage.getItem('x-auth-token')
                    },
                });
                const userData = await response.json();
                console.log('userData: ',userData);
                setUser(userData);
            } catch (err) {
                setErr(err);
            }
        })()
    }, []);

    if(!err){
        return user
    }
    else return err;
}

export default useUser;

