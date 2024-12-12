import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './stylespages/Logreg.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile_no, setMobile] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const payload = { email, password, mobile_no, role };
  //   console.log('Submitting login payload:', payload);
  //   try {
  //     const response = await fetch(`https://nykaa-7922.onrender.com/user/login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       const user = data.user;
  //       const token = data.accesstoken;
  //       console.log('login successfully!')

  //       if (token) {
  //         localStorage.setItem('token', token);
  //         console.log('Token stored successfully:', token);

  //         if (role == "buyer" || role == "visitor") {
  //           console.log("role", role);
  //           console.log('going to home');
  //           const buyer = user;
  //           navigate('/', { state: { buyer } });

  //         } else if (role == "seller") {
  //           console.log('going to create product')
  //           // console.log(user)
  //           const seller = user;
  //           navigate('/createproduct', { state: { seller } });

  //         } else {
  //           // console.log(role)
  //           console.log('going to see list of users')
  //           const admin = user;
  //           navigate('/listuser', { state: { admin } });
  //         }
  //       } else {
  //         console.error('No token received from the server');
  //       }

  //     } else {
  //       console.error('Failed to login', response.status);
  //     }
  //   } catch (error) {
  //     console.log(`${error}`)
  //   }

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Payload preparation
    const payload = { email, password, mobile_no, role };
    console.log('Submitting login payload:', payload);
  
    try {
      // Sending POST request
      const response = await fetch(`https://nykaa-7922.onrender.com/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        // Log response details for debugging
        const errorMessage = `Failed to login. Status: ${response.status}`;
        console.error(errorMessage);
        return;
      }
  
      // Parse response
      const { user, accesstoken: token } = await response.json();
  
      if (!token) {
        console.error('No token received from the server.');
        return;
      }
  
      // Store token in localStorage
      localStorage.setItem('token', token);
      console.log('Token stored successfully:', token);
  
      // Navigate based on role
      switch (role) {
        case 'buyer':
          console.log(`Role: ${role}, navigating to home page.`);
          navigate('/', { state: { buyer: user } });
          break;
  
        case 'seller':
          console.log('Role: seller, navigating to create product page.');
          navigate('/createproduct', { state: { seller: user } });
          break;
  
        case 'admin':
          console.log('Role: admin, navigating to list users page.');
          navigate('/listuser', { state: { admin: user } });
          break;
  
        default:
          console.warn('Unknown role, no navigation performed:', role);
      }
    } catch (error) {
      // Log network or other unexpected errors
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
        <div onChange={(e) => setRole(e.target.value)}>
          <div><label>Buyer</label>
            <input type="radio" id="javascript" name="Role" value="buyer" /></div>
          <div><label>Seller</label>
            <input type="radio" id="Seller" name="Role" value="seller" /></div>
          <div>
            <label>Admin</label>
            <input type="radio" id="css" name="Role" value="admin" /></div>
        </div>
        <input type="submit" value="Sign in" />
        <p style={{ cursor: 'pointer' }} onClick={() => navigate('/register')}>Create account</p>
      </form>

    </div>
  )
}

export default Login