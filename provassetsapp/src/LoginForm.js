import React from 'react';
import './LoginForm.css'

function LoginForm() {
  return (
      <div className='loginForm'>
         <div className="loginHeader">
        <h1>PSS</h1>
        <p>Asset Manangement System</p>
      </div>
      <div className="loginBody">
        <form action="">
          <div className="loginInputsContainer">
            <label for="">Username</label>
            <input placeholder="username" type="text" />
          </div>
          <div className="loginInputsContainer">
            <label for="">Password</label>
            <input placeholder="password" type="password" />
          </div>
          <div className="loginButtonContainer">
            <button>Login</button>
          </div>
        </form>
      </div>  

    </div>
  )
}

export default LoginForm;