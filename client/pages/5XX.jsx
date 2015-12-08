import React, {PropTypes} from 'react';

import Question from '../components/Question/index.jsx';

const questions = {
    1: {
        text: 'Should the user retry after some time?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/503'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/5XX/2'
            }
        ]
    },
    2: {
        text: 'Is there a problem with another server?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/5XX/3'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/5XX/4'
            }
        ]
    },
    3: {
        text: 'Is the other server responding?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/502'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/504'
            }
        ]
    },
    4: {
        text: 'Do you feel bad your code can\'t handle the request?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/501'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/500'
            }
        ]
    }
};

const FIVEXX = React.createClass({
    propTypes: {
        params: PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            question: (this.props.params.question || 1)
        };
    },

    componentWillReceiveProps(nextProps) {
        this.setState({
            question: (nextProps.params.question || 1)
        });
    },

    render: function render() {
        const question = questions[this.state.question];

        return (
            <section className="container">
                <Question {...question} />
            </section>
        );
    }

});

export default FIVEXX;
