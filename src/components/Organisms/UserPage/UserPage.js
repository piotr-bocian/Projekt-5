import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import UserNavigationPage from '../UserNavigationPage/UserNavigationPage';

const UserPage = () => {
    const { user, err, logout } = useAuth();
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

            <UserNavigationPage props = {user}>

            </UserNavigationPage>
            // <div>
            //     Hi { user.firstName }
            //     <pre>
            //         { JSON.stringify(user) }
            //     </pre>

            //     <button onClick={ handleLogout }>Wyloguj</button>
                
            // </div>
        )
    }
    
}

export default UserPage;