import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase from './firebase.js';
import EmployeeService from "./EmployeeService";
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

const employeeService = EmployeeService();

ReactDOM.render(<App services={employeeService} firebase={firebase} />, document.getElementById('root'));
registerServiceWorker();
