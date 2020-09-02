import React, {Component} from 'react';

class EmployeeDetail extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <div> Emp Id: {this.props.match.params.id} </div>
                <div> Emp Id: {this.props.match.params.name} </div>
            </div>
        )
    }
};

export default EmployeeDetail;