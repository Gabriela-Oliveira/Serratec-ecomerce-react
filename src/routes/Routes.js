import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Login from '../pages/Login';
import Carrinho from '../pages/Carrinho';
const Routes = () => (


        <Switch>
            {/* <Router exact path="/" component={Login} /> */}
            <Route path="/carrinho" component={Carrinho} />
        </Switch>

);

export default Routes;