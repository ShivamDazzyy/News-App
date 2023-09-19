import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navigation'>
        <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>US News</li>
            <li>Business</li>
            <li>Entertainment</li>
            <li>General</li>
            <li>Health</li>
            <li>Science</li>
            <li>Sports</li>
            <li>Technology</li>
            <li><input type="text" name="" id="search" placeholder='Search Here' /></li>
        </ul>
        </nav>
        
      </div>
    )
  }
}
