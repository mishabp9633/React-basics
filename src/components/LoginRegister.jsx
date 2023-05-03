import React, { useState } from 'react';
import axios from 'axios';
import './LoginRegister.css';
import closeIcon from '../../src/assets/close.png'
import { Link } from 'react-router-dom';


const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const baseUrl  = "http://localhost:4001"

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (isRegistering) {
        // Make a request to the register API
        response = await axios.post(`${baseUrl}/user/signup`, { username, password, name });
        console.log('Registration successful:', response.data);
      } else {
        // Make a request to the login API
        response = await axios.post(`${baseUrl}/auth/user-signin`, { username, password });
        console.log('Login successful:', response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
       <Link to="/"> 
       <img className='closeIcon' src={closeIcon} alt=""></img>
      </Link>
        <h1>{isRegistering ? 'Register' : 'Login'}</h1>
        {isRegistering && (
          <>
            <input placeholder='name' type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
          </>
        )}
        <input type="text" placeholder='username' id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <input type="password" placeholder='password' id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button className='logbtn' type="submit"><Link to="/dashboard">{isRegistering ? 'Register' : 'Login'} </Link> </button>
        <p className='logptag'>{isRegistering ? 'Already have an account?' : 'Don\'t have an account?' } <span className='logspan' onClick={() => setIsRegistering(!isRegistering)}>{isRegistering ? 'Login' : 'Register'}</span></p>
      </form>
    </div>
  );
}

export default Form;

