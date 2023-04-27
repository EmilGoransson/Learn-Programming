import React, { useState } from 'react';
import './CreateAccount.css';
import logo from './gamlaloggan.png';
import { Link } from 'react-router-dom';

function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://Learn-programming/Backend/server.js/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      //Redirecta dem till login sidan och kanske displaya logga in typ
      if (response.ok) {
        alert('Account created, please log in');
      } else {
        alert('Log in failed');
      }
    } catch (error) {
      alert('Network error:', error);
    } 
  }; 

  return (
    <div className="container">
      <div className="hej">
        <img src={logo} alt="Logo" className="hej" />
      </div>  
      <div className="form-container">
        <h2 className="heading">Register</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">
            <span className="form-label-text">First name:</span>  
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="ruta"
            />
          </label>
          <label className="form-label">
            <span className="form-label-text">Last name:</span>  
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="ruta"
            />
          </label>
          <label className="form-label">
            <span className="form-label-text">E-mail:</span>  
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="ruta"
            />
          </label>
          <label className="form-label">
            <span className="form-label-text">Password:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="ruta"
            />
          </label>
          <button
            type="submit" 
            className="loginbutton" 
          > 
            Create Account
          </button> 
          <p className="form-text">Already have an account? Click <a href="/login" className="form-link">here</a> to log in.</p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
