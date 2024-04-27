import { Link } from "react-router-dom";
import React from "react";

export const Login = () => {
  return (
    <div>
      <div className='m-8 box-border flex justify-center border-1 border-neutral-400'>
        <form className='bg-white shadow-md rounded px-8 pt-6 w-2/5'>
          <div className='mb-4'>
            <h1 className='font-bold text-center pb-6 text-3xl mb-4'>Login</h1>
            <div>
              <p className='m-2 font-bold text-3xl text-center'>Welcome back to ECOMMERCE</p>
              <p className='m-2 text-center font-bold pb-4'>The next gen business marketplace</p>
            </div>

            <label className='block text-md mb-2 py-1' for='username'>
              Email
            </label>
            <input
              class='shadow appearance-none border rounded mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Enter'
            ></input>

            <label className='block text-md  mb-2 py-1' for='username'>
              Password
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 mb-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Enter'
            ></input>

            <button className='bg-black text-md text-white h-12 rounded py-3 mb-8 w-auto min-w-full flex flex-col items-center'>
              Login
            </button>
            <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
            <div className='mb-8 justify-center text-center align-middle flex '>
              <p className="text-center pr-2">Have an account? </p>
              <Link to='/'> LOGIN</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
