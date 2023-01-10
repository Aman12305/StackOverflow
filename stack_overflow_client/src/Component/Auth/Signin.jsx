import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../actions/auth'
import {FaGoogle, FaGithub, FaFacebook} from 'react-icons/fa'
import { scrollToElement } from '../../actions/window'
import { sendAvatar } from '../util'

export default function Signin() {

    const [error,setError] = useState('')

    const [form,setForm] = useState({
        email:'',
        password:'',
        displayname:'',
        image:sendAvatar()
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        
        e.preventDefault();

        // setForm({
        //     ...form,
        //     'image':sendAvatar()
        // })

       dispatch(signup(form, navigate)).then((data)=>{
        if(data)
        {
            setError(data.message)
        }
       })
    }

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (
    <div className="login_container">
        <div className="login_top login_container_div">
            <div className="login_thirdparty">
                <FaGoogle className="login_thirdparty_icon"/>
                Sign up with Google
            </div>
            <div className="login_thirdparty">
                <FaGithub className="login_thirdparty_icon"/>
                Sign up with Github
            </div>
            <div className="login_thirdparty">
                <FaFacebook className="login_thirdparty_icon"/>
                Sign up with Facebook
            </div>
        </div>
        
        {
            error!=='' &&
            <div id="signup" className="error">
                <span>{error}</span>
            </div>
        }
        <form className="login_bottom  login_container_div" onSubmit={handleSubmit}>
            <div className='form_field'>
                <span className='form_label'>Display name</span>
                <input type="text" className='form_input' name="displayname" onChange={handleChange} required></input>
            </div>
            <div className='form_field'>
                <span className='form_label'>Email</span>
                <input type="email" className='form_input' name="email" onChange={handleChange} required></input>
            </div>
            <div className='form_field'>
                <span className='form_label'>Password</span>
                <input className='form_input' name="password" onChange={handleChange} required></input>
            </div>
            <button type="submit" className='form_button'>Sign Up</button>
            <p style={{fontSize:"x-small"}}>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</p>
        </form>
    </div>
  )
}
