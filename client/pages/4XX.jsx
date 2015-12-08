import React, {PropTypes} from 'react';

import Question from '../components/Question/index.jsx';

const questions = {
    1: {
        text: 'Is the user being throttled?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/429'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/4XXe/2'
            }
        ]
    },
    2: {
        text: 'Does the user need to authenticate?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/4XXe/3'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/4XXe/4'
            }
        ]
    },
    3: {
        text: 'Are you using HTTP auth?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/401'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/4XXe/5'
            }
        ]
    },
    4: {
        text: 'Does the user have access to the resource?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/4XXe/6'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/4XXe/5'
            }
        ]
    },
    5: {
        text: 'Is the resource a secret?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/404'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/403'
            }
        ]
    },
    6: {
        text: 'Does the resource even exist?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/4XXe/8'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/4XXe/7'
            }
        ]
    },
    7: {
        text: 'Are you rage-quitting the internet?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/410'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/404'
            }
        ]
    },
    8: {
        text: 'Is the HTTP method handled by the resource?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/4XXe/9'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/405'
            }
        ]
    },
    9: {
        text: 'Problem with the headers?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'QUESTION',
                path: '/4XX/10'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/4XX/11'
            }
        ]
    },
    10: {
        text: 'Which Header?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Accept',
                type: 'REDIRECT',
                path: '/code/406'
            }, {
                text: 'Content-Length',
                type: 'REDIRECT',
                path: '/code/411'
            }, {
                text: 'If-*',
                type: 'REDIRECT',
                path: '/code/412'
            }, {
                text: 'Content-Type',
                type: 'REDIRECT',
                path: '/code/415'
            }, {
                text: 'Expect',
                type: 'REDIRECT',
                path: '/code/417'
            }, {
                text: 'Other',
                type: 'QUESTION',
                path: '/4XX/11'
            }
        ]
    },
    11: {
        text: 'Request incompatible with a previous request?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/409'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/4XX/12'
            }
        ]
    },
    12: {
        text: 'Is the body well-formed and yet still invalid?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/code/422'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/code/400'
            }
        ]
    }
};

const FOURXX = React.createClass({
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

export default FOURXX;
