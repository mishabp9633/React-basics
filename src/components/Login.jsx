import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('') 
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(pass);
  }
  return (
    <div>
    <form action="" onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id='email' name='email'/>
        <label for="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id='password' name='password'/>
        <button>Log In</button>
    </form>
    <button>Don't have an account? Register here</button>
    </div>
  )
}

export default Login


