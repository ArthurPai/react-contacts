import React, {Component} from 'react';

class EmployeeItem extends Component {
  render() {
    return (
      <li className="employee-item">
        {`${this.props.employee.firstName} ${this.props.employee.lastName}`}
      </li>
    );
  }
}

export default EmployeeItem;
