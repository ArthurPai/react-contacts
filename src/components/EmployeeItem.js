import React, {Component} from 'react';

class EmployeeItem extends Component {
  render() {
    const name = `${this.props.employee.firstName} ${this.props.employee.lastName}`;
    return (
      <div className="employee-item">
        <img src={`images/${this.props.employee.pic}`} alt={name} />
        <span>{name}</span>
        <p>{this.props.employee.title}</p>
      </div>
    );
  }
}

export default EmployeeItem;
