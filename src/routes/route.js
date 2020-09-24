import React from 'react';

import { BrowserRouter, Switch, Router } from 'react-router-dom';

import Login from '../pages/Login';
import Carrinho from '../pages/Carrinho';
const Router = () => (

        <BrowserRouter>
        <Switch>
            <Router exact path="/" component={Login} />
            <Router path="/carrinho" component={Carrinho} />
        </Switch>
        </BrowserRouter>
);