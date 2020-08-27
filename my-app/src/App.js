import React from 'react';
import logo from './logo.svg';
import './App.css';

const employees = [{ id: 1, name: 'John', desig: 'SE', salary: 10000 }, { id: 2, name: 'Doe', desig: 'SSE', salary: 15000 }];
function App() {
  return (
    <div className="App">
      <table className="emp-table">
        <tr>
          <th>Name</th>
          <th>Desig</th>
          <th>Salary</th>
        </tr>
        {employees.map((emp) => ( 
          <tr>
            <td>{emp.name}</td>
            <td>{emp.desig}</td>
            <td>{emp.salary}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
