if (process.env.BROWSER) {
    require('./index.scss');
}

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Answer = ({path, text}) => (<Link className="btn btn--interaction answer" to={path}>{text}</Link>);

Answer.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

module.exports = Answer;
