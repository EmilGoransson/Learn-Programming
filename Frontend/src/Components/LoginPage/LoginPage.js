import React, { useState } from 'react';
import './LoginPage.css';
import logo from './image.png';

function LoginPage() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // Handle successful authentication
    } catch (error) {
      console.error('Login failed', error);
      // Handle login error
    } 
  }; 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
      <img src={logo} alt="Logo" style={{ height: '4rem', marginRight: '1rem' }} />
    </div>  
    <div style={{ border: '1px solid gray', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '2rem', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ alignSelf: 'flex-start' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ marginBottom: '0.5rem' }}>E-mail:</span>  
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ width: '100%' }}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ marginBottom: '0.5rem' }}>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ width: '100%' }}
          />
        </label>
        <button
          type="submit" 
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0077FF',
            color: 'white',
            borderRadius: '0.25rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
        <p style={{ marginTop: '1rem', alignSelf: 'center' }}>Don’t have an account? Click <a href="/Signup" style={{ color: '#0077FF', textDecoration: 'underline' }}>here</a> to get one.</p>
      </form>
    </div>
  </div>
);
}

export default LoginPage;

