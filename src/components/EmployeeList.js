import React, {Component} from 'react';
import EmployeeItem from "./EmployeeItem";

class EmployeeList extends Component {
  render() {
    return (
      <ul className="employee-list">
        <EmployeeItem />
        <EmployeeItem />
      </ul>
    );
  }
}

export default EmployeeList;
