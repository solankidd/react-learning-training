import React from 'react';
import './employeesList.scss';
import SumCustom from '../sumCustom/sumCustom';
import Sum from '../sum/sum';

class EmployeesList extends React.Component {

    constructor() {
        super();
        this.Employees = [
            { id: 1, name: 'John', desig: 'SE', salary: 10000, image: './images/pexels-photo.jpg' },
            { id: 2, name: 'Doe', desig: 'SSE', salary: 15000, image: './images/pexels-photo.jpg' },
            { id: 3, name: 'Nick', desig: 'Intern', salary: 0, image: './images/pexels-photo.jpg' }
        ];
    }

    render() {
        return (
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
        )
    }
};

function renderTableHeader() {
    let header = Object.keys(this.Employees[0]);
    return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
};

function renderTableData() {
    return this.Employees.map((emp) => (
        <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.desig}</td>
            <td>
                <SumCustom sal={emp.salary} variable={1000}></SumCustom>
                <Sum sal={emp.salary} variable={1001}></Sum>
            </td>
            <td><div className="img-container text-center"><img className="img-fluid" src={emp.image}/></div></td>
        </tr>
    ))
};

// <Sum a="1" b="3"></Sum>

export default EmployeesList;