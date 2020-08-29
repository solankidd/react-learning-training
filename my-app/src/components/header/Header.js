import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = (props) => {
    return (
        <header className="main-header">
            {props.heading.mainText} - <span className="sub-text">{props.heading.subText}</span>
        </header>
    )
}

export default Header;