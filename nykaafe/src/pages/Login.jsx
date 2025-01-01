import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './stylespages/Logreg.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile_no, setMobile] = useState('');
  const [role, setRole] = useState('buyer');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password, mobile_no, role };
    console.log('Submitting login payload:', payload);

    try {
      const response = await fetch(`https://nykaa-7922.onrender.com/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorMessage = `Failed to login. Status: ${response.status}`;
        console.error(errorMessage);
        return;
      }

      const { user, accesstoken: token } = await response.json();

      if (!token) {
        console.error('No token received from the server.');
        return;
      }

      localStorage.setItem('token', token);
      console.log('Token stored successfully:', token);

      if (role) {
        console.log(`Role: ${role}, navigating to home page.`);
        navigate('/', { state: { buyer: user } });
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
    }
  };



  return (
    <div className='register'>
      <h1>LOG IN</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' required
          onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="mobile" placeholder='Contact' required
          onChange={(e) => setMobile(e.target.value)} /> <br />
        <input type="password" placeholder='Password' required visiable
          onChange={(e) => setPassword(e.target.value)} /> <br />

        <input type="submit" value="Sign in" />
        <p style={{ cursor: 'pointer' }} onClick={() => navigate('/register')}>Create account</p>
      </form>

    </div>
  )
}

export default Login