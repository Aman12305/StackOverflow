import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import './User.css'
import userpic from '../../assets/amanpic.jpg'
import { FaPen } from 'react-icons/fa'

export default function User() {
  return (
    <div>
        <div className="container">
            <div className="user_topcontainer">
                <div>
                    <img src={userpic} alt="user_pic" className='user_pic'></img>
                    <h2 className='user_name'>Aman Solanki</h2>
                </div>
                <Link to='/user/edit' className="editprofile"><FaPen className='edit_icon'/> Edit Profile</Link>
                <div className="userbuttondiv">
                    <NavLink to='/user/profile' activeClassname="buttonactive" className="userbutton">Profile</NavLink>
                    <div className="userbutton">Activity</div>
                    <div className="userbutton">Saves</div>
                    <NavLink to='/user/edit' activeClassname="buttonactive" className="userbutton">Settings</NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}
