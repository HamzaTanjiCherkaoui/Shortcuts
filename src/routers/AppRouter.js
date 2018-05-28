import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Navigation from '../components/Navigation';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/pages/NotFoundPage';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navigation/>
            <Switch>
            <Route path="/" component={HomePage} exact={true}/> 
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;
