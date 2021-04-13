import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import DogLoader from '../../Loaders/NewLoader/DogLoader';
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
        return( !user.image ? (
            <DogLoader/>
          ) : (
            <UserNavigationPage props = {user} />
        ))
    }
    
}

export default UserPage;