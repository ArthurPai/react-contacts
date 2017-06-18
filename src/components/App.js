import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.services.findByName(""),
    };
  }

  render() {
    return (
      <div className="App">
        <Header text="Employee Directory"/>
        <div className="contacts">
          <div className="contacts-panel">
            <div className="employee-list-panel">
              <SearchBar className="search-bar" />
              <EmployeeList employees={this.state.employees} />
            </div>
            <div className="employee-details-panel">
              <EmployeeDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
