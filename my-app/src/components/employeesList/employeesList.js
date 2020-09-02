import React from 'react';
import './employeesList.scss';
import SumCustom from '../sumCustom/sumCustom';
import Sum from '../sum/sum';
import AddEmployee from '../addEmployee/addEmployee'

class EmployeesList extends React.Component {



    constructor() {
        super();
        this.Employees = [
            { empId: 1, name: 'John', desig: 'SE', salary: 10000, image: './images/pexels-photo.jpg', imageVisible: true },
            { empId: 2, name: 'Doe', desig: 'SSE', salary: 15000, image: './images/pexels-photo.jpg', imageVisible: true },
            { empId: 3, name: 'Nick', desig: 'Intern', salary: 0, image: './images/pexels-photo.jpg', imageVisible: true }
        ];

        this.state = {
            Employees: [
                { empId: 1, name: 'John', desig: 'SE', salary: 10000, image: './images/pexels-photo.jpg', imageVisible: true },
                { empId: 2, name: 'Doe', desig: 'SSE', salary: 15000, image: './images/pexels-photo.jpg', imageVisible: true },
                { empId: 3, name: 'Nick', desig: 'Intern', salary: 0, image: './images/pexels-photo.jpg', imageVisible: true }
            ]
        }
    }

    toggle = (emp) => {
        const empIndex = this.state.Employees.findIndex(element => element.empId == emp.empId);
        let cloneEmployees = [...this.state.Employees];
        cloneEmployees[empIndex] = { ...cloneEmployees[empIndex], imageVisible: !cloneEmployees[empIndex].imageVisible };
        this.setState({
            Employees: cloneEmployees
        });
    }


    render() {
        return (
            <div className="container">
                <AddEmployee />
                <table className="table employee-table">
                    <thead>
                        <tr>
                            {renderTableHeader.call(this)}
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData.call(this)}
                    </tbody>
                </table>
            </div>
        )
    }
};

function renderTableHeader() {
    let header = Object.keys(this.state.Employees[0]);
    return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
};

function renderTableData() {
    return this.state.Employees.map((emp) => (
        <tr key={emp.empId}>
            <td>{emp.empId}</td>
            <td>{emp.name}</td>
            <td>{emp.desig}</td>
            <td>
                <SumCustom sal={emp.salary} variable={1000}></SumCustom>
                <Sum sal={emp.salary} variable={1001}></Sum>
            </td>
            <td>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.toggle(emp)}>Click</button>
                <div className="media">
                    {emp.imageVisible && (
                        <img className="img-fluid profile-pic" src={emp.image} />
                    )}
                    <div className="media-body"></div>
                </div>
            </td>
            <td>
                {emp.imageVisible.toString()}
            </td>
        </tr>
    ))
};

// <Sum a="1" b="3"></Sum>

export default EmployeesList;