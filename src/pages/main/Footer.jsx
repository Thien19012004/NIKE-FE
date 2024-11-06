import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className='p-4 bg-gray-800 text-white flex flex-col items-center gap-4'
      style={{ boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)' }}
    >
      <p className='text-center text-lg font-semibold'>
        Stay connected with us on social media!
      </p>

      {/* Social Media Icons */}
      <div className='flex gap-6'>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 text-2xl hover:text-blue-700 transition-colors'
        >
          <FaFacebook />
        </a>
        <a
          href='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 text-2xl hover:text-blue-600 transition-colors'
        >
          <FaTwitter />
        </a>
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-pink-500 text-2xl hover:text-pink-700 transition-colors'
        >
          <FaInstagram />
        </a>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 text-2xl hover:text-blue-800 transition-colors'
        >
          <FaLinkedin />
        </a>
      </div>

      <p className='text-center text-sm text-gray-400'>
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
