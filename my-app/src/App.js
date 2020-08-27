import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header'

function App() {
  let employees = [{ id: 1, name: 'John', desig: 'SE', salary: 10000 }, { id: 2, name: 'Doe', desig: 'SSE', salary: 15000 }];
  return (
    <div className="App">
      <Header/>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Desig</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => ( 
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.desig}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
