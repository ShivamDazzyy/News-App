import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navigation'>
      <nav>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          {/* <li>US News</li>
          <li>Business</li>
          <li>Entertainment</li>
          <li>General</li>
          <li>Health</li>
          <li>Science</li>
          <li>Sports</li>
          <li>Technology</li> */}
          <li>
            <input type="text" name="" id="search" placeholder='Search Here' />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
