import React,{useState,useEffect} from 'react'
import { NavLink, Outlet, Link, useParams } from 'react-router-dom'
import './User.css'
import userpic from '../../assets/amanpic.jpg'
import { FaPen } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { sendAvatar} from '../util'



export default function User() {
    
    const {id} = useParams();
    const currentUser = useSelector(state => state.currentUserReducer);
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users?.filter(item => item._id === id)[0];

    const [User,setUser] = useState(null);

    useEffect(()=>{

      const userData = localStorage.getItem('Profile');

      if(userData)
      {
        setUser(JSON.parse(userData));
      }
      else
      {
        setUser(null);
      }
    },[currentUser])

  return (
    <div>
        <div className="container">
            <div className="user_topcontainer">
            <div>
                <img src={currentProfile?.image===''?sendAvatar():currentProfile?.image} alt="user_pic" className='user_pic'></img>
                <h2 className='user_name'>{currentProfile?.name.display}</h2>
            </div>
                {
                    currentProfile?._id===User?.data._id && 
                    <Link to={`/user/${id}/edit`} className="editprofile"><FaPen className='edit_icon'/> Edit Profile</Link>
                }
                <div className="userbuttondiv">
                    <NavLink to={`/user/${id}/profile`} activeclassname="buttonactive" className="userbutton">Profile</NavLink>
                    <div className="userbutton">Activity</div>
                    <div className="userbutton">Saves</div>
                    {
                        currentProfile?._id===User?.data._id && 
                        <NavLink to={`/user/${id}/edit`} activeclassname="buttonactive" className="userbutton">Settings</NavLink>
                    }
                </div>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}
