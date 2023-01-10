import React from 'react'
import { Link } from 'react-router-dom'
import { sendAvatar } from '../util'

export default function UserDiv({user}) {
  return (
    <div className='userdiv'>
        <img src={user?.image===''?sendAvatar():user?.image} alt='avatar' className='userdiv_avatar'></img>
        <div style={{textAlign:"left"}}>
            <Link to={`/user/${user._id}/profile`} style={{fontSize:"13px" ,marginBottom:"4px"}}>{user.name.display}</Link>
            <div style={{fontSize:"12px"}}>{user.location}</div>
            <div style={{textAlign:"left",fontWeight:'800',fontSize:'10px'}}>{user.posts.length}</div>
        </div>
    </div>
  )
}
