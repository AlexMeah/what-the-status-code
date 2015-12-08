if (process.env.BROWSER) {
    // require('./index.scss');
}

import React, {PropTypes} from 'react';
import utils from '../../utils';

const Answer = ({answer}) => (<div className="btn btn--interaction answer" onClick={utils.handleAnswer.bind(null, answer)}>{answer.text}</div>);

Answer.propTypes = {
    answer: PropTypes.object.isRequired
};

module.exports = Answer;
