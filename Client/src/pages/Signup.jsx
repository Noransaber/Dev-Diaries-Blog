/* eslint-disable no-unused-vars */
import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          {/* {Left side} */}
          <Link
            to='/'
            className='
          text-4xl
          font-bold 
          dark:text-white'
          >
            <span
              className='px-2 py-1 bg-gradient-to-r 
            from-indigo-500
            via-purple-500
            to-pink-500 rounded-lg
             text-white'
            >
              Dev
            </span>
            Diaries
          </Link>
          <p className='text-sm mt-5'>A place for developers to share and grow</p>
        </div>
        <div className='flex-1'>
          {/* Right side */}
          <div className=''>
            <form className='flex flex-col gap-4'>
              <div>
                <Label value='Your Name' />
                <TextInput type='text' placeholder='Username' id='username' />
              </div>

              <div>
                <Label value='Your Email' />
                <TextInput type='email' placeholder='Email' id='email' />
              </div>

              <div>
                <Label value='Your Password' />
                <TextInput type='password' placeholder='Password' id='password' />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit'>
                Sign Up
              </Button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account</span>
              <Link to='/sign-in' className='text-blue-500'>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
