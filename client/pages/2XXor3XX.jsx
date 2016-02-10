import React, {PropTypes} from 'react';

import Question from '../components/Question/index.jsx';

const questions = {
    1: {
        text: 'Do you want to redirect the user to a new location?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/2XXor3XX/2'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/2XXor3XX/3'
            }
        ]
    },
    2: {
        text: 'Is it to the same resource at a new location?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/2XXor3XX/4'
            }, {
                text: 'No, a different resource',
                type: 'QUESTION',
                path: '/2XXor3XX/5'
            }
        ]
    },
    3: {
        text: 'Will the request be completed later?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/202'
            }, {
                text: 'No, it\'s done',
                type: 'QUESTION',
                path: '/2XXor3XX/6'
            }
        ]
    },
    4: {
        text: 'Can the method change to GET?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/2XXor3XX/7'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/2XXor3XX/8'
            }
        ]
    },
    5: {
        text: 'Was the location created for the request?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/201'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/303'
            }
        ]
    },
    6: {
        text: 'Do you want the users view to remain unchanged?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/204'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/200'
            }
        ]
    },
    7: {
        text: 'Is the new location temporary?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/302'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/301'
            }
        ]
    },
    8: {
        text: 'Is the new location temporary?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/307'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/308'
            }
        ]
    }
};

const TWOXXorTHREEXX = React.createClass({
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

export default TWOXXorTHREEXX;
