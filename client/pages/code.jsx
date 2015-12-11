import React, {PropTypes} from 'react';
const httpStatus = require('http-status-codes');

const Code = React.createClass({
    propTypes: {
        params: PropTypes.object.isRequired
    },

    render: function render() {
        const { code } = this.props.params;

        return (
            <section className="tac container">
                <h2 className="code">{code}</h2>

                <h3>{httpStatus.getStatusText(code)}</h3>

                <p><a href={'https://httpstatuses.com/' + code}>More Info</a></p>
            </section>
        );
    }

});

export default Code;
