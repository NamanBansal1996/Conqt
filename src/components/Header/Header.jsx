import React from 'react'
import './header.css'
// import {logo } from './image/actions';
export default function Header() {
  return (
    <div className='Navigation-Bar'>
      <div className='Logo'>
        {/* <img src={logo} alt='logo'/> */}
        <img src='' alt='logo'/>
    
      </div>
      <div className='SearchBar'>
        <input type='text'/>
      </div>
      <div className='Content'>
        <div className='Cart'>
            <img src='' alt='cart'/>
        </div>
        <div className='profile'>
            <img src='' alt='profile'/>
        </div>
      </div>
    </div>
  )
}
