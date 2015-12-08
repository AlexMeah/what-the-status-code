if (process.env.BROWSER) {
    require('./index.scss');
}

import React from 'react';
import {Link} from 'react-router';

const Header = React.createClass({
    render: function render() {
        return (
            <header className="header cf">
                <Link to="/"><h1 className="tac">What the status code?</h1></Link>
            </header>
        );
    }

});

module.exports = Header;
