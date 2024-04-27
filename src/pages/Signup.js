import { Link } from 'react-router-dom';
import React from 'react';

export const Signup = () => {
  return (
    <div>
      <div className='m-8 box-border flex justify-center border-1 border-neutral-400'>
        <form className='bg-white shadow-md rounded px-8 pt-6 w-1/3 h-3/4'>
          <div className='mb-4'>
            <p className='text-center font-bold text-3xl mb-4 p-5'>Create your account</p>
            <label className='block text-md mb-2' for='username'>
              Name
            </label>
            <input
              class='shadow appearance-none border rounded mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Enter'
            ></input>

            <label className='block text-md mb-2 py-1' for='username'>
              Email
            </label>
            <input
              class='shadow appearance-none border rounded mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Enter'
            ></input>

            <label className='block text-md mb-2 py-1' for='username'>
              Password
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 mb-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Enter'
            ></input>

            <button className='bg-black text-md text-white h-12 rounded py-3 mb-8 w-auto min-w-full flex flex-col items-center'>
              CREATE ACCOUNT
            </button>
            <div className='mb-8 justify-center text-center align-middle flex pb-10'>
              <p className='text-center pr-2'>Have an account? </p>
              <Link to='/'> LOGIN</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
