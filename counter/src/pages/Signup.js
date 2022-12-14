import React from 'react'
import '../pages/Signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
 
    <div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
    
    <input type="text" name="username" placeholder="Username" />
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password2" placeholder="Retype password" />
    
    <input type="submit" name="signup_submit" value="Sign me up" />
  </div>
  
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
   <p>Already have an account?</p>
   <button class="social-signin blue"><Link to='/login'> Log in</Link></button>
    <button class="social-signin google">Log in with Google</button>
  </div>
  <div class="or">OR</div>
</div>
  )
}

export default Signup