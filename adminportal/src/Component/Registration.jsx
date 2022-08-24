import React from 'react'
{/*import signpic from './Images/signpic.svg'*/}

function Registration() {
  return (
    <>
    <section className='signup'>
        <div className="container mt-5">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className='form-title'>
                    Sign Up
                    </h2>
                    <form className='register-form' id='register-form'>
                        <div className="form-group">
                            <label htmlFor="name">
                            <i class="zmdi zmdi-account material-icons-name"></i>
                            </label>
                            <input type="text" name="uname" id="uname" autoComplete='off' placeholder="Your Username" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete='off' placeholder="Your password" />
                        </div>

                        <div className='form-group form-button'>
                            <input type="submit" name="signin" id="signin" className='form-submit' value="Sign in" />
                        </div>

                    </form>
                    <div className="signup-image">
                        <figure>
                            <img src="" alt="registration" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Registration
