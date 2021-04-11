class Auth {
    userUrl = 'http://localhost:5000/api/users/me';
    // userUrl = 'https://best-animal-shelter.herokuapp.com/api/users/me;
    loginUrl = 'http://localhost:5000/api/login';
    // loginUrl = 'https://best-animal-shelter.herokuapp.com/api/login;

    constructor() {
        this.authenticated = false;
        this.admin = false;
        this.err = '';
    }

    async signIn(url, email, password, cb) {
        const loginResponse = await fetch(url, {
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
            console.log('Logowanie...');
            this.authenticated = true;
        } else {
            this.err = data.message;
            return this.err;
        }
        cb();
    }

    logout(cb) {
        if(!localStorage['x-auth-token']){
            return alert("Żaden użytkownik nie jest zalogowany.");
        }
        window.localStorage.removeItem('x-auth-token');
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }

    isAdmin() {
        return this.admin;
    }
}

export default new Auth();