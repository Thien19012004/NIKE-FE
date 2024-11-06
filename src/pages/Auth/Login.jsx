import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate(); // Khởi tạo navigate bên trong component
  
  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://nike-be.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Login failed!');
      const result = await response.json();
      alert(`Welcome, ${result.user.username}!`);
      console.log(result.token);
      localStorage.setItem('token', result.token);
      navigate("/"); // Điều hướng người dùng tới trang /home sau khi đăng nhập thành công
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
      <h2 className='text-3xl font-bold mb-6'>Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-md'
      >
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

        <button
          type='submit'
          className='w-full bg-blue-500 py-2 rounded text-white font-bold hover:bg-blue-600'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
