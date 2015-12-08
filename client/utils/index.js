const history = require('../history.jsx');

module.exports = {
    handleAnswer: function handleAnswer(answer) {
        if (answer.type === 'REDIRECT') {
            return history.pushState(null, answer.path);
        }

        if (answer.type === 'QUESTION') {
            return history.pushState(null, answer.path);
        }
    }
};
