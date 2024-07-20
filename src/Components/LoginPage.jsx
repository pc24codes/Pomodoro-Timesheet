import React from 'react';

export default function LoginPage()
{
    return(
    <main>
    <div className="navbar">
      <p><a href="#">Home</a></p>
      <p><a href="#">About Us</a></p>
      <p><a href="#">Contact</a></p>
      <div id="profile-icon"></div>
    </div>
    <h3>Welcome to Pomodoro Timesheets!</h3>
    <div className="sign-in-box">
      <div id="sign-in-form">
        <p>Sign in using your credentials:</p>
        <label for="username-ele">User:</label><br />
        <input id="username-ele" type="text" /><br />
        <br />
        <label for="password-ele">Password:</label><br />
        <input id="password-ele" type="password" /><br />
        <br />
        <button id="sign-in">Sign in</button>
        <a href="#" id="forgot-ele">Forgot Password?</a>
      </div>
    </div>
  </main>
        
    )

}