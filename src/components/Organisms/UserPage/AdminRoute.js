import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function AdminRoute({ component: Component, ...rest }) {
    const { isLogged, admin, getUser, currentUser } = useAuth();
    // const user = getUser();

    return (
        <Route
         {...rest}
         render={props => {
            if(isLogged && currentUser) {
                console.log(currentUser);
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

    // return admin ? 
    //  (
    //     <Route
    //      {...rest}
    //      render={props => {
    //         if(isLogged && admin) {
    //             console.log('adminRoute', currentUser);
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
    // ) : (
    //     <div></div>
    // );
}
