import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [mobile_no, setMobile] = useState(null);

    const navigate = useNavigate()

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const payload = { name, email, password, role, mobile_no };
    //     console.log(name, email, password, role, mobile_no);
    //     try {
    //         const response = await fetch(`https://nykaa-7922.onrender.com/user/register`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(payload),
    //         });

    //         if (response.ok) {
    //             navigate('/login');
    //         } else {
    //             console.error('Failed to register', response.status);
    //         }
    //     } catch (error) {
    //         console.log(`${error}`)
    //     }

    // }
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
            // Navigate to login if registration succeeds
            alert('Registration successful! Redirecting to login page.');
            navigate('/login');
          } else {
            // Handle non-200 responses
            const errorData = await response.json();
            if (errorData.message && errorData.message.includes('already registered')) {
              alert('This user is already registered. Please log in.');
            } else {
              alert(`Registration failed: ${errorData.message || 'Unknown error'}`);
            }
            console.error('Failed to register:', errorData);
          }
        } catch (error) {
          // Handle network or unexpected errors
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

                <div onChange={(e) => setRole(e.target.value)}>
                    <div>  <label>Buyer</label>
                    <input type="radio" id="javascript" name="Role" value="buyer" /></div>
                    <div>  <label>Seller</label>
                    <input type="radio" id="Seller" name="Role" value="seller" /></div>
                    <div><label>Admin</label>
                    <input type="radio" id="css" name="Role" value="admin" /> </div>
                </div>
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