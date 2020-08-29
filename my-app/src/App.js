import React from 'react';
// import { render } from 'react-dom';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import EmployeesList from './components/employeesList/employeesList.js';

function App() {
  const header = {
    mainText: 'Main Text',
    subText: 'Sub Text'
  }
  return (
    <div className="App">

      <Header heading={header}></Header>
      <EmployeesList />
      <Footer message="Main footer"></Footer>
    </div>
  );
}

export default App;
