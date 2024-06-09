import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Welcome Banner */}
      <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 text-white text-center'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Vishwas Kisaniya's Site</h1>
        <p className='text-xl mb-6'>Explore the amazing features we have to offer.</p>
        <Link to='/about'>
          <button className='bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition duration-300'>
            Learn More
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className='max-w-6xl mx-auto p-6'>
        <h2 className='text-3xl font-semibold text-gray-800 text-center my-8'>Features</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white p-5 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold mb-3'>Feature 1</h3>
            <p className='text-gray-600'>Description of feature 1 with relevant information that highlights its benefits and usage.</p>
          </div>
          <div className='bg-white p-5 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold mb-3'>Feature 2</h3>
            <p className='text-gray-600'>Description of feature 2 with relevant information that highlights its benefits and usage.</p>
          </div>
          <div className='bg-white p-5 rounded-lg shadow-md'>
            <h3 className='text-2xl font-semibold mb-3'>Feature 3</h3>
            <p className='text-gray-600'>Description of feature 3 with relevant information that highlights its benefits and usage.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='bg-slate-300 p-10 text-center'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Get Started Today!</h2>
        <Link to='/sign-up'>
          <button className='bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300'>
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
}
