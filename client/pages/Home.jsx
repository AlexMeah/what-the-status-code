import React, {PropTypes} from 'react';

import Question from '../components/Question/index.jsx';

const questions = {
    1: {
        text: 'Is there a problem with the request?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/4XX'
            }, {
                text: 'No',
                type: 'QUESTION',
                path: '/home/2'
            }
        ]
    },
    2: {
        text: 'Is there a problem server-side?',
        type: 'QUESTION',
        answers: [
            {
                text: 'Yes',
                type: 'REDIRECT',
                path: '/5XX'
            }, {
                text: 'No',
                type: 'REDIRECT',
                path: '/2XXor3XX'
            }
        ]
    }
};

const Home = React.createClass({
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

export default Home;
