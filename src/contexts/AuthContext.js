import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const userUrl = 'http://localhost:5000/api/users/me';
    // const userUrl = 'https://best-animal-shelter.herokuapp.com/api/users/me;
    const loginUrl = 'http://localhost:5000/api/login';
    // const loginUrl = 'https://best-animal-shelter.herokuapp.com/api/login;
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState('');

    const[err, setErr] = useState('');
    const authToken = window.localStorage.getItem('x-auth-token');

    // function userLogged() {
    //     if(localStorage.getItem("x-auth-token")){
    //         setIsLogged(true);
    //     }
    // }

    async function signIn(email, password) {
        const loginResponse = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await loginResponse.json();
        if(loginResponse.status >= 200 && loginResponse.status < 300){
            window.localStorage.setItem('x-auth-token', data.token);
            setToken(window.localStorage.getItem('x-auth-token'));
            console.log('Logowanie...');
            return;
        } else {
            setErr(data.message);
            return err;
        }
    }


    function logout(){
        if(!localStorage['x-auth-token']){
            return alert("Żaden użytkownik nie jest zalogowany.");
        }
        window.localStorage.removeItem('x-auth-token');
        setToken('');
        setIsLogged(false);
    }
    useEffect(() => {
        // setLoading(true);
        setCurrentUser('');
        // console.log(token);
        if(authToken) {
            setLoading(true);
            setIsLogged(true);
            ( async() => {
                try {
                    setErr('');
                    const response = await fetch(userUrl, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'x-auth-token': authToken
                        },
                    });
                    const userData = await response.json();
                    if(response.status >= 200 && response.status < 300) {
                        await setCurrentUser(userData);
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
        token,
        signIn,
        logout,
        isLogged
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
