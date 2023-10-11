import React, { useState } from 'react';
import logo1 from '../Assests/logo1.png'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the error message when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    if (!formData.email.includes('@')) {
      setErrors({ ...errors, email: 'Invalid email address' });
      return;
    }
    // Password validation (at least 6 characters)
    if (formData.password.length < 6) {
      setErrors({ ...errors, password: 'Password must be at least 6 characters long' });
      return;
    }

    if(formData.email === 'abc@gmail.com' && formData.password ==='123456'){
        return(window.location.href ="/Home");
    }
    alert('Hii');
};
  return (
    <div>
    <div className='headerCG'>
       <img src={logo1} className='logo' alt="" /> 
       <h2>WELCOME TO COIN GUARDIAN</h2>
    </div>
      <div className='main'>
      <h1 className='h'>Login</h1>

       <form onSubmit={handleSubmit}>
         <section className="box">
         <div className="form-group">
          
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder='Enter email'
            onChange={handleInputChange}
            className='text'
            
          />
          <span className="error">{errors.email}</span>
        </div>
        <br/>
        <div className="form-group">
          
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Enter password'
            className='text' style={{marginTop:'8px'}}
          />
          <span className="error">
            {errors.password}
          </span>
        </div>
        <a href="www.google.com"><button className='button1'>
            Login
        </button></a>
        
        </section>
      </form>
      </div>
      <footer className='footer'>
        <p>&copy; 2023 Coin Guardian</p>
      </footer>
    </div>
  );
};

export default Login;