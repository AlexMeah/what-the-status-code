import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';

import Header from '../components/Header/index.jsx';

const App = React.createClass({
    propTypes: {
        children: PropTypes.oneOfType([ PropTypes.object, PropTypes.element ])
    },

    render() {
        return (
            <div>
                <Helmet
                    title="What the status code?"
                />

                <Header />

                {this.props.children}
            </div>
        );
    }

});

export default App;
