import React from 'react'
import '../css/LogReviewStyle.css'
import teacher from './Images/teacher.jpeg'

function LoginReview() {
    
  return (
    <>
    <div className="container">
  <div className="image-wapper" style={{backgroundImage:`url(${teacher})`}}>
    <h1>Teacher Portal</h1>
  </div>
  <div className="form-wapper">
    <div className="form-header">
      <h2>Teacher Login</h2>
      <p>Welcome back! Please login to your account with valid credentials.</p>
    </div>
    <div className="form-body">
      <form>
        <div className="input-wrapper">
          <label htmlfor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="abc@example.com"/>
        </div>
        <div className="input-wrapper">
          <label htmlfor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="**********"/><span className="icon show-pass"><i className="fi-rr-eye"></i></span>
        </div>
        <div className="input-wrapper more-action">
          <label>
            <input id="remember-me" type="checkbox" name="remember_me"/>Remember Me
          </label><a className="form-link" href="./auth-forgot-password.html">Forgot Password?</a>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
    {/*<div className="form-footer">
      <p>Don't have an account yet? <a className="form-link" href="./auth-register.html">Sign Up</a></p>
  </div>*/}
  </div>
</div>
      
    </>
  )
}

export default LoginReview
