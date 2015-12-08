if (process.env.BROWSER) {
    require('./index.scss');
}

import React, {PropTypes} from 'react';

import Answer from '../Answer/index.jsx';

const Question = ({text, answers}) => (<div>
    <h1 className="tac question">{text}</h1>

    <div className="answers">{answers.map((answer, i) => (<Answer key={i} {...answer} />))}</div>
</div>);

Question.propTypes = {
    text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired
};

module.exports = Question;
