import React from 'react'
import "../Frontend/Style/Login.css"
const Login = () => {
    const handleLogin = (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
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
                required
              />
            </div>
            <div className="form-group-login">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group-login">
              <label>
                <input type="checkbox" name="remember" />
                Remember me
              </label>
            </div>
            <div className="form-group-login">
              <button type="submit" className="login-form-button-login">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
export default Login;
  