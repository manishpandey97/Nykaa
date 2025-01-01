import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [mobile_no, setMobile] = useState(null);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, email, password, role, mobile_no };
    console.log('Registration payload:', payload);

    try {
      const response = await fetch(`https://nykaa-7922.onrender.com/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert('Registration successful! Redirecting to login page.');
        navigate('/login');
      } else {
        const errorData = await response.json();
        if (errorData.message && errorData.message.includes('already registered')) {
          alert('This user is already registered. Please log in.');
        } else {
          alert(`Registration failed: ${errorData.message || 'Unknown error'}`);
        }
        console.error('Failed to register:', errorData);
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className='register'>
      <h1>CREATE ACCOUNT</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' required
          onChange={(e) => setName(e.target.value)} /> <br />
        <input type="email" placeholder='Email unique' required
          onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="mobile" placeholder='Contact unique' required
          onChange={(e) => setMobile(e.target.value)} /> <br />
        <input type="password" placeholder='Password' required
          onChange={(e) => setPassword(e.target.value)} /> <br />
        <br />
        <input type="submit" value="Create" />
        <p>Already register?
          <span style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => navigate('/login')}>  LOGIN</span></p>
      </form>
    </div>
  )
}

export default Register