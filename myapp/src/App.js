import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Employee from './components/homepage.js';
import EmployeeInfo from './components/employeeInfo.js';

function App() {
  return (
  <Provider store={store}>
    <Router>
    <Route exact path="/" component={Employee} /> 
    <Route exact path="/emp/:id?" component={EmployeeInfo} />
    </Router>
  </Provider>
  );
}

export default App;
