import React, {Component} from 'react';
import Axios from 'axios';

class MyRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    getData = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            const users = res.data;
            console.log(users);
            this.setState({users})
        })
        
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>  
            </div>
        )
    }
}

export default MyRoutes;