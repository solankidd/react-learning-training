import React, {Component} from 'react';
import {Switch, Link, Route} from "react-router-dom";
import EmployeesList from '../employeesList/employeesList';
import AddEmployee from '../addEmployee/addEmployee';
import EmployeeDetail from '../employeeDetail/employeeDetail';

class MyRoutes extends Component {
    render() {
        return (
            <div>
                <Link to="/showemp">List</Link><br></br>
                <Link to="/createemp">Create</Link><br></br>
                <Link to="/about">About</Link><br></br>
                <Link to="/contact">Contact</Link><br></br>

                <Switch>
                    <Route exact path="/showemp" component={EmployeesList}></Route>
                    <Route path="/createemp" component={AddEmployee}></Route>
                    <Route path="/about" component={EmployeesList}></Route>
                    <Route path="/contact" component={EmployeesList}></Route>
                    <Route path="/employeedetail/:id/:name" component={EmployeeDetail}></Route>
                </Switch>
            </div>
        )
    }
}

export default MyRoutes;