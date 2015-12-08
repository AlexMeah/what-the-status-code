if (process.env.BROWSER) {
    require('./scss/main.scss');
}

import React from 'react';
import {render} from 'react-dom';
import {Router, match} from 'react-router';

import routes from './routes.jsx';
import history from './history.jsx';

const rootElement = document.getElementById('app');

const {pathname, search, hash} = window.location;
const location = `${pathname}${search}${hash}`;

match({routes, location}, () => {
    render(
        <Router routes={routes} history={history} />,
        rootElement
    );
});
