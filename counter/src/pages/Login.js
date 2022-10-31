import React from 'react';
import '../pages/Signup.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div id="login-box">
  <div class="left">
    <h1>Log in</h1>
    

    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    
    <div> <input type="checkbox"  /> <span>Remember Me</span></div>
    
    <input type="submit" name="signup_submit" value="Log Me In" />
    <div className='link'><Link to='/forgot'>Forgot Password?</Link></div>
   
  </div>
  
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
   
   
   <button class="social-signin google">Log in with Google</button>
   <p>Don't have an account?</p>
   <Link to='/'> Sign Up</Link>
  </div>
{/*   <div class="or">OR</div> */}
</div>
  
  )
}

export default Login()