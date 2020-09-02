import React from 'react';
import PropTypes from 'prop-types';
import './sumCustom.scss';

const Sum = (props) => {
    
    PropTypes.checkPropTypes(myPropTypes, props, null, 'Sum', function(err){
        console.log('Handle if you want to handle anything');
    });

    return (
        <h6> {props.sal} + {props.variable} = {props.sal + props.variable}</h6>
    )
}

export default Sum;


const myPropTypes = {
    sal: PropTypes.number,
    variable: PropTypes.number
}