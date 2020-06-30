import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Register, Login, ForgotPassword } from './pages';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
    </BrowserRouter>
)