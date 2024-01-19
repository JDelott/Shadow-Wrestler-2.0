// LoginSignup.jsx

import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for authentication (login or signup) here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Is Login:', isLogin);
  };

  return (
    <div className="login-signup-container">
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form className="login-signup-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Don\'t have an account? Signup here.' : 'Already have an account? Login here.'}
      </p>
    </div>
  );
};

export default LoginSignup;
