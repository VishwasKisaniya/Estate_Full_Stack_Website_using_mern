import React from 'react';

export default function About() {
  return (
    <div className='bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-4'>
      <div className='max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8'>
        <h1 className='text-4xl font-bold mb-6 text-blue-800'>Vishwas Kisaniya Estate</h1>
        <p className='mb-6 text-zinc-700'>
          Vishwas Kisaniya Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
        </p>
        <p className='mb-6 text-zinc-700'>
          Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
        </p>
        <p className='mb-6 text-zinc-700'>
          Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
        </p>
        <div className='flex justify-center'>
          <button className='text-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
