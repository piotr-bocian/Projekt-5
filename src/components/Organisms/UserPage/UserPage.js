import React, { useState, useEffect } from 'react';

const UserPage = () => {
    const url = 'http://localhost:3000/api/users/me';
    // const url = 'https://best-animal-shelter.herokuapp.com/api/users/me;

    const[name, setName] = useState('');

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
                const user = await response.json();
                
                setName(user.firstName);
            }
        )();
    })

    return(
        <div>
            Witaj {name}!
        </div>
    )
}

export default UserPage;