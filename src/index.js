import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import EmployeeService from "./EmployeeService";
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

const employeeService = EmployeeService();

ReactDOM.render(<App services={employeeService} />, document.getElementById('root'));
registerServiceWorker();
