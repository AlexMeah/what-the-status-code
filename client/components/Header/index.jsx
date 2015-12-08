if (process.env.BROWSER) {
    require('./index.scss');
}

import React from 'react';
import {Link} from 'react-router';

const Header = React.createClass({
    render: function render() {
        return (
            <header className="header cf">
                <Link to="/"><div className="divider"><h1 className="tac display">What the status code?</h1></div></Link>
            </header>
        );
    }

});

module.exports = Header;
