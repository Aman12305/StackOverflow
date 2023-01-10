import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import UserDiv from './UserDiv'

export default function UserList() {
  const users = useSelector((state) => state.usersReducer)

  const [suggestions,setSuggestions] = useState('');

  const handleChange = (e) =>{
    setSuggestions(users?.filter((suggestion) => suggestion.name.display.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <div className='container'>
        <div className="user_topcontainer">
            <h2 style={{textAlign:'left',marginLeft:'10px'}}>Users</h2>
            <div className="search_box">
                <FaSearch className='search_icon'/>
                <input type='text' placeholder="Filter by user name" className='tagsearch_input' onChange={handleChange}></input>
            </div>
        </div>
        <div className="user_bottomcontainer">
          {
            suggestions.length!==0?
            suggestions.map((user,idx)=>(
              <UserDiv user={user} key={idx}/>
            )):
            users?.map((user,idx)=>(
              <UserDiv user={user} key={idx}/>
            ))
          }

        </div>
    </div>
  )
}
