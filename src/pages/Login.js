import React, { useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../Context/StateContext'; 
import { FaArrowLeft } from 'react-icons/fa'; 

const Login = () => {

    const {setUser} = useAppContext();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'UserName is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoginMessage('');

    if (validate()) {
      setIsSubmitting(true);
      try {
        // Make the login request
        const response = await axios.post('http://localhost:8080/auth/login', {
          username: formData.username,
          password: formData.password
        });

        setUser(response.data.user);

        
        setLoginMessage('Login successful!');
        setIsSubmitting(false);
        // Redirect user or perform further actions here after a successful login
      } catch (error) {
        setLoginMessage('Login failed. Please check your credentials and try again.');
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex bg-gold items-center justify-center h-screen w-screen px-5 sm:px-0">
       <a href="/" className="absolute top-4 left-4 flex items-center text-gray-700 hover:text-gray-900">
                <FaArrowLeft className="mr-2" /> {/* Back arrow icon */}
                <span className="text-sm font-semibold">Back to Home</span>
        </a>
      <form onSubmit={handleSubmit} className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <img
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          src={`${process.env.PUBLIC_URL}/logo.webp`}
          alt="logo"
        />
        <div className="w-full p-8 lg:w-1/2">
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">UserName</label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Password</label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            <a
              href="/"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button
              className="bg-gray-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            {loginMessage && <p className={`text-center mt-4 ${loginMessage === 'Login successful!' ? 'text-green-500' : 'text-red-500'}`}>{loginMessage}</p>}
          </div>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
