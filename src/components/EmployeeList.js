import React, {Component} from 'react';
import EmployeeItem from "./EmployeeItem";

class EmployeeList extends Component {
  render() {
    return (
      <ul className="employee-list">
        {this.props.employees.map(employee => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </ul>
    );
  }
}

export default EmployeeList;
