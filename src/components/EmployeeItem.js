import React, {Component} from 'react';

class EmployeeItem extends Component {
  render() {
    const employee = this.props.employee;
    const name = `${employee.firstName} ${employee.lastName}`;
    return (
      <div className="employee-item" onClick={() => this.props.onSelected(employee.id)}>
        <img src={`images/${employee.pic}`} alt={name} />
        <span>{name}</span>
        <p>{this.props.employee.title}</p>
      </div>
    );
  }
}

export default EmployeeItem;
