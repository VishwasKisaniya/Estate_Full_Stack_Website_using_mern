import React from 'react';

export default function About() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Introduction Section */}
      <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 text-white text-center'>
        <h1 className='text-4xl font-bold mb-4'>About Us</h1>
        <p className='text-xl mb-6'>Learn more about our journey, mission, and the amazing team behind our success.</p>
      </div>

      {/* Our Mission */}
      <div className='max-w-6xl mx-auto p-6'>
        <h2 className='text-3xl font-semibold text-gray-800 text-center my-8'>Our Mission</h2>
        <p className='text-gray-600 text-lg text-center mb-8'>
          Our mission is to deliver high-quality solutions that bring value to our users and make their lives easier. We are committed to innovation, excellence, and integrity in everything we do.
        </p>
      </div>

      {/* Team Members Section
      <div className='max-w-6xl mx-auto p-6'>
        <h2 className='text-3xl font-semibold text-gray-800 text-center my-8'>Meet the Team</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white p-5 rounded-lg shadow-md text-center'>
            <img src='https://via.placeholder.com/150' alt='Team Member' className='rounded-full mx-auto mb-4 w-24 h-24 object-cover'/>
            <h3 className='text-2xl font-semibold mb-2'>John Doe</h3>
            <p className='text-gray-600'>CEO & Founder</p>
          </div>
          <div className='bg-white p-5 rounded-lg shadow-md text-center'>
            <img src='https://via.placeholder.com/150' alt='Team Member' className='rounded-full mx-auto mb-4 w-24 h-24 object-cover'/>
            <h3 className='text-2xl font-semibold mb-2'>Jane Smith</h3>
            <p className='text-gray-600'>Chief Technology Officer</p>
          </div>
          <div className='bg-white p-5 rounded-lg shadow-md text-center'>
            <img src='https://via.placeholder.com/150' alt='Team Member' className='rounded-full mx-auto mb-4 w-24 h-24 object-cover'/>
            <h3 className='text-2xl font-semibold mb-2'>Alice Johnson</h3>
            <p className='text-gray-600'>Head of Marketing</p>
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className='bg-slate-300 p-10 text-center'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Join Our Team!</h2>
        <p className='text-gray-600 mb-6'>
          We are always looking for talented and passionate individuals to join our team. If you are interested in working with us, please reach out!
        </p>
        <button className='bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300'>
          Contact Us
        </button>
      </div>
    </div>
  );
}
