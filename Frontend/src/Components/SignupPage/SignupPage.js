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

  const onChange = e => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {email, firstName, lastName, password}
      console.log(body)
      const response = await fetch("http://localhost:3003/authentication/Signup",{ 
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(body)
      }
      );
      console.log(response)


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
        placeholder='Email'
        onChange={e => onChange(e)}
        value = {email}
        className='form-control my-3'
        ></input>
        <input 
        type = "firstName"
        name = "firstName"
        placeholder='First Name'
        onChange={e => onChange(e)}
        value = {firstName}
        className='form-control my-3'
        ></input>
        <input 
        type = "lastName"
        name = "lastName"
        placeholder='Last Name'
        onChange={e => onChange(e)}
        value = {lastName}
        className='form-control my-3'
        ></input>
        <input 
        type = "password"
        name = "password"
        placeholder='Password'
        onChange={e => onChange(e)}
        value = {password}
        className='form-control my-3'
        ></input>
      <button type="submit" className='btn btn-success btn-black' >Submit</button>
      </form>

    </Fragment>
  );
}

export default SignupPage;
