import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default Welcome;

Welcome.defaultProps = {
    name : "Anusikta"
}

Welcome.propTypes = {
    name : PropTypes.string
}