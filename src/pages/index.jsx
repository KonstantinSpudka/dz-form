import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Login from '../components/Login';

const Page = () => {
  const {pathname} = useLocation()
    return (
    <>
<h1>Login</h1>
<Login />

      {/* {pathname === '/' ? (
        <button >
          <Link to='/singin'>Sign In</Link>
        </button>
      ) : (
        <button >
          <Link to='/login'>Login</Link>
        </button>
      )} 
      <h1>LOGIN</h1> */}
      
    </>
  );
};

export default Page;
