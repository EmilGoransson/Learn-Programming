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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <img src={logo} alt="Logo"  className='hej' />
      </div>  
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10rem', backgroundColor: '#f0f0f0' }}>
        <h2 style={{ alignSelf: 'flex-start' , fontFamily: 'Lora', fontWeight: 'bold', fontSize: '50px'}}>Register</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ marginBottom: '0.5rem', fontFamily: 'Lora'}}>First name:</span>  
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              style={{ width: '100%' }}
              className='ruta' 
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ marginBottom: '0.5rem', fontFamily: 'Lora'}}>Last name:</span>  
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              style={{ width: '100%' }}
              className='ruta' 
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ marginBottom: '0.5rem', fontFamily: 'Lora'}}>E-mail:</span>  
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: '100%' }}
              className='ruta' 
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ marginBottom: '0.5rem', fontFamily: 'Lora' }}>Password:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: '100%' }}
              className='ruta' 
              />
             </label>
          <button
            type="submit" 
            className='loginbutton' 
            > 
            Create Account
          </button> 
          <p style={{ marginTop: '1rem', alignSelf: 'center', fontFamily: 'Lora' }}>Already have an account? Click <a href="/login" style={{ color: '#0077FF', textDecoration: 'underline' }}>here</a> to log in.</p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
