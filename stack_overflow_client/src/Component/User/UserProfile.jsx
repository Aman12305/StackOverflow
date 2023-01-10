import React,{ useEffect,useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function UserProfile() {

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
    <div className='userprofile'>
        <div className="user_about">
            <h2 className='user_title'>About</h2>
            <div className='user_aboutdescription user_div'>
              {
                currentProfile?._id===User?._id?
                (
                  currentProfile?.about===''?
                  <span>
                    Your about me section is currently blank. Would you like to add one? <Link to={`/user/${id}/edit`} style={{minWidth:"max-content"}}>Edit profile</Link>
                  </span>
                  :
                  <span>{currentProfile?.about}</span>
                )
                :(
                  currentProfile?.about===''?
                  <span>
                    User about me section is currently blank.
                  </span>
                  :
                  <span>
                    {currentProfile?.about}
                  </span>
                )
              }
              {/* <span>
                  Your about me section is currently blank. Would you like to add one? <Link to={`/user/${id}/edit`} style={{minWidth:"max-content"}}>Edit profile</Link>
              </span> */}
              
            </div>
        </div>

        <h2 className="user_title">Posts</h2>
        <div className="user_post user_div">
        

        </div>

        <h2 className="user_title">Badges</h2>
        <div>
            <div className="user_badge"></div>
            <div className="user_badge"></div>
            <div className="user_badge"></div>
        </div>
        
    </div>
  )
}
