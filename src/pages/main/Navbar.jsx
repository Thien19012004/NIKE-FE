import { useState, useEffect } from 'react';
import { checkUserValid } from '../../utils/useUser';
import nikelogo from './../../assets/nikelogo.svg';
import './../../index.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(checkUserValid());
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập mỗi khi component được render
    setIsLoggedIn(checkUserValid());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
    setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập
    navigate('/login'); // Điều hướng người dùng tới trang đăng nhập
  };

  return (
    <nav className='flex items-center justify-between px-5 bg-gray-900 text-white'>
      <img
        src={nikelogo}
        alt='logo'
        className='invert'
      />
      <ul className='navbar-items hidden md:flex items-center li-none gap-7 text-lg font-bold cursor-pointer'>
        <li className='relative'>
          <Link to='/' className='nav-item'>
            Home
          </Link>
        </li>
        <li className='relative'>
          <Link to='/shopping' className='nav-item'>
            Collections
          </Link>
        </li>
        <li className='relative'>
          <Link to='/contact' className='nav-item'>
            Contact
          </Link>
        </li>
        <li className='relative'>
          <Link to='/about' className='nav-item'>
            About
          </Link>
        </li>
      </ul>
      
      {checkUserValid() === false ? (
        <ul className='hidden md:flex items-center gap-5 text-lg font-bold cursor-pointer'>
          <li>Cart</li>
          <li>
            <button onClick={handleLogout} className='nav-item'>
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className='hidden md:flex items-center gap-5 text-lg font-bold cursor-pointer'>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
