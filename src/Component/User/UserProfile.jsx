import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile() {
  return (
    <div className='userprofile'>
        <div className="user_about">
            <h2 className='user_title'>About</h2>
            <div className='user_aboutdescription user_div'>Your about me section is currently blank. Would you like to add one? <Link to='/user/edit' style={{minWidth:"max-content"}}>Edit profile</Link></div>
        </div>
        <h2 className="user_title">Badges</h2>
        <div className="user_badges user_div">
            <div className="user_badgediv1">
                <div className="user_badge">

                </div>
                <div className="user_badge">

                </div>
            </div>
            <div className="user_badgediv2">
                <div className="user_badge">

                </div>
            </div>
            
            <div className="user_badge"></div>
        </div>
        <h2 className="user_title">Posts</h2>
        <div className="user_post user_div">
        

        </div>
    </div>
  )
}
