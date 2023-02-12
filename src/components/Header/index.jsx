import React from 'react'
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const {pathname} = useLocation()
    return (
    <>

      {pathname === '/' ? (
        <button >
          <Link to='/singin'>Sign In</Link>
        </button>
      ) : (
        <button >
          <Link to='/'>Login</Link>
        </button>
      )} 
      <h1>LOGIN</h1>
      
    </>
  );
}

export default Header;
