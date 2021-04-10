import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { isLogged } = useAuth();

    return (
        <Route
         {...rest}
         render={props => {
            return isLogged ? <Component {...props} /> : <Redirect to="/" exact />
         }}
        ></Route>
    )
}
