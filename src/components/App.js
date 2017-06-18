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
      currentEmployeeId: null,
    };
  }

  search = (searchKey) => {
    const employees = this.props.services.findByName(searchKey)

    this.setState({
      employees: employees,
    });
  }

  onSelected = (id) => {
    this.setState({
      currentEmployeeId: id,
    });
  }

  render() {
    const employee = this.props.services.findById(this.state.currentEmployeeId);

    return (
      <div className="App">
        <Header text="Employee Directory"/>
        <div className="contacts">
          <div className="contacts-panel">
            <div className="employee-list-panel">
              <SearchBar className="search-bar" search={this.search} />
              <EmployeeList employees={this.state.employees}
                            onSelected={this.onSelected} />
            </div>
            <div className="employee-details-panel">
              <EmployeeDetails employee={employee}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
