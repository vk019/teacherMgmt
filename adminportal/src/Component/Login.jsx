import React from 'react';
import '../css/LoginStyle.css'

function Login() {
  return (
    <>
      <div class="main_div">
        <div class="box">
        <h1>Login Form</h1>
        <form action="">
            <div class="inputBox">
                <input type="text" name="username" autocomplete="off" required/>
                <label htmlfor="username">username</label>
            </div>
            <div class="inputBox">

                <input type="password" name="password" autocomplete="off" required/>
                <label for="">password</label>

                <input type="submit" name="" value="login"/>
            </div>

        </form>
    </div>
    </div>
    </>
  )
}

export default Login
