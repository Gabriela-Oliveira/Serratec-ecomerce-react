import React from 'react';

import { BrowserRouter, Switch, Router } from 'react-router-dom';

import Login from '../pages/Login';
const Router = () => (

        <BrowserRouter>
        <Switch>
            <Router exact path="/" component={Login} />
        </Switch>
        </BrowserRouter>
);