import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { isLogged, user } = useAuth();

    return (
        <Route
         {...rest}
         render={props => {
            if(isLogged && user) {
                console.log(user);
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
