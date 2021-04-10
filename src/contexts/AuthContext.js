import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const url = 'http://localhost:5000/api/users/me';
    // const url = 'https://best-animal-shelter.herokuapp.com/api/users/me;
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    const[err, setErr] = useState('');
    const authToken = window.localStorage.getItem('x-auth-token');


    function logout(){
        if(!localStorage['x-auth-token']){
            return alert("Żaden użytkownik nie jest zalogowany.");
        }
        window.localStorage.removeItem('x-auth-token');
        setIsLogged(false);
    }
    useEffect(() => {
        setCurrentUser('');
        if(localStorage['x-auth-token']) {
            setLoading(true);
            setIsLogged(true);
            ( async() => {
                try {
                    setErr('');
                    const response = await fetch(url, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'x-auth-token': authToken
                        },
                    });
                    const userData = await response.json();
                    if(response.status >= 200 && response.status < 300) {
                        setCurrentUser(userData);
                        setIsLogged(true);
                    } else {
                        setErr(userData.message);
                    }
    
                } catch (err) {
                    setErr(err.message);
                }
                setLoading(false);
            })()
        }
        setLoading(false);
        return;
        
    }, [authToken]);

    const value = {
        currentUser,
        err,
        logout,
        isLogged
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
