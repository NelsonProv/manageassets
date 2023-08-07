import React from 'react';
import './LoginForm.css'
import './Dashboard.css'
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Dashboard/>
    </div>
  );
}

export default App;
