import React, {Component} from 'react';

class EmployeeDetails extends Component {
  render() {
    const employee = this.props.employee;

    if (employee === null) {
      return (
        <div className="employee-details"></div>
      );
    }

    const name = `${employee.firstName} ${employee.lastName}`;

    return (
      <div className="employee-detail">
        <div className="employee-detail-header cell">
          <img src={`images/${employee.pic}`} alt={name}/>
          <h1>{name}</h1>
          <p>{employee.title}</p>
        </div>
        <div className="employee-detail-office-phone cell">
          <a href={`tel:${employee.officePhone}`}>
            <p>Call Office</p>
            <p>{employee.officePhone}</p>
          </a>
        </div>
        <div className="employee-detail-mobile-phone cell">
          <a href={`tel:${employee.mobilePhone}`}>
            <p>Call Mobile</p>
            <p>{employee.mobilePhone}</p>
          </a>
        </div>
        <div className="employee-detail-sms cell">
          <a href={`sms:${employee.mobilePhone}`}>
            <p>SMS</p>
            <p>{employee.mobilePhone}</p>
          </a>
        </div>
        <div className="employee-detail-email cell">
          <a href={`mailto:${employee.email}`}>
            <span>Email</span>
            <p>{employee.email}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default EmployeeDetails;
