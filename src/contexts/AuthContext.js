import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const signUpUrl = 'https://best-animal-shelter.herokuapp.com/api/users';
    // const userUrl = 'http://localhost:5000/api/users/me';
    const userUrl = 'https://best-animal-shelter.herokuapp.com/api/users/me';
    // const loginUrl = 'http://localhost:5000/api/login';
    const loginUrl = 'https://best-animal-shelter.herokuapp.com/api/login';
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const[err, setErr] = useState('');
    const authToken = window.localStorage.getItem('x-auth-token');
    let user = {...currentUser};

    function userLogged() {
        if(localStorage.getItem("x-auth-token")){
            return setIsLogged(true);
        } else {
            return setIsLogged(false);
        }
    }

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
        if(loginResponse.ok){
            window.localStorage.setItem('x-auth-token', data.token);
            console.log('Logowanie...');
            setIsLogged(true);
            return;
        } else {
            return data.message;
        }
    }

    async function signUp(user){
        const signUpResponse = await fetch(signUpUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: user.firstName,
                lastName: user.lastName,
                mobile: user.mobile,
                email: user.email,
                password: user.password,
                image: ''
            })
        });
        const data = await signUpResponse.json();
        if (signUpResponse.ok){
            window.localStorage.setItem('x-auth-token', data.token);
            console.log('Wysłano dane do rejestracji konta');
            console.log('Logowanie...');
            setIsLogged(true);
            return;
        } else {
            return data.message;
        }
     
    }

    async function addEmployee(url, user){
        const signUpResponse = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': authToken
            },
            body: JSON.stringify({
                firstName: user.firstName,
                lastName: user.lastName,
                mobile: user.mobile,
                email: user.email,
                password: user.password,
                image: ''
            })
        });
        const data = await signUpResponse.json();
        if (signUpResponse.ok){
            console.log('Pomyślnie dodano pracownika');
            return;
        } else {
            return data.message;
        }
     
    }

    function logout(){
        if(!localStorage['x-auth-token']){
            return alert("Żaden użytkownik nie jest zalogowany.");
        }
        window.localStorage.removeItem('x-auth-token');
        setLoading(true);
        setIsLogged(false);
        setCurrentUser('');
        user = '';
        window.location.reload();
        setLoading(false);
    }
    useEffect(() => {
        userLogged();
        setCurrentUser('');
        setLoading(true);
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
        setLoading(false);
        return;
    }, [authToken]);

    const value = {
        loading,
        user,
        err,
        authToken,
        signUp,
        signIn,
        logout,
        addEmployee,
        isLogged
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
