import React, { useState } from 'react';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting form with values: ${username}, ${email}, ${password}`);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input placeholder="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>
        Email
        <input placeholder="youremail@gmail.com" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password
        <input placeholder="**********" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form> 
<button>Allready have an account? Login here</button>
</div>
  );
}

export default RegisterForm;
