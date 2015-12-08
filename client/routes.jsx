if (typeof require.ensure !== 'function') {
    require.ensure = (d, c) => c(require);
}

import React from 'react';
import {Route, Redirect} from 'react-router';

import App from '../client/container/App.jsx';

const routes = (
    <Route component={App}>
        <Route name="home/Q" path="/home/:question" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/Home.jsx'));
            });
        }}/>
        <Route name="home" path="/home" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/Home.jsx'));
            });
        }}/>
        <Route name="2XXor3XX/Q" path="/2XXor3XX/:question" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/2XXor3XX.jsx'));
            });
        }}/>
        <Route name="2XXor3XX" path="/2XXor3XX" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/2XXor3XX.jsx'));
            });
        }}/>
        <Route name="5XX/Q" path="/5XX/:question" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/5XX.jsx'));
            });
        }}/>
        <Route name="5XX" path="/5XX" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/5XX.jsx'));
            });
        }}/>
        <Route name="4XX/Q" path="/4XX/:question" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/4XX.jsx'));
            });
        }}/>
        <Route name="4XX" path="/4XX" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/4XX.jsx'));
            });
        }}/>
        <Route name="code" path="/code/:code" getComponents={(state, cb) =>{
            require.ensure([], (require) => {
                cb(null, require('../client/pages/code.jsx'));
            });
        }}/>
        <Redirect from="/" to="home" />
    </Route>
);

module.exports = routes;
