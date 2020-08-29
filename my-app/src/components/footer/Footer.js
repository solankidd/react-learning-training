import React from 'react';
import './footer.scss';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.message = this.props.message;
        this.state = {
            year: 2020
        }
    }

    render() {
        return (
            <footer className="main-footer">
                {this.message} - {this.state.year}
            </footer>
        )
    }
};

export default Footer;