import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_phone: '',
    user_password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      user_lastname: 'ni',
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };

    try {
      const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', data);
      if (response.status === 200) {
        toast.success('Sign Up Successful!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Sign Up Failed!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 p-8 bg-gradient-to-r from-orange-400 to-orange-600 text-white flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform!</h1>
          <p className="text-lg text-center">
            Join us to experience the best services. Sign up now and be a part of our community.
          </p>
        </div>
        <div className="w-1/2 p-8 bg-gray-200">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_firstname"
              placeholder="Name"
              value={formData.user_firstname}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone"
              value={formData.user_phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              name="user_password"
              placeholder="Password"
              value={formData.user_password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button type="submit" className="w-full px-4 py-3 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-700 transition-all duration-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
