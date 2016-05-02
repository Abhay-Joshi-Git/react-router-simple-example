import React from 'react';
import { Router, IndexRoute, Route, hashHistory, browserHistory  } from 'react-router';
import Home from './components/home.js';
import Purchase from './components/purchase.js';
import About from './components/about.js';
import App from './components/app.js'
import Produce from './components/produce.js';

export default () => (
    <Router history={ browserHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='about' component={About}/>
            <Route path='purchase(/:id)' component={Purchase}/>
            <Route path='produce' component={Produce}/>
            <Route path='/:id' component={() => (
                <div>
                    invalid route
                </div>
            )}/>
        </Route>
    </Router>
);