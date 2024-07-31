import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    user_email: '',
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
    try {
      const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData);
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        toast.success('Login Successful!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login Failed! Please check your email and password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 p-8 bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg text-center">
            Log in to access your account and continue enjoying our services.
          </p>
        </div>
        <div className="w-1/2 p-8 bg-gray-200">
          <h2 className="text-4xl text-blue-500 font-bold text-center mb-6">Log In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              type="password"
              name="user_password"
              placeholder="Password"
              value={formData.user_password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button type="submit" className="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Log In
            </button>
            <p>Don't have an account? <Link to='/signup' className="text-blue-500">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
