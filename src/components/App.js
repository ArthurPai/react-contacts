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
      searchKey: "",
      all_employees: [],
      employees: [],
      currentEmployeeId: null,
    };
  }

  findEmploeeById = (employees, id) => {
    let employee = null;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employee = employees[i];
        break;
      }
    }

    return employee;
  }

  findEmploeesByName = (employees, searchKey) => {
    if (searchKey === "")
      return employees;

    const fliter_employees = employees.filter(function(element) {
      const fullName = element.firstName + " " + element.lastName;
      return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
    });

    return fliter_employees;
  }

  componentDidMount() {
    const self = this;
    const employeesRef = this.props.firebase.database().ref('employees');

    employeesRef.on('value', (snapshot) => {
      const all_employees = snapshot.val();
      const employees = self.findEmploeesByName(all_employees, self.state.searchKey);

      this.setState({
        all_employees: all_employees,
        employees: employees
      });
    });
  }

  search = (searchKey) => {
    const employees = this.findEmploeesByName(this.state.all_employees, searchKey);

    this.setState({
      searchKey: searchKey,
      employees: employees,
    });
  }

  onSelected = (id) => {
    console.log(id);
    this.setState({
      currentEmployeeId: id,
    });
  }

  render() {
    const employee = this.findEmploeeById(this.state.employees, this.state.currentEmployeeId);

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
