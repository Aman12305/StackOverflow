import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export default function LeftSidebar({setdisplay}) {
    const handleclick = () =>{
        setdisplay('');
    }
  return (
    <div className="lefttoggler_content">
        <NavLink to='/' className='lefttoggler_links' activeclassname='active' onClick={handleclick}>
            <p>Home</p>
        </NavLink>
        <NavLink to='/about' className='lefttoggler_links' activeclassname='active' onClick={handleclick}>
            <p>About</p>
        </NavLink>
        <NavLink to='/contact' className='lefttoggler_links' activeclassname='active' onClick={handleclick}>
            <p>Contact Us</p>
        </NavLink>
        <div >
            <div><p>PUBLIC</p></div>
            <NavLink to='/questions' className='lefttoggler_links' activeclassname='active' onClick={handleclick}>
                {/* <img src={Globe} alt="Globe" /> */}
                <p> Questions </p>
            </NavLink>
            <NavLink to='/tags' className='lefttoggler_links' activeclassname='active' onClick={handleclick}>
                <p>Tags</p>
            </NavLink>
            <NavLink to='/user/profile' className='lefttoggler_links' activeclassname='active' onClick={handleclick}>
                <p >Users</p>
            </NavLink>
        </div>
    </div>
  )
}
