import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className='sign-up'>
      <div className="">
          <div className="rows">
              <div className="cols-1">
                  <h2>Sign Up</h2>
                  <p className='pgh'>Sign up for a new account</p>
                  <hr />
                  <form onSubmit={handleSubmit} className='form'>
                    <div className="div">
                      <label htmlFor="name">Name: </label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                      />
                    </div>
                    <div className="div">
                      <label htmlFor="email">Email: </label>
                      <input 
                        type="email" 
                        placeholder="JohnDoe@gmail.com" 
                        id="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        autoComplete='email' 
                        required
                      />
                    </div>
                    <div className="div">
                      <label htmlFor="password">Password: </label>
                      <input 
                        type="password" 
                        placeholder="johndoe14336#" 
                        id="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        autoComplete="new-password" 
                        required
                      />
                    </div>
                    <div className="div">
                      <label htmlFor="confirmPassword">Confirm Password:  </label>
                      <input 
                        type="password" 
                        placeholder="johndoe14336#" 
                        id="confirmPassword" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        autoComplete="new-password" 
                        required
                      />
                      {!passwordsMatch && <p className="warning">Passwords do not match!</p>}
                    </div>
                    <button type="submit">Sign Up</button>
                  </form>
                  <hr />
                  <p>Already have an account? <span className='span'><Link to="/login">Log in</Link></span></p>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Signup;
