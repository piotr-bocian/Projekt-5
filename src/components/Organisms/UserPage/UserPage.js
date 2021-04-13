import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import UserNavigationPage from '../UserNavigationPage/UserNavigationPage';

const UserPage = () => {
    const { user, err } = useAuth();


    if(err){
        return(
            <div>
                <h2>{ err }</h2>
            </div>
        )
    } else {
        return(
            <UserNavigationPage props = {user} />
        )
    }
    
}

export default UserPage;