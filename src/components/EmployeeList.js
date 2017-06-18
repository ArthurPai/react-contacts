import React, {Component} from 'react';
import EmployeeItem from "./EmployeeItem";

class EmployeeList extends Component {
  render() {
    return (
      <div className="employee-list">
        {this.props.employees.map(employee => (
          <EmployeeItem key={employee.id} employee={employee} onSelected={this.props.onSelected} />
        ))}
      </div>
    );
  }
}

export default EmployeeList;
