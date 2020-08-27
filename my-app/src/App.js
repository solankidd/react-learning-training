import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header'
import { render } from 'react-dom';

function App() {
  let employees = [{ id: 1, name: 'John', desig: 'SE', salary: 10000 }, { id: 2, name: 'Doe', desig: 'SSE', salary: 15000 }];


  function renderTableHeader() {
    let header = Object.keys(employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
   })
  }

  function renderTableData() {
    return employees.map((emp) => ( 
      <tr key={emp.id}>
        <td>{emp.id}</td>
        <td>{emp.name}</td>
        <td>{emp.desig}</td>
        <td>{emp.salary}</td>
      </tr>
    ))
  };

  return (
    <div className="App">
      <Header/>
      <table className="table">
        <thead>
          <tr>
            {renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
  
}

export default App;
