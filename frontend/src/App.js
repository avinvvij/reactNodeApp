import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Dashboard from './component/dashboardComponent/Dashboard';
import Login from './component/loginComponent/Login'


const DashboardPage = () => (
     <Dashboard />
);

const LoginPage = () => (
  <Login />
);

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LoginPage} />     
    </Router>
  );
}

export default App;
