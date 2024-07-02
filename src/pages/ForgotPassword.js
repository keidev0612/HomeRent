import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ email: '' });
  const [message, setMessage] = useState('');

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = 'Email address is invalid';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Your API call to trigger the forgot password email goes here
      // For now, we simulate a successful request:
      try {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setMessage('If an account with that email exists, you will receive a password reset email shortly.');
      } catch (error) {
        setMessage('An error occurred, please try again.');
      }
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="bg-white shadow-md rounded w-96 px-8 pt-6 pb-8 mt-20 mb-20">
        <h2 className="text-blue-500 text-center text-xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reset Password
            </button>
          </div>
          {message && (
            <p className="text-green-500 text-xs italic mt-4">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
