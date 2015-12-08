import React, {PropTypes} from 'react';

const Code = React.createClass({
    propTypes: {
        params: PropTypes.object.isRequired
    },

    render: function render() {
        const { code } = this.props.params;

        return (
            <section className="container">
                <h2 className="tac code">{code}</h2>
            </section>
        );
    }

});

export default Code;
