import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Registration failed!');
      const result = await response.json();
      alert(`Registration successful! Welcome, ${result.user.username}`);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  const password = watch('password', '');

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
      <h2 className='text-3xl font-bold mb-6'>Register</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-md'
      >
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Username</label>
          <input
            {...register('username', { required: 'Username is required' })}
            className='w-full p-2 rounded bg-gray-700'
          />
          {errors.username && (
            <p className='text-red-500'>{errors.username.message}</p>
          )}
        </div>

        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Email</label>
          <input
            {...register('email', { required: 'Email is required' })}
            type='email'
            className='w-full p-2 rounded bg-gray-700'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>

        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Password</label>
          <input
            {...register('password', { required: 'Password is required' })}
            type='password'
            className='w-full p-2 rounded bg-gray-700'
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>

        <div className='mb-6'>
          <label className='block mb-1 font-semibold'>Confirm Password</label>
          <input
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
            type='password'
            className='w-full p-2 rounded bg-gray-700'
          />
          {errors.confirmPassword && (
            <p className='text-red-500'>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-green-500 py-2 rounded text-white font-bold hover:bg-green-600'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
