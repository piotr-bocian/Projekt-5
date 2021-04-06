import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const url = 'http://localhost:5000/api/users/me';
    // const url = 'https://best-animal-shelter.herokuapp.com/api/users/me;
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const history = useHistory()

    const[err, setErr] = useState('');
    // const authToken = window.localStorage.getItem('x-auth-token');

    function logout(){
        if(localStorage['x-auth-token']){
            window.localStorage.removeItem('x-auth-token');
            history.push("/");
            return;
        }
        
        return alert("Żaden użytkownik nie jest zalogowany.");
    }

    useEffect(() => {
        setCurrentUser('');
        if(localStorage['x-auth-token']) {
            setLoading(true);
            ( async() => {
                try {
                    setErr('');
                    const response = await fetch(url, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'x-auth-token': window.localStorage.getItem('x-auth-token')
                        },
                    });
                    const userData = await response.json();
                    console.log('userData: ',userData);
                    if(response.status >= 200 && response.status < 300) {
                        setCurrentUser(userData);
                    } else {
                        setErr(userData.message);
                        // alert(userData.message);
                    }
    
                } catch (err) {
                    setErr(err.message);
                }
                setLoading(false);
            })()
        }
        // setLoading(false);
        return;
        
    }, []);

    const value = {
        currentUser,
        err,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
