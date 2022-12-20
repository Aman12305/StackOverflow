import React from 'react'
import { Outlet,useLocation,Link } from 'react-router-dom'
import {FaQuestion,FaVoteYea,FaTags,FaGift} from 'react-icons/fa'
import './Auth.css'

export default function Auth() {

  const location = useLocation();
  return (
    <div className="container">
      <div className="row">
      <div className="auth_leftcontainer">
        <h1>Join the Stack Overflow community</h1>
        <div className='auth_leftcontainer_div'>
          <div><FaQuestion/><span> Get unstuck — ask a question</span></div>
          <div><FaVoteYea/> <span>Unlock new privileges like voting and commenting</span> </div>
          <div><FaTags/> <span>Save your favorite tags, filters, and jobs</span></div>
          <div><FaGift/> <span>Earn reputation and badges</span></div>
        </div>
        <p style={{maxWidth:"400px", paddingLeft:"10px" }}>Collaborate and share knowledge with a private group for FREE.
Get Stack Overflow for Teams free for up to 50 users. </p>
      </div>
      <div className="auth_rightcontainer">
        <Outlet/>
        {
          location.pathname==='/auth/login' ?
          (<p style={{fontSize:"small"}}>Don't have account?<Link to='/auth/signin' style={{marginLeft:"5px"}}>Create One</Link></p>):
          (<p style={{fontSize:"small"}}>Already have account?<Link to='/auth/login' style={{marginLeft:"5px"}}>Log in</Link> </p>)
        }

      </div>
      </div>
    </div>
  )
}
