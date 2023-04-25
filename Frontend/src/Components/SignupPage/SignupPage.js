import { parse } from '@fortawesome/fontawesome-svg-core';
import React, { Fragment, useState } from 'react';
import './SignupPage.css';
const SignupPage = (setAuth) => {

  const [inputs, setInputs] = useState({
    
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  })
  const {email, firstName, lastName, password} = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.firstName]
    : e.target.value})
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {email, firstName, lastName, password}
      const response = await fetch("http://localhost:3003/Signup",{ 
      Method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    });

    const parseRespone = await response.json();
    console.log(parseRespone);

    localStorage.setItem("token", parseRespone.token)

    setAuth(true) 
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <Fragment>
      <h1 className='text-center my-5'>Sign up</h1>
      <form onSubmit={onSubmitForm}>
        <input 
        type = "email"
        name = "email"
        placeholder='email'
        value = {email}
        onChange={e => onChange(e)}
        ></input>
        <input 
        type = "firstName"
        name = "firstName"
        placeholder='firstName'
        value = {firstName}
        onChange={e => onChange(e)}
        ></input>
        <input 
        type = "lastName"
        name = "lastName"
        placeholder='lastName'
        value = {lastName}
        onChange={e => onChange(e)}
        ></input>
        <input 
        type = "Password"
        name = "Password"
        placeholder='Password'
        value = {password}
        onChange={e => onChange(e)}
        ></input>
      <button className='btn btn-success btn-black' >Submit</button>
      </form>

    </Fragment>
  );
}

export default SignupPage;
