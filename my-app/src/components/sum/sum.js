import React from 'react';
import PropTypes from 'prop-types';
import './sum.scss';

const Sum = (props) => {
    return (
        <h6> {props.sal} + {props.variable} = {props.sal + props.variable}</h6>
    )
}

export default Sum;

Sum.propTypes = {
    sal: PropTypes.number.isRequired,
    variable: PropTypes.number.isRequired
}