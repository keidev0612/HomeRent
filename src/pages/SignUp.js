import React, { useState } from "react";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ fullName: '', email: '', password: '' });

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!fullName) {
      valid = false;
      errors.fullName = 'Full name is required';
    }

    if (!email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = 'Email address is invalid';
    }

    if (!password) {
      valid = false;
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      valid = false;
      errors.password = 'Password must be at least 8 characters';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Handle successful sign up
      console.log("Form Submitted");
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="bg-white shadow-md rounded w-96 px-8 pt-6 pb-8 mt-20 mb-20">
        <div className="text-center text-2xl font-bold text-blue-500">SignUp</div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.fullName ? 'border-red-500' : ''}`}
            id="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>
        <div className="flex items-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center font-bold text-sm text-gray-500 mt-3">
          Already have an account? <Link to="/signin" className="text-blue-500 hover:text-blue-800">SignIn</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
