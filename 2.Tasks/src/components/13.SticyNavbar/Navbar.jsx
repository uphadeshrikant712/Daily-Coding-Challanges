import React, { useEffect, useState } from 'react';
import './nav.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
 
  useEffect(() =>
  {
    const handleScroll = () =>
    {

    
    if (window.scrollY > 0)
      {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () =>
    {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
    <div className={`${sticky ? 'navbar' : 'nav'}`}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="links">
        <h4>home</h4>
        <h4>contact</h4>
        <h4>about</h4>
      </div>
      <div className="button">
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar