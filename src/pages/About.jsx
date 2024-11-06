import React from 'react';

const About = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6'>
      <h1 className='text-4xl font-bold mb-4'>About Us</h1>
      <p className='text-lg max-w-2xl text-center mb-6'>
        We are committed to delivering high-quality products and exceptional
        service. Our team is passionate about creating solutions that meet your
        needs and exceed your expectations. Join us on our journey as we
        continue to innovate and grow!
      </p>
      <div className='flex gap-6 mt-4'>
        <div className='p-4 bg-gray-800 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-2'>Our Mission</h2>
          <p className='text-gray-300'>
            To innovate and deliver outstanding products for our customers
            around the globe.
          </p>
        </div>
        <div className='p-4 bg-gray-800 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-2'>Our Values</h2>
          <p className='text-gray-300'>
            Integrity, passion, and a commitment to excellence drive us in
            everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
