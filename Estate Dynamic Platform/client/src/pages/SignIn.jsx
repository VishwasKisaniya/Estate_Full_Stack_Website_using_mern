import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signinStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';


export default function SignIn() {
  const [formData , setFromData] = useState({});
  const {loading,error} = useSelector((state) => state.user);
  // const [error , setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) =>{
    setFromData({
      ...formData, //spread operator
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      //setLoading(true);  iski place me dispatch use kiya
      dispatch(signinStart()); 
      const res = await fetch('/api/auth/signin', 
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if(data.success == false){
        dispatch(signInFailure(data.message))
        // setLoading(false);
        // setError(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      // setLoading(false);
      // setError(null);
      navigate('/')
    }
    catch(error){
      dispatch(signInFailure(error.message))
      // setLoading(false);
      // setError(error.message);
    }

  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type='email' placeholder='Email' className='border p-3 rounded-lg' id='email'onChange={handleChange}/>
        <input type='password' placeholder='Password' className='border p-3 rounded-lg' id='password'onChange={handleChange}/>

        <button disabled= {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover: opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account? </p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>
            Sign Up
          </span>
        </Link>
      </div>
      {error && <p className=' text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
