import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className="">
          <div className="rows">
              <div className="cols-1">
                  <h2>Login</h2>
                  <p className='pgh'>Login to your account</p>
                  <hr />
                  <form action="POST" className='form'>
                    <div className="div">
                      <label htmlFor="name">Name: </label>
                      <input type="text" placeholder="John Doe" id="name" autoComplete='' required/>
                    </div>
                    <div className="div">
                      <label htmlFor="email">Email: </label>
                      <input type="email" placeholder="JohnDoe@gmail.com" id="email" autoComplete='email' required/>
                    </div>
                    <div className="div">
                      <label htmlFor="password">Password: </label>
                      <input type="password" placeholder="johndoe14336#" id="password" autoComplete="new-password" required/>
                    </div>
                    <button type="submit">Login</button>
                  </form>
                  <hr />
                  <p>Don't have an account? <span className='span'><Link to="/signup">Sign up</Link></span></p> <br />
                  <p><span className='span'>Forgot password? </span></p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Login
