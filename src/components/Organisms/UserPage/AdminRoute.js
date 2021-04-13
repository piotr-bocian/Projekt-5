import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import DogLoader from '../../Loaders/NewLoader/DogLoader';

export default function AdminRoute({ component: Component, ...rest }) {
    const { isLogged, admin, getUser, user } = useAuth();
    // const user = getUser();

    // return (
    //     <Route
    //      {...rest}
    //      render={props => {
    //         if(isLogged && currentUser) {
    //             console.log(currentUser);
    //             return <Component {...props} /> 
    //         } else {
    //             return(
    //                 <Redirect 
    //                     to={{
    //                         pathname: "/",
    //                         state: {
    //                             from: props.location
    //                         }
    //                     }}
    //                 />
    //             );
                
    //         } 
    //      }}
    //     ></Route>
    // )

    return user.isAdmin === undefined ? 
     (
        <></>
    ):(
        <Route
         {...rest}
         render={props => {
            if(isLogged && user.isAdmin) {
                console.log('adminRoute', user);
                return <Component {...props} /> 
            } else {
                return(
                    <Redirect 
                        to={{
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }}
                    />
                );
                
            } 
         }}
        ></Route>
    ) 
}
