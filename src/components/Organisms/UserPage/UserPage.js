import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const UserPage = () => {
    const { currentUser, err, logout } = useAuth();
    const history = useHistory();
    function handleLogout() {
        logout();
        history.push("/");
    }

    if(err){
        return(
            <div>
                <h2>{ err }</h2>
            </div>
        )
    } else {
        return(
            <div>
                Hi { currentUser.firstName }
                <pre>
                    { JSON.stringify(currentUser) }
                </pre>

                <button onClick={ handleLogout }>Wyloguj</button>
                
            </div>
        )
    }
    
}

export default UserPage;