import React from 'react'
import {FaGoogle, FaGithub, FaFacebook} from 'react-icons/fa'

export default function Signin() {
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
        <form className="login_bottom  login_container_div">
            <div className='form_field'>
                <span className='form_label'>Display name</span>
                <input type="text" className='form_input' ></input>
            </div>
            <div className='form_field'>
                <span className='form_label'>Email</span>
                <input type="email" className='form_input'></input>
            </div>
            <div className='form_field'>
                <span className='form_label'>Password</span>
                <input className='form_input'></input>
            </div>
            <div type="submit" className='form_button'>Sign Up</div>
            <p style={{fontSize:"x-small"}}>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</p>
        </form>
    </div>
  )
}
