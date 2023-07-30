import React, { useState } from 'react';
import '../Frontend/Style/Login.css';
import usersData from '../Frontend/LoginAccounts.json'; // Import the JSON data
import {Link} from 'react-router-dom'
import AdminDashboard from './AdminDashboard';
const Login = ({loginStatus,setLoginStatus}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  
  const handleLogin = (event) => {
    event.preventDefault();

    // Find the user based on entered credentials
    const user = usersData.users.find(
      (u) => u.username === username && u.password === password
    );
 
    if (user) {
     
     setLoginStatus(true);
      
      // Perform the desired action after successful login, e.g., redirect to dashboard
    } else {
      alert('Invalid credentials. Please try again.');
     
    }
  };

  return (
    <>

    { !loginStatus && 
    <div className="login-page-login">
      <div className="login-box-login">
        <div className="illustration-wrapper-login">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login" />
        </div>
        <form className="login-form-login" onSubmit={handleLogin}>
          <p className="form-title-login">Welcome Admin</p>
          <p>Login to the Dashboard</p>
          <div className="form-group-login">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group-login">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group-login">
            <button type="submit" className="login-form-button-login">
              LOGIN
            </button>
            
          </div>
        </form>
        
      </div>
    </div>
}
    {loginStatus && <AdminDashboard/>}
    </>
  );
};

export default Login;
