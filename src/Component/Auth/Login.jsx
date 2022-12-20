import React from 'react'
import {FaGoogle, FaGithub, FaFacebook} from 'react-icons/fa'

export default function Login() {
  return (
    <div className="login_container">
        <div className="login_top login_container_div">
            <div className="login_thirdparty">
                <FaGoogle className="login_thirdparty_icon"/>
                Log in with Google
            </div>
            <div className="login_thirdparty">
                <FaGithub className="login_thirdparty_icon"/>
                Log in with Github
            </div>
            <div className="login_thirdparty">
                <FaFacebook className="login_thirdparty_icon"/>
                Log in with Facebook
            </div>
        </div>
        <form className="login_bottom  login_container_div">
            <div className='form_field'>
                <span className='form_label'>Email</span>
                <input type="email" className='form_input'></input>
            </div>
            <div className='form_field'>
                <span className='form_forgot_label'>
                    <span className='form_label' style={{width:"48%"}}>Password</span>
                    <span className='form_label form_forgot' style={{width:"48%"}}>Forgot Password?</span>
                </span>
                
                <input className='form_input'></input>
            </div>
            <div type="submit" className='form_button'>Login</div>
        </form>
    </div>
  )
}
