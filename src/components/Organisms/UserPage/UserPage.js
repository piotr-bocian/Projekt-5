import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

const UserPage = () => {
    const url = 'http://localhost:3000/api/users/me';
    // const url = 'https://best-animal-shelter.herokuapp.com/api/users/me;

    const[user, setUser] = useState({});

    useEffect( () => {
        (
            async () => {
                const response = await fetch(url, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-auth-token': window.localStorage.getItem('x-auth-token')
                    },
                });
                const userData = await response.json();
                console.log(userData);
                setUser(userData);
            }
        )();
    }, []);

    return(
        <div>
            {user.firstName ? `Hi ${user.firstName}` : <Redirect to="/" exact />}
        </div>
    )
}

export default UserPage;